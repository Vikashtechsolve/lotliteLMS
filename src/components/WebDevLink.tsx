import Link from 'next/link';

interface WebDevLinkProps {
  className?: string;
  children?: React.ReactNode;
}

const WebDevLink = ({ className = '', children = 'Learn More' }: WebDevLinkProps) => {
  return (
    <Link 
      href="/web-development" 
      className={`inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 ${className}`}
    >
      {children}
    </Link>
  );
};

export default WebDevLink; 