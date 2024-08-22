import React from "react";

function Sidebar() {
  return (
    <div>
      <div className="sidebar-nav sidebar--nav">
        <div className="sidebar-nav-body">
          <div className="side-menu-close">
            <i className="la la-times" />
          </div>
          {/* end menu-toggler */}
          <div className="author-content">
            <div className="d-flex align-items-center">
              <div className="author-img avatar-sm">
                <img src="../images/team/team-6.jpg" alt="testimonial image" />
              </div>
              <div className="author-bio">
                <h4 className="author__title">Hire_ Lawyer</h4>
                <span className="author__meta">Welcome to Lawyer Dashboard</span>
              </div>
            </div>
          </div>
          <div className="sidebar-menu-wrap">
            <ul className="sidebar-menu toggle-menu ">
              <li className="page-active">
                <a href="/Dashboard">
                  <i className="la la-dashboard mr-2" />
                  Lawyer Dashboard
                </a>
              </li>

              <li>
                <a href="UserProfile">
                  <i className="la la-user mr-2 text-color-8" />
                  My Profile
                </a>
              </li>

              <li>
                <a href="Setting">
                  <i className="la la-cog mr-2 text-color-10" />
                  Settings
                </a>
              </li>
              <li>
                <a href="Login">
                  <i className="la la-power-off mr-2 text-color-11" />
                  Logout
                </a>
              </li>
            </ul>
          </div>
          {/* end sidebar-menu-wrap */}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
