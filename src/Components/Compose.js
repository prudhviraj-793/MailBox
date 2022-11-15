import React, { Fragment, useRef } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import "../CSS/Compose.css";
import { mailActions } from "../Store/mailSlice";

function Compose() {
  const toRef = useRef();
  const subjectRef = useRef();
  const bodyRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function sendHandler(e) {
    e.preventDefault();
    const enteredTo = toRef.current.value;
    const eneteredSubject = subjectRef.current.value;
    const enteredBody = bodyRef.current.value;

    const date = new Date();
    const hrs = date.getHours();
    const mins = date.getMinutes();

    const composedMail = {
      id: Math.random().toString(),
      to: enteredTo,
      from: localStorage.key(0),
      subject: eneteredSubject,
      body: enteredBody,
      time: `${hrs}:${mins}`,
      mailRead: false,
    };
    dispatch(mailActions.addMail(composedMail));
    navigate("/welcome");
  }

  return (
    <Fragment>
      {!localStorage.key(0) && <Navigate to="/login" />}
      {localStorage.key(0) && (
        <div className="compose-container">
          <form className="form" onSubmit={sendHandler}>
            <input placeholder="To" ref={toRef} />
            <input placeholder="Subject" ref={subjectRef} />
            <textarea rows="20" placeholder="Compose Mail.." ref={bodyRef} />
            <button className="send-btn" type="submit">
              Send
            </button>
          </form>
        </div>
      )}
    </Fragment>
  );
}

export default Compose;
