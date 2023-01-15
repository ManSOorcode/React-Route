import React from "react";
import {
  Route,
  useParams,
  Link,
  useRouteMatch,
  useLocation,
} from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NotFoundPage from "./NotFoundPage";

const QuotesDetails = () => {
  const params = useParams();
  const match = useRouteMatch();
  const location = useLocation();

  console.log(
    match
  ); /*{path: '/quotes/:quotesId', url: '/quotes/d1', isExact: false, params: {…}}
  isExact: false
  params: {quotesId: 'd1'}
  path: "/quotes/:quotesId"
  url: "/quotes/d1"
   */
  console.log(
    location
  ); /*{pathname: '/quotes/d1/comments', search: '', hash: '', state: undefined, key: '95f3mi'}
  hash: ""
  key: "95f3mi"
  pathname: "/quotes/d1/comments"
  search: ""
  state: undefined
  */

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
      <HighlightedQuote author={quote.author} text={quote.text} />
      <Route path={"/quotes/:quotesId"} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments...
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default QuotesDetails;
