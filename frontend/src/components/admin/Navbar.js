import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useUserContext } from "../../context/UserProvider";
import app_config from "../../config";








const Navbar = () => {

  const { loggedIn, setLoggedIn, logout } = useUserContext();
  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('admin')));
  const { apiUrl } = app_config;

  const showLoggedIn = () => {
    if (!loggedIn) {
      return (
        // <ul className="navbar-nav">
        <>
          {/* <li className="nav-item"> */}
          <NavLink className="nav-link" aria-current="page" to="/main/adminlogin">
            Login
          </NavLink>
          {/* </li> */}
          {/* <li className="nav-item"> */}
          <NavLink className="nav-link" aria-current="page" to="/main/signup">
            SignUp
          </NavLink>
          {/* </li> */}
        </>
        // </ul >
      );
    }
  };
  const showLogout = () => {
    if (loggedIn) {
      return (
        <>
          <li className="nav-item">
            <NavLink className="nav-link" to="/admin/manage">
              Manage Users
            </NavLink>
          </li>
          <div className="dropdown">
            <a
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              href="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img src={currentUser ? apiUrl + '/' + currentUser.avatar : 'https://png.pngtree.com/png-clipart/20210915/ourlarge/pngtree-avatar-placeholder-abstract-white-blue-green-png-image_3918476.jpg'} className="rounded-circle" height={25} alt="Black and White Portrait of a Man" loading="lazy" />
            </a>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
              <li>
                <NavLink className="dropdown-item" to="/user/profile">
                  My profile
                </NavLink>
              </li>

              <li>
                <a className="dropdown-item" href="" type='button' onClick={logout}>
                  Logout
                </a>
              </li>
            </ul>
          </div></>

      );
    }
  };



  return (
    <>

      {/* Navbar */}

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        {/* Container wrapper */}
        <div className="container-fluid">
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Navbar brand */}
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img

                src="/logo2.png"

                height={50}
                width={60}
                alt="AI MODERATOR"
                loading="lazy"
              />

            </a>
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">


              <li className="nav-item">
                <NavLink className="nav-link" to="/admin/manage">
                  Manage Users
                </NavLink>
              </li> 
              {/* {showLogout()} */}

            </ul>
          
          </div>
          {/* Collapsible wrapper */}
          {/* Right elements */}
          <div className="d-flex align-items-center">

            {/* <div className="dropdown"> */}
              <a className="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false">

                <img
                  src="/ailogo.avif"
                  className="rounded-circle"
                  height={25}
                  //alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <Link className="dropdown-item" to="/admin/profile">
                    My profile
                  </Link>
                </li>

                <li>
                  <a className="dropdown-item" onClick={logout} style={{ cursor: "pointer" }}>
                    Logout
                  </a>
                </li>
              </ul>

            {/* </div> */}
          </div>
          {/* Right elements */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>
  );
};

export default Navbar;