import React, { Component } from "react";

import { Switch, Route, BrowserRouter } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import AppMenu from "./AppMenu";

const PageDashboard = () => (
  <Typography variant="h3" component="h1">
    Dashboard Page
  </Typography>
);
const PageOrders = () => (
  <Typography variant="h3" component="h1">
    Orders Page
  </Typography>
);
const PageCustomers = () => (
  <Typography variant="h3" component="h1">
    Customers Page
  </Typography>
);
const PageReports = () => (
  <Typography variant="h3" component="h1">
    Reports Page
  </Typography>
);

class SidebarMenu extends Component {
  render() {
    return (
      <div className="App">
        {/* <CalssCounter /> */}
        {/* <HookCounter /> */}
        {/* <MyForm /> */}
        {/* <ClassMyForm /> */}
        {/* <MyTable /> */}
        <BrowserRouter>
          <div>
            <CssBaseline />
            <Drawer variant="permanent">
              <AppMenu />
            </Drawer>
            <main>
              <Container maxWidth="lg">
                <Switch>
                  <Route path="/" exact component={PageDashboard} />
                  <Route path="/orders" component={PageOrders} />
                  <Route path="/customers" component={PageCustomers} />
                  <Route path="/reports" component={PageReports} />
                </Switch>
              </Container>
            </main>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default SidebarMenu;
