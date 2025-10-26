import React from 'react';

export const Button = ({ 
  children, 
  className = '', 
  variant = 'default', 
  size = 'default',
  type = 'button',
  onClick,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50';
  
  const variants = {
    default: 'bg-slate-900 text-white hover:bg-slate-800',
    outline: 'border-2 border-slate-300 bg-transparent hover:bg-slate-100',
  };
  
  const sizes = {
    default: 'h-10 px-4 py-2',
    lg: 'h-12 px-8 py-3',
    icon: 'h-10 w-10',
  };
  
  return (
    <button 
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;