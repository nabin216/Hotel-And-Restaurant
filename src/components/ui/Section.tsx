import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'dark' | 'primary' | 'accent' | 'gradient';
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  container?: boolean;
}

const Section = ({
  children,
  className = '',
  id,
  background = 'white',
  spacing = 'lg',
  container = true,
}: SectionProps) => {
  // Background classes
  const backgroundClasses = {
    white: 'bg-white dark:bg-gray-900',
    light: 'bg-gray-50 dark:bg-gray-800',
    dark: 'bg-gray-900 text-white',
    primary: 'bg-primary-50 dark:bg-primary-900',
    accent: 'bg-accent-50 dark:bg-accent-900',
    gradient: 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white',
  };
  
  // Spacing classes
  const spacingClasses = {
    none: 'py-0',
    sm: 'py-4 md:py-6',
    md: 'py-8 md:py-12',
    lg: 'py-12 md:py-24',
    xl: 'py-16 md:py-32',
  };
  
  // Combine background and spacing classes
  const sectionClasses = `${backgroundClasses[background]} ${spacingClasses[spacing]} ${className}`;
  
  return (
    <section id={id} className={sectionClasses}>
      {container ? (
        <div className="container-custom">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
};

// Section subcomponents
Section.Header = ({ 
  title, 
  subtitle, 
  centered = false,
  className = '',
}: { 
  title: string; 
  subtitle?: string; 
  centered?: boolean;
  className?: string;
}) => (
  <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{title}</h2>
    {subtitle && <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">{subtitle}</p>}
  </div>
);

Section.Grid = ({ 
  children, 
  columns = 3, 
  gap = 'md',
  className = '',
}: { 
  children: ReactNode; 
  columns?: 1 | 2 | 3 | 4; 
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}) => {
  // Columns classes
  const columnsClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };
  
  // Gap classes
  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8',
  };
  
  return (
    <div className={`grid ${columnsClasses[columns]} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
};

export default Section; 