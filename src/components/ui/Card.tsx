import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  bordered?: boolean;
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = true,
  bordered = true,
  style,
}) => {
  const baseClasses = 'bg-black/30 p-8 rounded-lg';
  
  const borderClasses = bordered ? 'border border-white/10' : '';
  
  const hoverClasses = hoverable 
    ? 'transition-all duration-300 hover:border-[#00e5ff]/30 hover:shadow-[0_0_15px_rgba(0,229,255,0.15)]' 
    : '';
  
  const classes = twMerge(
    baseClasses,
    borderClasses,
    hoverClasses,
    className
  );
  
  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};

export default Card; 
