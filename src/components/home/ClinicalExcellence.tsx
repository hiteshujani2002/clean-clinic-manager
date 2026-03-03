import { ImageIcon } from 'lucide-react';

const ClinicalExcellence = () => {
  const placeholders = Array.from({ length: 6 });

  return (
    <section className="py-12 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary text-center">
            Our Clinical Excellence
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholders.map((_, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] bg-muted rounded-xl shadow-sm overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-muted-foreground/5 group-hover:bg-muted-foreground/10 transition-colors">
                  <ImageIcon className="w-8 h-8 text-muted-foreground/40" />
                  <span className="text-sm font-medium text-muted-foreground/60">
                    View Gallery
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicalExcellence;
