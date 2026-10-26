
// This is the source code that will allow for the creation of a navbar that will persist between the pages to allow the user to view them.

import { NavLink } from 'react-router-dom';

const navItems = [
    { to: '/', label: 'Home' },
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/about', label: 'About' },
];

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
