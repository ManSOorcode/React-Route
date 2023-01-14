import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const Quotes = (props) => {
  const DUMMY_DATA = [
    { id: "d1", author: "Mansoor", text: "Learning react is good" },
    { id: "d2", author: "Osama", text: "Learning react is great" },
  ];
  return (
    <div>
      <QuoteList quotes={DUMMY_DATA} />
    </div>
  );
};

export default Quotes;
