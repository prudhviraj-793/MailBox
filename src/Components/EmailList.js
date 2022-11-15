import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { mailActions } from "../Store/mailSlice";

function EmailList({ mail, sent, type }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allMails = useSelector((state) => state.mail.mails);

  function emailHandler() {
    dispatch(mailActions.setCurrentMail(mail));
    navigate("/email");
  }

  function deleteHandler(id) {
    const updatedMails = [];
    for (let mail of allMails) {
      if (mail.id !== id) {
        updatedMails.push(mail);
      }
    }
    dispatch(mailActions.replaceMails(updatedMails));
  }

  return (
    <div className="container">
      <div
        className="row mb-1 gx-1 border"
        onClick={emailHandler}
        style={{ cursor: "pointer" }}
      >
        {!sent && !mail.mailRead && <div className="mail-status"></div>}
        <div className="col-3">
          <h5>{type === "sent" ? mail.to : mail.from}</h5>
        </div>
        <div className="col-4">
          <b>{mail.subject}</b>
        </div>
        <div className="col-3 text-truncate">
          <p>{mail.body}</p>
        </div>
        <div className="col-1">
          <p>{mail.time}</p>
        </div>
        <div className="col-1">
          <button
            className="btn btn-danger btn-sm"
            onClick={(e) => {
              e.stopPropagation();
              deleteHandler(mail.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
    // <div className="emailList-c">
    //   <div
    //     style={{ cursor: "pointer" }}
    //     onClick={emailHandler}
    //     className="emailList-container"
    //   >
    //     {!sent && !mail.mailRead && <div className="mail-status"></div>}
    //     <div>
    //       <h3>{type === "sent" ? mail.to : mail.from}</h3>
    //     </div>
    //     <div className="email-body">
    //       <div>
    //         <b>{mail.subject}</b>
    //       </div>
    //       <div>{mail.body}</div>
    //     </div>
    //     <div>
    //       <p>{mail.time}</p>
    //     </div>
    //   </div>
    //   <div>
    //     <button onClick={() => deleteHandler(mail.id)}>Delete</button>
    //   </div>
    // </div>
  );
}

export default EmailList;
