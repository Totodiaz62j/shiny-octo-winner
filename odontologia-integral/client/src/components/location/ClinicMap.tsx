import React, { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

export const ClinicMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
      center: [-64.2195, -31.3769],
      zoom: 15,
      attributionControl: false
    });

    new maplibregl.Marker({ color: '#2563eb' })
      .setLngLat([-64.2195, -31.3769])
      .addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  return (
    <div
      ref={mapContainer}
      className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden bg-gray-100"
    />
  );
};

export default ClinicMap;