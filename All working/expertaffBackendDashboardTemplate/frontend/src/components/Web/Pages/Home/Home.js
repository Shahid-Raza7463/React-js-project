// import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Footer from '../Common/Footer';
import NavBar from '../Common/NavBar';
import TopAdspaces_1 from '../Adspaces/TopAdspaces_1';
import TopAdspaces_2 from '../Adspaces/TopAdspaces_2';
import TopAdspaces_3 from '../Adspaces/TopAdspaces_3';

export default function Home() {

  const [networksData, setNetworksData] = useState([]);
  const [contactusData, setContactusData] = useState([]);
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    // Call fetchData function for networks
    fetchData('http://localhost:5000/networks', setNetworksData);

    // Call fetchData function for contactus
    fetchData('http://localhost:5000/contactus', setContactusData);

    // Call fetchData function for users
    fetchData('http://localhost:5000/', setUsersData);
  }, []);

  const fetchData = async (url, setDataFunction) => {
    try {
      const response = await axios.get(url);
      setDataFunction(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // after click join now button 
  const handleJoin = (networkUrl) => {
    // Implement the logic for handling the join action here
    console.log("Join button clicked for network URL:", networkUrl);
    // For example, you can redirect the user to the network URL
    window.location.href = networkUrl;
  };


  return (
    <body>

      <div className="wrapper">

        {/* <!-- Navbar --> */}
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          {/* <!-- Left navbar links --> */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <a href="index3.html" className="nav-link">Home</a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <a href="#" className="nav-link">Contact</a>
            </li>
          </ul>

          {/* <!-- Right navbar links --> */}
          <ul className="navbar-nav ml-auto">
            {/* <!-- Navbar Search --> */}
            <li className="nav-item">
              <a className="nav-link" data-widget="navbar-search" href="#" role="button">
                <i className="fas fa-search"></i>
              </a>
              <div className="navbar-search-block">
                <form className="form-inline">
                  <div className="input-group input-group-sm">
                    <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                    <div className="input-group-append">
                      <button className="btn btn-navbar" type="submit">
                        <i className="fas fa-search"></i>
                      </button>
                      <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>

            {/* <!-- Messages Dropdown Menu --> */}
            <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown" href="#">
                <i className="far fa-comments"></i>
                <span className="badge badge-danger navbar-badge">3</span>
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <a href="#" className="dropdown-item">
                  {/* <!-- Message Start --> */}
                  <div className="media">
                    <img src="dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                    <div className="media-body">
                      <h3 className="dropdown-item-title">
                        Brad Diesel
                        <span className="float-right text-sm text-danger"><i className="fas fa-star"></i></span>
                      </h3>
                      <p className="text-sm">Call me whenever you can...</p>
                      <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                    </div>
                  </div>
                  {/* <!-- Message End --> */}
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  {/* <!-- Message Start --> */}
                  <div className="media">
                    <img src="dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                    <div className="media-body">
                      <h3 className="dropdown-item-title">
                        John Pierce
                        <span className="float-right text-sm text-muted"><i className="fas fa-star"></i></span>
                      </h3>
                      <p className="text-sm">I got your message bro</p>
                      <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                    </div>
                  </div>
                  {/* <!-- Message End --> */}
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  {/* <!-- Message Start --> */}
                  <div className="media">
                    <img src="dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                    <div className="media-body">
                      <h3 className="dropdown-item-title">
                        Nora Silvester
                        <span className="float-right text-sm text-warning"><i className="fas fa-star"></i></span>
                      </h3>
                      <p className="text-sm">The subject goes here</p>
                      <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                    </div>
                  </div>
                  {/* <!-- Message End --> */}
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
              </div>
            </li>
            {/* <!-- Notifications Dropdown Menu --> */}
            <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown" href="#">
                <i className="far fa-bell"></i>
                <span className="badge badge-warning navbar-badge">15</span>
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <span className="dropdown-item dropdown-header">15 Notifications</span>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  <i className="fas fa-envelope mr-2"></i> 4 new messages
                  <span className="float-right text-muted text-sm">3 mins</span>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  <i className="fas fa-users mr-2"></i> 8 friend requests
                  <span className="float-right text-muted text-sm">12 hours</span>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  <i className="fas fa-file mr-2"></i> 3 new reports
                  <span className="float-right text-muted text-sm">2 days</span>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-widget="fullscreen" href="#" role="button">
                <i className="fas fa-expand-arrows-alt"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-widget="control-sidebar" data-controlsidebar-slide="true" href="#" role="button">
                <i className="fas fa-th-large"></i>
              </a>
            </li>
          </ul>
        </nav>

        {/* <!-- Main Sidebar Container --> */}
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* <!-- Brand Logo --> */}
          <a href="index3.html" className="brand-link">
            <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" />
            <span className="brand-text font-weight-light">AdminLTE 3</span>
            {/* style="opacity: .8"  */}

          </a>

          {/* <!-- Sidebar --> */}
          <div className="sidebar">
            {/* <!-- Sidebar user panel (optional) --> */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
              </div>
              <div className="info">
                <a href="#" className="d-block">Alexander Pierce</a>
              </div>
            </div>

            {/* <!-- SidebarSearch Form --> */}
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

            {/* <!-- Sidebar Menu --> */}
            <nav className="mt-2">
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                {/* <!-- Add icons to the links using the .nav-icon className
               with font-awesome or any other icon font library --> */}
                <li className="nav-item menu-open">
                  <a href="#" className="nav-link active">
                    <i className="nav-icon fas fa-tachometer-alt"></i>
                    <p>
                      Dashboard
                      <i className="right fas fa-angle-left"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="./index1.html" className="nav-link active">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Dashboard v1</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="./index2.html" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Dashboard v2</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="./index3.html" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Dashboard v3</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="pages/widgets.html" className="nav-link">
                    <i className="nav-icon fas fa-th"></i>
                    <p>
                      Widgets
                      <span className="right badge badge-danger">New</span>
                    </p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-copy"></i>
                    <p>
                      Layout Options
                      <i className="fas fa-angle-left right"></i>
                      <span className="badge badge-info right">6</span>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="pages/layout/top-nav.html" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Top Navigation</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Top Navigation + Sidebar</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/layout/boxed.html" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Boxed</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/layout/fixed-sidebar.html" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Fixed Sidebar</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/layout/fixed-sidebar-custom.html" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Fixed Sidebar <small>+ Custom Area</small></p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/layout/fixed-topnav.html" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Fixed Navbar</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/layout/fixed-footer.html" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Fixed Footer</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/layout/collapsed-sidebar.html" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Collapsed Sidebar</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-chart-pie"></i>
                    <p>
                      Charts
                      <i className="right fas fa-angle-left"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="pages/charts/chartjs.html" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>ChartJS</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/charts/flot.html" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Flot</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/charts/inline.html" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Inline</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/charts/uplot.html" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>uPlot</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-tree"></i>
                    <p>
                      UI Elements
                      <i className="fas fa-angle-left right"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="pages/UI/general.html" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>General</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/UI/icons.html" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Icons</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/UI/buttons.html" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Buttons</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/UI/sliders.html" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Sliders</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/UI/modals.html" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Modals & Alerts</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/UI/navbar.html" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Navbar & Tabs</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/UI/timeline.html" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Timeline</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/UI/ribbons.html" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Ribbons</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-edit"></i>
                    <p>
                      Forms
                      <i className="fas fa-angle-left right"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="pages/forms/general.html" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>General Elements</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/forms/advanced.html" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Advanced Elements</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/forms/editors.html" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Editors</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/forms/validation.html" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Validation</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-table"></i>
                    <p>
                      Tables
                      <i className="fas fa-angle-left right"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="pages/tables/simple.html" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>Simple Tables</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/tables/data.html" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>DataTables</p>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="pages/tables/jsgrid.html" className="nav-link">
                        <i className="far fa-circle nav-icon"></i>
                        <p>jsGrid</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-header">EXAMPLES</li>
                <li className="nav-item">
                  <a href="pages/calendar.html" className="nav-link">
                    <i className="nav-icon far fa-calendar-alt"></i>
                    <p>
                      Calendar
                      <span className="badge badge-info right">2</span>
                    </p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/gallery.html" className="nav-link">
                    <i className="nav-icon far fa-image"></i>
                    <p>
                      Gallery
                    </p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="pages/kanban.html" className="nav-link">
                    <i className="nav-icon fas fa-columns"></i>
                    <p>
                      Kanban Board
                    </p>
                  </a>
                </li>



                <li className="nav-item">
                  <a href="https://adminlte.io/docs/3.1/" className="nav-link">
                    <i className="nav-icon fas fa-file"></i>
                    <p>Documentation</p>
                  </a>
                </li>
              </ul>
            </nav>
            {/* <!-- /.sidebar-menu --> */}
          </div>
          {/* <!-- /.sidebar --> */}
        </aside>

        <div className="content-wrapper">

          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0">Dashboard</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active">Dashboard v1</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <section className="content">
            <div className="container-fluid">
              {/* <!-- Small boxes (Stat box) --> */}
              <div className="row">
                <div className="col-lg-3 col-6">
                  {/* <!-- small box --> */}
                  <div className="small-box bg-info">
                    <div className="inner">
                      <h3>150</h3>

                      <p>New Orders</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-bag"></i>
                    </div>
                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                  </div>
                </div>
                {/* <!-- ./col --> */}
                <div className="col-lg-3 col-6">
                  {/* <!-- small box --> */}
                  <div className="small-box bg-success">
                    <div className="inner">
                      <h3>53<sup >%</sup></h3>
                      {/* style="font-size: 20px" */}

                      <p>Bounce Rate</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-stats-bars"></i>
                    </div>
                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                  </div>
                </div>
                {/* <!-- ./col --> */}
                <div className="col-lg-3 col-6">
                  {/* <!-- small box --> */}
                  <div className="small-box bg-warning">
                    <div className="inner">
                      <h3>44</h3>

                      <p>User Registrations</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-person-add"></i>
                    </div>
                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                  </div>
                </div>
                {/* <!-- ./col --> */}
                <div className="col-lg-3 col-6">
                  {/* <!-- small box --> */}
                  <div className="small-box bg-danger">
                    <div className="inner">
                      <h3>65</h3>

                      <p>Unique Visitors</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-pie-graph"></i>
                    </div>
                    <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right"></i></a>
                  </div>
                </div>
                {/* <!-- ./col --> */}
              </div>
            </div>
          </section>
        </div>

        <aside class="control-sidebar control-sidebar-dark">
          {/* <!-- Control sidebar content goes here --> */}
        </aside>
      </div>
    </body >
  )
}
