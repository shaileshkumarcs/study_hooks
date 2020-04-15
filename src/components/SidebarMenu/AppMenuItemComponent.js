import React, { Component, forwardRef } from "react";
import ListItem from "@material-ui/core/ListItem";
import { NavLink, NavLinkProps } from "react-router-dom";

class AppMenuItemComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { className, onClick, link, children } = this.props;
    // If link is not set return the orinary ListItem
    if (!link || typeof link !== "string") {
      return (
        <ListItem
          button
          className={className}
          children={children}
          onClick={onClick}
        />
      );
    }

    console.log("Thisprops", this.props);

    return (
      //   <div>Hi</div>
      <ListItem
        button
        className={className}
        children={children}
        component={forwardRef((props: NavLinkProps, ref: any) => (
          <NavLink
            activeStyle={{ background: "red" }}
            exact
            {...props}
            innerRef={ref}
          />
        ))}
        to={link}
      />
    );
  }
}

export default AppMenuItemComponent;
