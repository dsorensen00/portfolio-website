import React, { Component } from "react"
import withStyles, { WithStylesProps } from "react-jss"
import { NavItem } from "./NavItem"

const styles = {
    container:{
        backgroundColor:"#f8f8f8",
        position:"fixed" as "fixed",
        zIndex:1000,
        display:"flex",
        right:0,
        "@media (max-width: 800px)": {
          width:"100%",
        }
    }
}

class _Navbar extends Component<WithStylesProps<typeof styles>>
{
    render(){
        const { classes } = this.props
        return(
            <div className={classes.container}>
                <NavItem name="Home" url="/"/>
                <NavItem name="Projects" url="/projects"/>
                <NavItem name="Contact" url="/contact"/>
                <NavItem name="About" url="/about"/>
            </div>
        )
    }
}

export const Navbar = withStyles(styles)(_Navbar)