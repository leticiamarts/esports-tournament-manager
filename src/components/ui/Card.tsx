import React from 'react';
import clsx from 'clsx';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div
      className={clsx(
        'bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:transform hover:scale-[1.02] transition-all duration-200',
        className
      )}
    >
      {children}
    </div>
  );
};