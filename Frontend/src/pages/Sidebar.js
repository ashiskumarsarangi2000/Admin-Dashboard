
import React from "react";
import './Sidebar.css';

const Sidebar = () => {
    return (
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" style={{ width: '230px', height: '100vh', marginTop: '-7px' }}>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="/dashboard" className="nav-link link-dark sidebar-link" >
            <i className="bi bi-house"></i>
              {/* <img src="./assets/house.svg" width="20" eight="20" className="d-inline-block align-top" alt="Logo" /> */}
              &nbsp;&nbsp;Dashboard&nbsp;&nbsp;&nbsp;&nbsp;<span className="ms-4"><i class="bi bi-play-fill"></i></span>
            </a>
           
          </li>
          <br />
          <li>
            <a href="/Catagory" className="nav-link link-dark sidebar-link">
            <i class="bi bi-grid"></i>
              {/* <img src="./assets/grid.svg" width="20" height="20" className="d-inline-block align-top" alt="Logo" /> */}
              &nbsp;&nbsp;Category&nbsp;&nbsp;<span className="ms-5"><i class="bi bi-play-fill"></i></span>
            </a>
            
          </li>
          <br />
          <li>
            <a href="/subCatagory" className="nav-link link-dark sidebar-link">
            <i class="bi bi-list-task"></i>
              {/* <img src="./assets/list-task.svg" width="20" height="20" className="d-inline-block align-top" alt="Logo" /> */}
              &nbsp;&nbsp;Subcategory &nbsp;<span className="ms-4"><i class="bi bi-play-fill"></i></span>
            </a>
            
          </li>
          <br />
          <li className="d-inline">
            <a href="/product" className="nav-link link-dark sidebar-link ">
            <i class="bi bi-box-seam"></i>
              {/* <img src="./assets/box-seam.svg" width="20" height="20" className="d-inline-block align-top" alt="Logo" /> */}
              &nbsp;&nbsp;Products&nbsp;&nbsp;<span className="ms-5"><i class="bi bi-play-fill"></i></span>
            </a>
            
          </li>
        </ul>
        <hr />
      </div>
    );
  }
  
export default Sidebar