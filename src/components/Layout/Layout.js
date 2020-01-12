import React from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// custompage
import Home from "../../custompage/home";
import Analytics from "../../custompage/analytics";

import Content from "../../custompage/content";
import Games from "../../custompage/games";
import Promotions from "../../custompage/promotions";
import Articles from "../../custompage/articles";
import Banners from "../../custompage/banners";
import Videos from "../../custompage/videos";


//Item Management
import Store from "../../custompage/store";
import Redemption from "../../custompage/redemption";

import Users from "../../custompage/users";
import Players from "../../custompage/players";
import Profile from "../../custompage/profile";

// pages
import Dashboard from "../../pages/dashboard";
import Typography from "../../pages/typography";
import Notifications from "../../pages/notifications";
import Maps from "../../pages/maps";
import Tables from "../../pages/tables";
import Icons from "../../pages/icons";
import Charts from "../../pages/charts";

// context
import { useLayoutState } from "../../context/LayoutContext";

function Layout(props) {
  var classes = useStyles();
  // global
  var layoutState = useLayoutState();
  return (
    <div className={classes.root}>
        <>
          <Header history={props.history} setToken={props.setToken} />
          <Sidebar />
          <div
            className={classnames(classes.content, {
              [classes.contentShift]: layoutState.isSidebarOpened,
            })}
          >
            <div className={classes.fakeToolbar} />
            <Switch>

              <Route path="/app/home" component={Home} />
              <Route path="/app/analytics" component={Analytics} />
              <Route path="/app/players" component={Players} />
              <Route exact path="/app/profile/:id" component={Profile} />


              <Route path="/app/users" component={Users} />
              <Route path="/app/redemptions" component={Redemption} />

              <Route
                exact
                path="/app/contents"
                render={() => <Redirect to="/app/contents/main" />}
              />
                <Route path="/app/contents/main" component={Content} />
                <Route path="/app/contents/games" component={Games} />
                <Route path="/app/contents/articles" component={Articles} />

              <Route
                exact
                path="/app/item"
                render={() => <Redirect to="/app/item/main" />}
              />
                <Route path="/app/item/main" component={Store} />
                <Route path="/app/item/redemption" component={Redemption} />

            </Switch>
          </div>
        </>
    </div>
  );
}

export default withRouter(Layout);
