import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function SimpleButton({
  children,
  className = "",
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`font-medium py-3 px-6 rounded-full transition-all duration-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
