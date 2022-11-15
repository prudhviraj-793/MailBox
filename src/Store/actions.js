import { mailActions } from "./mailSlice";

export function storeMail(mails) {
    return async (dispatch) => {
      async function sendRequest() {
        const url =
          "https://mail-box-fe343-default-rtdb.firebaseio.com/allMails.json";
        const response = await fetch(url, {
          method: "PUT",
          body: JSON.stringify(mails),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        console.log(data);
      }
      sendRequest();
    };
  }

  export function getMails() {
    return async (dispatch) => {
      async function sendRequest() {
        const url =
          "https://mail-box-fe343-default-rtdb.firebaseio.com/allMails.json";
        const response = await fetch(url);
        const data = await response.json();
        if (!data) {
          dispatch(mailActions.replaceMails([]));
        } else {
          dispatch(mailActions.replaceMails(data));
        }
      }
      sendRequest();
    };
  }