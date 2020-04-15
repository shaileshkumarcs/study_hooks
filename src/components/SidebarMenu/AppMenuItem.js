import React, { Component, forwardRef } from "react";
import PropTypes from "prop-types";

import List from "@material-ui/core/List";
import { withStyles } from "@material-ui/core/styles";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";

import IconExpandLess from "@material-ui/icons/ExpandLess";
import IconExpandMore from "@material-ui/icons/ExpandMore";

import AppMenuItemComponent from "./AppMenuItemComponent";

// React runtime PropTypes
export const AppMenuItemPropTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  Icon: PropTypes.elementType,
  items: PropTypes.array,
};

const styles = {
  menuItem: {
    "&.active": {
      background: "rgba(0, 0, 0, 0.08)",
      "& .MuiListItemIcon-root": {
        color: "#fff",
      },
    },
  },
  menuItemIcon: {
    color: "#97c05c",
  },
};

class AppMenuItem extends Component {
  constructor(props) {
    super(props);
    console.log("This Props", props);
    this.state = {
      open: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  }
  render() {
    console.log("Render Props", this.props);
    const { name, link, Icon, items = [] } = this.props;
    const isExpandable = items && items.length > 0;
    const { open } = this.state;
    const classes = this.props;

    const MenuItemRoot = (
      <AppMenuItemComponent
        className={classes.menuItem}
        link={link}
        onClick={this.handleClick}
      >
        {/* Display an icon if any */}
        {!!Icon && (
          <ListItemIcon className={classes.menuItemIcon}>
            <Icon />
          </ListItemIcon>
        )}
        <ListItemText primary={name} inset={!Icon} />
        {/* Display the expand menu if the item has children */}
        {isExpandable && !open && <IconExpandMore />}
        {isExpandable && open && <IconExpandLess />}
      </AppMenuItemComponent>
    );

    const MenuItemChildren = isExpandable ? (
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Divider />
        <List component="div" disablePadding>
          {items.map((item, index) => (
            <AppMenuItem {...item} key={index} />
          ))}
        </List>
      </Collapse>
    ) : null;

    return (
      <div>
        {MenuItemRoot}
        {MenuItemChildren}
      </div>
    );
  }
}

export default withStyles(styles)(AppMenuItem);
