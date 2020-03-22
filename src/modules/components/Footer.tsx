import React, { Component } from "react"
import withStyles, { WithStylesProps } from "react-jss"
import { NavLink } from "react-router-dom"

const styles = {
  container: {
    backgroundColor: "f8f8f8",
    height:"20vh"
  },
  signature: {
    position: "absolute" as "absolute",
    right: "10vw",
    fontFamily: "'Allura', cursive",
    color: "#f8f8f8",
    fontSize: "10vw",
    fontWeight: "bolder" as "bolder",
    textShadow:
      "-3px -3px 3px #5068a9, 3px -3px 3px #5068a9, -3px 3px 3px #5068a9, 3px 3px 3px #5068a9",
    "@media (max-width: 1024px)": {
      display: "none"
    }
  },
  footerNav: {
    display: "flex",
    position: "relative" as "relative",
    listStyleType: "none",
    top: "10vh"
  },
  footerNavLink: {
    position: "relative" as "relative",
    textDecoration: "none",
    fontSize: "1rem",
    marginLeft: "3vw"
  }
}

class _Footer extends Component<WithStylesProps<typeof styles>> {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.container}>
        <div className={classes.signature}>DS</div>
        <ul className={classes.footerNav}>
          <li>
            <NavLink className={classes.footerNavLink} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={classes.footerNavLink} to="/contact">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink className={classes.footerNavLink} to="/projects">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink className={classes.footerNavLink} to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

export const Footer = withStyles(styles)(_Footer)
