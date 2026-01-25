import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
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

L.Marker.prototype.options.icon = defaultIcon;

interface Location {
  name: string;
  address: string;
  coordinates: [number, number];
}

const locations: Location[] = [
  {
    name: "Hilton Tower Clinic",
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
  return (
    <MapContainer
      center={[centerLat, centerLng]}
      zoom={17}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%', minHeight: '280px' }}
      className="rounded-l-2xl lg:rounded-l-2xl lg:rounded-r-none"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location, index) => (
        <Marker key={index} position={location.coordinates}>
          <Popup>
            <div className="text-sm">
              <strong className="text-secondary">{location.name}</strong>
              <p className="text-muted-foreground mt-1">{location.address}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default LocationMap;
