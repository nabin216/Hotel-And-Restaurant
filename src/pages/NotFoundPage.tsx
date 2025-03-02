import Button from '../components/ui/Button';
import Section from '../components/ui/Section';

const NotFoundPage = () => {
  return (
    <Section background="white" spacing="xl">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-9xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Page Not Found</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button href="/" size="lg">
          Return to Homepage
        </Button>
      </div>
    </Section>
  );
};

export default NotFoundPage; 