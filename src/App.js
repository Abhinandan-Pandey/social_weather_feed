import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import NewsFeed from "./Pages/NewsFeed";
import * as actions from "./store/actions/index";

function App(props) {
  const { startFetchingFeed } = props;

  useEffect(() => {
    startFetchingFeed();
  }, [startFetchingFeed]);

  const routes = (
    <Switch>
      <Route path="/" component={NewsFeed} />
    </Switch>
  );

  return <>{routes}</>;
}

const mapDispatchToProps = (dispatch) => {
  return {
    startFetchingFeed: () => dispatch(actions.fetchingFeed()),
  };
};

export default connect(null, mapDispatchToProps)(App);
