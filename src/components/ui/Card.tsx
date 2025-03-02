import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface CardProps {
  children: ReactNode;
  className?: string;
  href?: string;
  isExternal?: boolean;
  variant?: 'default' | 'elevated' | 'bordered' | 'flat';
  hoverEffect?: boolean;
}

const Card = ({
  children,
  className = '',
  href,
  isExternal = false,
  variant = 'default',
  hoverEffect = true,
}: CardProps) => {
  // Base classes
  const baseClasses = 'overflow-hidden rounded-lg transition-all duration-300';
  
  // Variant classes
  const variantClasses = {
    default: 'bg-white dark:bg-gray-800 shadow-md',
    elevated: 'bg-white dark:bg-gray-800 shadow-elegant',
    bordered: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
    flat: 'bg-gray-50 dark:bg-gray-900',
  };
  
  // Hover effect classes
  const hoverClasses = hoverEffect 
    ? 'hover:shadow-lg hover:-translate-y-1' 
    : '';
  
  // Combine all classes
  const cardClasses = `${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`;
  
  // If href is provided, render a Link or anchor
  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cardClasses}
        >
          {children}
        </a>
      );
    }
    
    return (
      <Link to={href} className={cardClasses}>
        {children}
      </Link>
    );
  }
  
  // Otherwise, render a div
  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
};

// Card subcomponents
Card.Header = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div className={`p-4 border-b border-gray-200 dark:border-gray-700 ${className}`}>
    {children}
  </div>
);

Card.Body = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);

Card.Footer = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div className={`p-4 border-t border-gray-200 dark:border-gray-700 ${className}`}>
    {children}
  </div>
);

Card.Image = ({ src, alt, className = '' }: { src: string; alt: string; className?: string }) => (
  <div className="overflow-hidden">
    <img 
      src={src} 
      alt={alt} 
      className={`w-full h-auto object-cover transition-transform duration-500 hover:scale-105 ${className}`} 
    />
  </div>
);

Card.Title = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <h3 className={`text-xl font-serif font-semibold text-gray-900 dark:text-white ${className}`}>
    {children}
  </h3>
);

Card.Subtitle = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <h4 className={`text-sm text-gray-600 dark:text-gray-400 ${className}`}>
    {children}
  </h4>
);

export default Card; 