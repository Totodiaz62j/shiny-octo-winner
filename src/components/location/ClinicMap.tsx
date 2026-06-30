import React from 'react';
import { Map, Marker } from 'mapcn';
import { MapPin } from 'lucide-react';

const ClinicMap: React.FC = () => {
  return (
    <div className="h-full w-full overflow-hidden rounded-3xl">
      <Map
        defaultCenter={[-64.183, -31.416]}
        defaultZoom={15}
        // Style configuration for "Dental Tech" look (light/clean)
        styleUrl="https://basemaps.cartocdn.com/gl/voyager-dark-gl-style/style.json"
      >
        <Marker center={[-64.183, -31.416]}>
          <div className="p-2 bg-blue-600 rounded-full shadow-lg transition-transform duration-1000 ease-out-expo">
            <MapPin className="w-6 h-6 text-white" />
          </div>
        </Marker>
      </Map>
    </div>
  );
};

export default ClinicMap;
