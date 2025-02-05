import React from "react";
import Header from "./../../nouveau-header/Header";
import Sidebar from "./../../nouveau-header/Sidebar";
import Topbar from "./../../nouveau-header/Topbar";

const Project = () => {
   return( 
    <div className="container-fluid d-flex flex-column .main-container">
        <Header />
        <div className="row d-flex d-inline-flex side-topbar">
            <div className="col-md-2 col-2 sidebar-color">
            <Sidebar />
            </div>
            <div className="col-md-10 col-10 main-content">
            <div className="row">
                <div className="col-12 recent-section">
                <Topbar />
                </div>
            </div>

            
          <div className="row tab-act">
            PROJECT

        </div>
        </div>
        </div>
    </div>)
};

export default Project;