import React from "react";
import { useSelector } from "react-redux";
import EmailList from "./EmailList";

function Inbox() {
  const allMails = useSelector((state) => state.mail.mails);
  const myMails = [];
  for (let mail of allMails) {
    if (mail.to === localStorage.key(0)) {
      myMails.push(mail);
    }
  }
  return (
    <div>
      {myMails.map((mail) => {
        return <EmailList mail={mail} />;
      })}
    </div>
  );
}

export default Inbox;
