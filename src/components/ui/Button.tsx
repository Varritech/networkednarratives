import React, { ButtonHTMLAttributes } from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonPropsBase {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

// For buttons
interface ButtonAsButton extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>, ButtonPropsBase {
  as?: 'button';
  href?: never;
}

// For links
interface ButtonAsLink extends ButtonPropsBase {
  as: 'link';
  href: string;
  onClick?: () => void;
  children: React.ReactNode;
}

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button: React.FC<ButtonProps> = ({
  className = '',
  variant = 'primary',
  size = 'md',
  children,
  ...props
}) => {
  const baseClasses = 'font-bold transition-colors duration-300 inline-flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-[#00e5ff] text-black hover:bg-[#00e5ff]/80 border-2 border-[#00e5ff]',
    secondary: 'bg-transparent text-white border-2 border-white hover:border-[#00e5ff] hover:text-[#00e5ff]',
    outline: 'bg-transparent text-[#00e5ff] border-2 border-[#00e5ff] hover:bg-[#00e5ff] hover:text-black',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-10 py-4 text-xl',
  };
  
  const classes = twMerge(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );
  
  if (props.as === 'link') {
    return (
      <Link 
        href={props.href}
        className={classes}
        onClick={props.onClick}
      >
        {children}
      </Link>
    );
  }
  
  return (
    <button
      className={classes}
      {...(props as ButtonAsButton)}
    >
      {children}
    </button>
  );
};

export default Button; 
