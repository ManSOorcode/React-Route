import React from "react";
import { Route, useParams } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NotFoundPage from "./NotFoundPage";

const QuotesDetails = () => {
  const params = useParams();

  console.log(params.quotesId);

  const DUMMY_DATA = [
    { id: "d1", author: "Mansoor", text: "Learning react is good" },
    { id: "d2", author: "Osama", text: "Learning react is great" },
  ];

  const quote = DUMMY_DATA.find((quote) => quote.id === params.quotesId);

  if (!quote) {
    return <NotFoundPage />;
  }
  return (
    <div>
      {/* <h1>Qoutes Details pages</h1>
      <p>{params.quotesId}</p> */}
      <HighlightedQuote author={quote.author} text={quote.text} />
      <Route path="/quotes/:quotesId/comments">
        <Comments />
      </Route>
    </div>
  );
};

export default QuotesDetails;
