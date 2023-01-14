import { Switch, Route, Redirect } from "react-router-dom";
import NewQuotes from "./Pages/NewQuotes";
import Quotes from "./Pages/Quotes";
import QuotesDetails from "./Pages/QuotesDetails";
// import {  } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Redirect to="/quotes" />
      </Route>
      <Route path="/quotes" exact>
        <Quotes />
      </Route>
      <Route path="/quotes/:quotesId">
        <QuotesDetails />
      </Route>
      <Route path="/new-quotes">
        <NewQuotes />
      </Route>
    </Switch>
  );
}

export default App;
