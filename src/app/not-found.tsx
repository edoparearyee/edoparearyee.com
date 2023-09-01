import ErrorSection from '@/components/ErrorSection/ErrorSection';

const NotFound = () => {
  return (
    <ErrorSection
      title="Page not found"
      text="Could not find the requested page"
      ctaText="Return Home"
      ctaHref="/"
    />
  );
};

export default NotFound;
