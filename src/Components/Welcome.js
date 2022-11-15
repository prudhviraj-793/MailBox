import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import "../CSS/Welcome.css";
import Sidebar from "./Sidebar";

function Welcome() {
  const isLogged = useSelector((state) => state.authentication.isLoggedIn);
  return (
    <Fragment>
      {!isLogged && <Navigate to="/login" />}
      {isLogged && (
        <div className="conatiner">
          <div className="header">
            <h2>Yahoo Mail Demo</h2>
          </div>
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="body">
            <Outlet />
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default Welcome;
