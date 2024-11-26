import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
}

export function Link({ href, children, mobile }: LinkProps) {
  return (
    <a
      href={href}
      className={`${
        mobile
          ? 'block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50'
          : 'text-gray-700 hover:text-indigo-600 transition-colors font-medium'
      }`}
    >
      {children}
    </a>
  );
}