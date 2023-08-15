import Link from 'next/link';

const NotFound = () => {
  return (
    <div style={{ paddingTop: '200px' }}>
      <h2>Not Found</h2>
      <p>Could not find the requested page</p>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default NotFound;
