import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

const Header = ({ showNav = true }) => {
  const location = useLocation();
  
  const navItems = [
    { path: '/dance-performance', label: 'Dance & Performance' },
    { path: '/videography', label: 'Videography & Content' },
    { path: '/tech-research', label: 'Tech & Research' },
    { path: '/planetwide-collective', label: 'Planetwide Collective' },
    { path: '/travel-culture', label: 'Travel & Culture' },
    { path: '/writings-philosophy', label: 'Writings & Philosophy' }
  ];

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Patri Portfolio" className="logo" />
        </Link>
      </div>
      {showNav && (
        <nav className="nav">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              >
                Home
              </Link>
            </li>
            {navItems.map((item) => (
              <li key={item.path} className="nav-item">
                <Link 
                  to={item.path} 
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
