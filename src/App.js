import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
// import Navigation from "./components/layout/Navigation";/
import NewQuotes from "./Pages/NewQuotes";
import NotFoundPage from "./Pages/NotFoundPage";
import Quotes from "./Pages/Quotes";
import QuotesDetails from "./Pages/QuotesDetails";
// import {  } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Layout>
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
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </Layout>
    </React.Fragment>
  );
}

export default App;
