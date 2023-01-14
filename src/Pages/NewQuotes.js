import React from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuotes = () => {
  const history = useHistory();
  const addingNeqQuote = (newData) => {
    console.log(newData);

    history.push("/quotes");
  };
  return (
    <div>
      <QuoteForm onAddQuote={addingNeqQuote} />
    </div>
  );
};

export default NewQuotes;
