
// This is the source code that will allow for the creation of a navbar that will persist between the pages to allow the user to view them.

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#242424', color: '#fff', display: 'flex', gap: '20px' }}>
      <Link to="/" style={{ color: '#646cff', textDecoration: 'none' }}>Home</Link>
      <Link to="/dashboard" style={{ color: '#646cff', textDecoration: 'none' }}>Dashboard</Link>
      <Link to="/about" style={{ color: '#646cff', textDecoration: 'none' }}>About</Link>
    </nav>
  );
}


function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-brand">Team Repository</div>

      <nav className="nav-links" aria-label="Main navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active' : ''}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Navbar



















































































































































