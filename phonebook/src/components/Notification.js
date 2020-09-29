import React from "react";

const Notification = ({ message, isMessageError }) => {
  let styleName = isMessageError ? "error" : "success";
  if (message === null) {
    return null;
  }
  return <div className={styleName}>{message}</div>;
};

export default Notification;
