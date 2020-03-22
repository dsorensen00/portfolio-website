import React, { Component } from "react"
import withStyles, { WithStylesProps } from "react-jss"
import { NavLink } from "react-router-dom"

const styles = {
  skill: {
    textDecoration: "none",
    backgroundColor: "#324e7b",
    color: "#f8f8f8",
    borderRadius: "1%",
    fontSize: "1.7rem",
    padding: ".5rem",
    display: "inline-block",
    marginLeft: "1.5rem",
    marginTop: "1.5rem",
    "&:hover": {
      backgroundColor: "#f8f8f8",
      color: "#324e7b"
    }
  }
}

interface Props extends WithStylesProps<typeof styles> {
  skill?: string
}

class _SkillBlock extends Component<Props> {
  render() {
    const { skill, classes } = this.props
    return (
      <NavLink className={classes.skill} to={`/projects?skill=${skill}`}>
        {skill}
      </NavLink>
    )
  }
}

export const SkillBlock = withStyles(styles)(_SkillBlock)
