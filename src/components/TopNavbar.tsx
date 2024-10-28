import Link from 'next/link';
import React from 'react';

function TopNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href='/' className='nav-link'>Home</Link>
            </li>
            <li className="nav-item">
              <Link href='/employees' className='nav-link'>Employees</Link>
            </li>
            <li className="nav-item">
              <Link href='/departments' className='nav-link'>Departments</Link>
            </li>
            <li className="nav-item">
              <Link href='/news' className='nav-link'>News</Link>
            </li>
          </ul>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Your switch component goes here */}
          <div className="form-check form-switch">
            {/*<Login />*/}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopNavbar;
