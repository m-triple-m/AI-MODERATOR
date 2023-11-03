import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useUserContext } from "../../context/UserProvider";

const Navbar = () => {

  const { loggedIn, setLoggedIn, logout } = useUserContext();


  const showLogout = () => {
    if (loggedIn) {
      return (
        <ul className="navbar-nav">
          {/* // <li className="nav-item"> */}
          {/* <button className="btn btn-danger ms-3" aria-current="page" onClick={logout}>
                        Logout
                    </button> */}
          <button type="button" className="btn btn-primary me-3 mb-2" onClick={logout}>
            LogOut
          </button>
          {/* // </li> */}
        </ul>
      );
    }
  }



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
            <Link className="navbar-brand mt-2 mt-lg-0" to="/main/home">
              <img
                src="/logo2.png"
                height={50}
                width={60}
                alt="AI MODERATOR"
                loading="lazy"
              />
            </Link>
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/user/Dashboard">
                  Dashboard
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/user/extensiongen">
                  Generate Extension
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/user/plugingen">
                  Generate Plugin
                </NavLink>
              </li>



            </ul>
            {/* Left links */}
          </div>

          {/* Right elements */}
          <div className="d-flex align-items-center">



            <a
              className="dropdown-toggle align-items-center hidden-arrow"
              href="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="/ailogo.avif"
                className="rounded-circle"
                height={25}
                loading="lazy"
              />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <li>
                <Link className="dropdown-item" to="/user/profile">
                  My profile
                </Link>
              </li>
              
              <li>
                <a className="dropdown-item" onClick={logout} style={{cursor:"pointer"}}>
                  Logout
                </a>
              </li>
            </ul>


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