import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInicialState";

import Layout from "../components/Layout";
import Home from "../containers/Home";
import Details from "../containers/Details";
import NewFlight from "../containers/NewFlight";
import EditFlight from "../containers/EditFlight";

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/details" component={Details} />
            <Route exact path="/new-flight" component={NewFlight} />
            <Route exact path="/edit-flight" component={EditFlight} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
