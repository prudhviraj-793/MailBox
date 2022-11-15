import React from "react";
import SidebarOptions from "./SidebarOptions";
// import "../CSS/Sidebar.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Sidebar() {
  const allMails = useSelector((state) => state.mail.mails);
  const navigate = useNavigate();
  let sentCount = 0;
  allMails.forEach((mail) => {
    if (mail.from === localStorage.key(0)) {
      sentCount++;
    }
  });

  const myMails = [];
  let count = 0;
  for (let mail of allMails) {
    if (mail.to === localStorage.key(0)) {
      myMails.push(mail);
    }
  }
  for (let mail of myMails) {
    if (!mail.mailRead) {
      count++;
    }
  }

  function composeHandler(e) {
    e.preventDefault();
    navigate("/compose");
  }

  function inboxHandler() {
    navigate("/welcome");
  }

  function sentHandler() {
    navigate("/welcome/sent");
  }

  return (
    <div className="container">
      <div className="row">
        <button className="btn btn-primary" onClick={composeHandler}>
          Compose
        </button>
      </div>
      <div className="row">
        <div style={{ cursor: "pointer" }} onClick={inboxHandler}>
          <SidebarOptions title="Inbox" count={count} />
        </div>
        <SidebarOptions title="Draft" />
        <SidebarOptions title="Spam" />
        <div style={{ cursor: "pointer" }} onClick={sentHandler}>
          <SidebarOptions title="Sent" count={sentCount} />
        </div>
      </div>
    </div>
    // <div className="sidebar-container">
    //   <button onClick={composeHandler}>Compose</button>
    //   <div style={{ cursor: "pointer" }} onClick={inboxHandler}>
    //     <SidebarOptions title="Inbox" count={count} />
    //   </div>
    //   <SidebarOptions title="Draft" />
    //   <SidebarOptions title="Spam" />
    //   <div style={{ cursor: "pointer" }} onClick={sentHandler}>
    //     <SidebarOptions title="Sent" count={sentCount} />
    //   </div>
    // </div>
  );
}

export default Sidebar;
