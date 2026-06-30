import React, { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { MapPin } from 'lucide-react';

const ClinicMap: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Only initialize if mapRef.current is null to avoid duplicate maps on Hot Reload
    if (!mapRef.current) {
      mapRef.current = new maplibregl.Map({
        container: mapContainerRef.current,
        style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
        center: [-64.2195, -31.3769],
        zoom: 15,
      });

      // Add a marker for the clinic
      new maplibregl.Marker({
        color: '#1E3A8A',
      })
        .setLngLat([-64.2195, -31.3769])
        .addTo(mapRef.current);

      // Add navigation controls
      mapRef.current.addControl(new maplibregl.NavigationControl(), 'top-right');
    }

    return () => {
      // We don't remove map here to prevent flicker during Vite HMR,
      // but in a real app you'd clean up on unmount.
    };
  }, []);

  return (
    <div className="h-full w-full overflow-hidden rounded-3xl relative">
      <div ref={mapContainerRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export default ClinicMap;
