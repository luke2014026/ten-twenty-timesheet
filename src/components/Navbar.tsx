import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { getStoredAuth, logout } from '@/lib/api/auth';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const auth = getStoredAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <div className="navbar-logo">ticktock</div>
          <div className="navbar-links">
            <a href="/dashboard" className="navbar-link">
              Timesheets
            </a>
          </div>
        </div>

        <div className="navbar-right">
          <div className="user-dropdown">
            <button
              className="user-dropdown-trigger"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="user-name">{auth?.user?.name || 'User'}</span>
              <ChevronDown className="chevron-icon" />
            </button>
            
            {isDropdownOpen && (
              <div className="dropdown-menu">
                <button onClick={handleLogout} className="dropdown-item">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
