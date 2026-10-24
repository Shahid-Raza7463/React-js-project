import React from 'react';

export default function Dashboard() {
  return (
    <div className="hold-transition sidebar-mini layout-navbar-fixed">

      {/* Site wrapper */}
      <div className="wrapper">
        {/* Navbar */}
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" data-widget="pushmenu" href="#" role="button">
                <i className="fas fa-bars"></i>
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <form action="{{ route('logout') }}" method="post">
              @csrf
              <input type="submit" value="Logout" className="btn btn-sm mt-3" />
            </form>
          </ul>
        </nav>
        {/* /navbar */}

        {/* Main Sidebar Container */}
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <a href="#" className="brand-link elevation-4">
            <img src='' alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
            <span className="brand-text font-weight-light">EXPERTAFF</span>
          </a>

          {/* Sidebar */}
          <div className="sidebar">
            {/* SidebarSearch Form */}
            <div className="form-inline">
              <div className="input-group" data-widget="sidebar-search">
                <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                <div className="input-group-append">
                  <button className="btn btn-sidebar">
                    <i className="fas fa-search fa-fw"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* /sidebar */}
        </aside>
        {/* /Main Sidebar Container */}

        {/* Sidebar Menu */}
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            {/* Home */}
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-home"></i>
                <p>
                  Home
                  <i className="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Index 1</p>
                  </a>
                </li>
              </ul>
            </li>

            {/* Networks */}
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="nav-icon fas fa-network-wired"></i>
                <p>
                  Networks
                  <i className="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul className="nav nav-treeview">
                <li className="nav-item">
                  <a href="/admin/networks-list/create" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Create New Network</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/admin/networks-list" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>All Networks</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/admin/sponsored" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>All Sponsored</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/admin/top-networks" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Top 10 Networks</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/admin/featured-networks" className="nav-link">
                    <i className="far fa-circle nav-icon"></i>
                    <p>Featured Networks</p>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {/* /Sidebar Menu */}
      </div>
      {/* /wrapper */}
    </div>
  );
}
