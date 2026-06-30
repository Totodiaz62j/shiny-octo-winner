import React from 'react';
import React, { MapPin, Phone, Navigation, MessageCircle } from 'lucide-react';

interface LocationPanelProps {
  className?: string;
}

const LocationPanel: React.FC<LocationPanelProps> = ({ className = "" }) => {
  const address = "Rodríguez del Busto 2674, X5000 Córdoba";
  const phone = "+54 9 351 611-4515";
  const googleMapsUrl = `https://www.google.com/maps/place/Odontolog%C3%ADa+Integral+C%C3%B3rdoba/@-31.3765845,-64.2226409,17z/data=!4m16!1m9!3m8!1s0x9432996f79ad9271:0xcd33c9e979d928f5!2sOdontolog%C3%ADa+Integral+C%C3%B3rdoba!8m2!3d-31.3765845!4d-64.2226409!9m1!1b1!16s%2Fg%2F11vc73mw4h!3m5!1s0x9432996f79ad9271:0xcd33c9e979d928f5!8m2!3d-31.3765845!4d-64.2226409!16s%2Fg%2F11vc73mw4h?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D`;
  const whatsappUrl = `https://wa.me/5493516114515`;

  return (
    <div className={`
      relative z-10
      w-full max-w-md
      p-6 rounded-2xl
      bg-white/40 backdrop-blur-md
      border border-white/20
      shadow-xl
      text-slate-800
      transition-all duration-300
      ${className}
    `}>
      <div className="space-y-6">
        {/* Header */}
        <div className="space-y-1">
          <h3 className="text-xl font-semibold text-slate-900">Ubicación</h3>
          <p className="text-sm text-slate-600">Visítanos en nuestra clínica</p>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <div className="flex items-start gap-3 group">
            <div className="p-2 rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <MapPin size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Dirección</span>
              <span className="text-sm font-medium text-slate-700">{address}</span>
            </div>
          </div>

          <div className="flex items-start gap-3 group">
            <div className="p-2 rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <Phone size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Teléfono</span>
              <span className="text-sm font-medium text-slate-700">{phone}</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg active:scale-95 w-full"
          >
            <Navigation size={16} />
            Cómo llegar
          </a>
        </div>
      </div>
    </div>
  );
};

export default LocationPanel;
