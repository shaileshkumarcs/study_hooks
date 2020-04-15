import React, { Component } from "react";

import List from "@material-ui/core/List";
import { withStyles } from "@material-ui/core/styles";
import IconDashboard from "@material-ui/icons/Dashboard";
import IconShoppingCart from "@material-ui/icons/ShoppingCart";
import IconPeople from "@material-ui/icons/People";
import IconBarChart from "@material-ui/icons/BarChart";
import IconLibraryBooks from "@material-ui/icons/LibraryBooks";

import AppMenuItem from "./AppMenuItem";

const drawerWidth = 240;

const styles = {
  appMenu: {
    width: "100%",
  },
  navList: {
    width: drawerWidth,
  },
  menuItem: {
    width: drawerWidth,
  },
  menuItemIcon: {
    color: "#97c05c",
  },
};

const appMenuItems = [
  {
    name: "Dashboard",
    link: "/",
    Icon: IconDashboard,
  },
  {
    name: "Orders",
    link: "/orders",
    Icon: IconShoppingCart,
  },
  {
    name: "Customers",
    link: "/customers",
    Icon: IconPeople,
  },
  {
    name: "Reports",
    link: "/reports",
    Icon: IconBarChart,
  },
  {
    name: "Nested Pages",
    Icon: IconLibraryBooks,
    items: [
      {
        name: "Level 2",
        link: "/orders",
        Icon: IconShoppingCart,
      },
      {
        name: "Level 2",
        Icon: IconShoppingCart,
        items: [
          {
            name: "Level 3",
            link: "/orders",
            Icon: IconShoppingCart,
          },
          {
            name: "Level 3",
            link: "/orders",
            Icon: IconShoppingCart,
          },
        ],
      },
    ],
  },
];

class AppMenu extends Component {
  render() {
    const { classes } = this.props;
    console.log("RRRR", classes.appMenu);
    return (
      <div>
        <List component="nav" className={classes.appMenu} disablePadding>
          {appMenuItems.map((item, index) => (
            // console.log(item);
            <AppMenuItem {...item} key={index} />
          ))}
        </List>
      </div>
    );
  }
}

export default withStyles(styles)(AppMenu);
