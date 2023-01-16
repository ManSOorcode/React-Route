import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuotes = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);
  const addingNeqQuote = (newData) => {
    sendRequest(newData);
  };
  return (
    <div>
      <QuoteForm isLoading={status === "pending"} onAddQuote={addingNeqQuote} />
    </div>
  );
};

export default NewQuotes;
