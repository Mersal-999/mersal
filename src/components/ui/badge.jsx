import React from 'react';

const Badge = ({ children, className = '', ...props }) => {
  return (
    <div 
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${className}`} 
      {...props}
    >
      {children}
    </div>
  );
};

export { Badge };
export default Badge;