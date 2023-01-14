import React from "react";
import { useParams } from "react-router-dom";

const QuotesDetails = () => {
  const params = useParams();

  console.log(params.quotesId);
  return (
    <div>
      <h1>Qoutes Details pages</h1>
      <p>{params.quotesId}</p>
    </div>
  );
};

export default QuotesDetails;
