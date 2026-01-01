"use client";

import { ReactNode } from "react";

type IconButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
type IconButtonSize = 'sm' | 'md' | 'lg';

type IconButtonProps = {
  icon?: ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>|React.FormEvent<HTMLFormElement>) => void;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  text?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
};

export function IconButton({ 
  icon, 
  onClick, 
  variant = 'primary',
  size = 'md',
  text,
  fullWidth = false,
  disabled = false,
  className = ''
}: IconButtonProps) {
  
  // Base styles - brutalist/neo-brutalism
  const baseStyles = `
    font-bold uppercase tracking-wider
    transition-all duration-200
    inline-flex items-center justify-center gap-2
    border-2
    disabled:opacity-50 disabled:cursor-not-allowed
    disabled:hover:translate-x-0 disabled:hover:translate-y-0
  `;

  // Variant styles
  const variants = {
    primary: `
      bg-emerald-400 text-black border-black
      hover:bg-emerald-300
      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
      hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
      hover:translate-x-[2px] hover:translate-y-[2px]
      active:shadow-none active:translate-x-[4px] active:translate-y-[4px]
    `,
    secondary: `
      bg-cyan-400 text-black border-black
      hover:bg-cyan-300
      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
      hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
      hover:translate-x-[2px] hover:translate-y-[2px]
      active:shadow-none active:translate-x-[4px] active:translate-y-[4px]
    `,
    danger: `
      bg-red-500 text-white border-black
      hover:bg-red-400
      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
      hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
      hover:translate-x-[2px] hover:translate-y-[2px]
      active:shadow-none active:translate-x-[4px] active:translate-y-[4px]
    `,
    ghost: `
      bg-transparent text-white border-zinc-700
      hover:bg-zinc-800 hover:border-zinc-600
      hover:translate-x-[1px] hover:translate-y-[1px]
    `,
  };

  // Size styles
  const sizes = {
    sm: 'px-3 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${widthClass}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {icon && icon}
      {text && <span>{text}</span>}
    </button>
  );
}