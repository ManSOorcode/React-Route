import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

const Quotes = (props) => {
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getAllQuotes, true);

  // const param = useParams();
  // console.log(param.quotesId);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!loadedQuote || loadedQuote.length === 0)) {
    return <NoQuotesFound />;
  }
  // const DUMMY_DATA = [
  //   { id: "d1", author: "Mansoor", text: "Learning react is good" },
  //   { id: "d2", author: "Osama", text: "Learning react is great" },
  // ];
  return (
    <div>
      <QuoteList quotes={loadedQuote} />
    </div>
  );
};

export default Quotes;
