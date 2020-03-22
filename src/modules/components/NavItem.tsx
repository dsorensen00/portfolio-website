import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import withStyles, { WithStylesProps } from "react-jss"

const styles = {
  container:{
    backgroundColor:"#f8f8f8",
    padding:"1rem",
    color:"#324e7b",
    textDecoration:"none",
    fontSize:"1.5rem",
    display:"flex",
    "&:hover":{
      backgroundColor:"#86a6df",
      color:"#f8f8f8"
    },
    "@media (max-width: 800px)": {
      padding:".5rem",
    }
  },
  active:{
    backgroundColor:"#324e7b",
    color:"#f8f8f8",
    textDecoration:"none",
  },
}

interface Props extends WithStylesProps<typeof styles> {
  name?: string
  url?: string
  icon?: string
}

class _NavItem extends Component<Props> {
  render() {
    const { name, url, icon, classes } = this.props
    let current = url && window.location.pathname.includes(url)
    return (
      <NavLink className={`${classes.container} ${current ? classes.active : ""}`} to={`${url}`}>
        <span className="icon is-medium">
          <i className={icon}></i>
        </span>
        <div>{name}</div>
      </NavLink>
    )
  }
}

export const NavItem = withStyles(styles)(_NavItem)