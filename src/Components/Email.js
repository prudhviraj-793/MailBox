import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Email() {
  const mail = useSelector((state) => state.mail.currentMail);
  const isLogged = useSelector((state) => state.authentication.isLoggedIn);
  return (
    <Fragment>
      {!isLogged && <Navigate to="/login" />}
      {isLogged && (
        <div className="container my-2 p-3 border">
          <div className="row">
            <h3>to: {mail.to}</h3>
          </div>
          <div className="row">
            <div className="col">
              <h5>Subject: {mail.subject}</h5>
            </div>
            <div className="col">
              <span>{mail.time}</span>
            </div>
          </div>
          <p>{mail.body}</p>
        </div>
      )}
    </Fragment>
  );
}

export default Email;
