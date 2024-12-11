import React from 'react';
import { NavLink } from 'react-router-dom';  // Use NavLink instead of Link


const Header = ({ userAuthenticated , userAvatar,onLogout  }) => {
  return (
    <header className="bg-light border-bottom p-3">
      <div className="container">
        <div className="row align-items-center">
          {/* Logo and Brand */}
          <div className="col-12 col-md-4 mb-3 mb-md-0">
            <NavLink className="navbar-brand text-cyan-900 fw-bold fs-2" to="/">
              Food Application
            </NavLink>
          </div>

          {/* Navigation Links */}
          <div className="col-12 col-md-4 d-flex justify-content-center mb-3 mb-md-0">
            <p className="nav-item">
              <NavLink
                className="nav-link text-cyan-900  fw-bold"
                activeClassName="text-cyan-900 " // Apply a different shade of pink when active
                to="/"
              >
                Home
              </NavLink>
            </p>
            <p className="nav-item">
              <NavLink
                className="nav-link text-cyan-900  fw-bold"
                activeClassName="text-cyan-800 " // Apply a different shade of pink when active
                to="/category"
              >
                Category
              </NavLink>
            </p>
            <p className="nav-item">
              <NavLink
                className="nav-link text-cyan-900  fw-bold"
                activeClassName="text-cyan-800 " // Apply a different shade of pink when active
                to="/menu"
              >
                Menu
              </NavLink>
            </p>
          </div>

          {/* Authentication/Cart */}
          <div className="col-12 col-md-4 d-flex justify-content-end">
            {userAuthenticated ? (
              <div className="d-flex align-items-center">
                <div className="me-3">
                <NavLink className="nav-link fw-bold text-cyan-900" to="/profile">
                  <img
                    src={userAvatar}
                    alt="User Avatar"
                    className="rounded-circle"
                    style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                  />
                  </NavLink>
                </div>
                {/* Cart Icon */}
                <div className="me-4">
                <NavLink className="nav-link fw-bold text-cyan-900 " to="/cart">
                  <span className="p-2">        
                    <i className="fa-solid fa-cart-shopping text-cyan-900  fs-4"></i>
                  </span>
                  </NavLink>
                </div>
                {/* LogOut Link */}
                <div>
                <NavLink
                    className="nav-link fw-bold text-cyan-900"
                    to="/"
                    onClick={onLogout} // Trigger the logout function
                  >   LogOut
                  </NavLink>
                </div>
              </div>
            ) : (
              <div>
                {/* LogIn Link */}
                <NavLink className="nav-link fw-bold text-cyan-900 " to="/account/login">
                  LogIn
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
