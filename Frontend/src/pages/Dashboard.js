import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />

        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-sm-12 text-center">
              <img
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRN-UNBadtDMKHlf53HzuXYlbgZHDkdGkS-SkMXnNAJT4r1Njdx"
                width="500"
                height="500"
                className="d-inline-block align-top ms-2 mt-5"
                alt="Logo"
              />

              <br />
              <p>Welcome to admin Dashboard.</p>

            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Dashboard;