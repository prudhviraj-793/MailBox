import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
  name: "mail",
  initialState: { mails: [], currentMail: {} },
  reducers: {
    addMail(state, action) {
      state.mails.push(action.payload);
    },
    replaceMails(state, action) {
      state.mails = action.payload;
    },
    setCurrentMail(state, action) {
      state.currentMail = action.payload;
      const allMails = [...state.mails];
      for (let mail of allMails) {
        if (mail.id === action.payload.id) {
          mail.mailRead = true;
        }
      }
      state.mails = allMails;
    },
  },
});

export const mailActions = mailSlice.actions;

export default mailSlice.reducer;
