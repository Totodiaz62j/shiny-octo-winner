import React from 'react';

export const WhatsAppIcon = ({ className = "w-7 h-7", fill = "#25D366" }: { className?: string; fill?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill={fill}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.01 2C6.48 2 2 6.48 2 12.01c0 2.14 0.85 4.12 2.26 5.66L2.01 22l5.76-1.44c1.54.73 3.21 1.12 4.95 1.12 5.53 0 10.01-4.48 10.01-10.01 0-5.53-4.48-10.01-10.01-10.01zM12.01 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
  </svg>
);
