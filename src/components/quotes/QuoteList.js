import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuote = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const sortingHistory = useHistory();
  const location = useLocation();

  console.log(location);

  const queryParam = new URLSearchParams(location.search);
  const isSortingAscending = queryParam.get("sort") === "asc";

  const sortedQuotes = sortQuote(props.quotes, isSortingAscending);

  const sortingHandler = () => {
    console.log(isSortingAscending);
    //shortWay
    sortingHistory.push({
      pathname: location.pathname,
      search: `?sort=${isSortingAscending ? "dsc" : "asc"}`,
    });

    //Long Way:
    // sortingHistory.push(
    //   `${location.pathname}?sort= ${isSortingAscending ? "dsc" : "asc"}`
    // );
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={sortingHandler}>
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
      </div>

      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
