import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet with bundlers
const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface Location {
  name: string;
  address: string;
  coordinates: [number, number];
}

const locations: Location[] = [
  {
    name: "Sher-E-Punjab",
    address: "Shop no 17, HILTON TOWER, Jijamata Rd, Sher E Punjab, Andheri East, Mumbai 400093",
    coordinates: [19.1073, 72.8565],
  },
  {
    name: "Pump House Clinic",
    address: "Shop no.15, New Pump House, Jijamata chowk, opposite Hanjar nagar society, Andheri East, Mumbai 400093",
    coordinates: [19.1068, 72.8572],
  },
];

// Calculate center point between both locations
const centerLat = (locations[0].coordinates[0] + locations[1].coordinates[0]) / 2;
const centerLng = (locations[0].coordinates[1] + locations[1].coordinates[1]) / 2;

const LocationMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize the map
    const map = L.map(mapRef.current, {
      center: [centerLat, centerLng],
      zoom: 17,
      scrollWheelZoom: false,
    });

    mapInstanceRef.current = map;

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Add markers for each location
    locations.forEach((location) => {
      const marker = L.marker(location.coordinates, { icon: defaultIcon }).addTo(map);
      marker.bindPopup(`
        <div style="min-width: 180px;">
          <strong style="color: #1e3a5f; font-size: 14px;">${location.name}</strong>
          <p style="color: #666; font-size: 12px; margin-top: 4px; line-height: 1.4;">${location.address}</p>
        </div>
      `);
    });

    // Cleanup on unmount
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={mapRef} 
      style={{ height: '100%', width: '100%', minHeight: '280px', position: 'relative', zIndex: 0 }}
      className="rounded-t-2xl lg:rounded-t-none lg:rounded-l-2xl"
    />
  );
};

export default LocationMap;
