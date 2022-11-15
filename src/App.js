import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Compose from "./Components/Compose";
import Email from "./Components/Email";
import Inbox from "./Components/Inbox";
import Login from "./Components/Login";
import Sent from "./Components/Sent";
import Signup from "./Components/Signup";
import Welcome from "./Components/Welcome";
import { getMails, storeMail } from "./Store/actions";

let isInitial = true;

function App() {
  const allMails = useSelector((state) => state.mail.mails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMails());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(storeMail(allMails));
  }, [allMails, dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/welcome" element={<Welcome />}>
        <Route index element={<Inbox />} />
        <Route path="sent" element={<Sent />} />
      </Route>
      <Route path="/compose" element={<Compose />} />
      <Route path="/email" element={<Email />} />
    </Routes>
  );
}

export default App;
