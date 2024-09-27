import React from 'react'; 
import {Link} from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: '280px', height:'100vh' }}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        
        <span className="fs-4">  AB-Analytics</span>
     
        
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link active" aria-current="page">
            {/* Home Icon */}
            <i className="bi bi-house-door me-2"></i>
            <Link className='ok' style={{color:'white', textDecoration:'none'}} to="/">
            Home
            </Link>
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-dark">
            {/* Dashboard Icon */}
            {/* <i className="bi bi-speedometer2 me-2"></i> */}
            <Link className="nav-link " to="/CreateUser">
            CreateUser
            </Link>
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-dark">
            {/* Orders Icon */}
            {/* <i className="bi bi-table me-2"></i> */}
            <Link className="nav-link " to="/UpdateUser">
            UpdateUser
            </Link>
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-dark">
            {/* Products Icon */}
            {/* <i className="bi bi-grid me-2"></i> */}
            <Link className="nav-link " to="/DeleteUser">
            DeleteUser
            </Link>
          </a>
        </li>
        <li>
          <a href="#" className="nav-link link-dark">
            {/* Customers Icon */}
            {/* <i className="bi bi-people me-2"></i> */}
            
          </a>
        </li>
      </ul>
      <hr />
      <div className="dropdown">
        <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" alt="profile" width="32" height="32" className="rounded-circle me-2" />
          <strong>mdo</strong>
        </a>
        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
          <li><a className="dropdown-item" href="#">New project...</a></li>
          <li><a className="dropdown-item" href="#">Settings</a></li>
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><hr className="dropdown-divider" /></li>
          <li><a className="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;