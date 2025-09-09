import { Link, useLocation } from 'react-router-dom';
import './DanceHeader.css';
import logo from '../assets/logo.png';

const DanceHeader = () => {
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
    <header className="dance-header">
      <div className="dance-header-content">
        <div className="dance-logo-container">
          <Link to="/">
            <img src={logo} alt="Patri Portfolio" className="dance-logo" />
          </Link>
        </div>
        <nav className="dance-nav">
          <ul className="dance-nav-menu">
            <li className="dance-nav-item">
              <Link 
                to="/" 
                className={`dance-nav-link ${location.pathname === '/' ? 'active' : ''}`}
              >
                Home
              </Link>
            </li>
            {navItems.map((item) => (
              <li key={item.path} className="dance-nav-item">
                <Link 
                  to={item.path} 
                  className={`dance-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default DanceHeader;
