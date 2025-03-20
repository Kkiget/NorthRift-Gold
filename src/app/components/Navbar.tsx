import Link from 'next/link';

function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" passHref>
        <a className="navbar-brand">
          <span className="northrift" style={{ color: '#000000', fontWeight: 'bold', fontSize: '1.5rem' }}>NorthRift</span>
          <span className="gold" style={{ color: '#FFD700', fontWeight: 'bold', fontSize: '1.5rem' }}>Gold</span>
        </a>
      </Link>
      {/* ... other nav items ... */}
    </nav>
  );
}

export default Navbar; 