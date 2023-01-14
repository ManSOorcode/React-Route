import React from "react";
import notFound from "../images/404-error-message-3702341-3119133.png";

const NotFoundPage = () => {
  return (
    <div className="centered">
      <img src={notFound} alt="404 must here" />
    </div>
  );
};

export default NotFoundPage;
