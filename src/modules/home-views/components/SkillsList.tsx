import React, { Component } from "react"
import withStyles, { WithStylesProps } from "react-jss"
import { SkillBlock } from "./SkillBlock"

const styles = {
  container: {
    backgroundColor: "#86a6df",
    height: "60vh",
    paddingTop: "10vh",
    paddingBottom: "5vh",
  },
  heading: {
    position: "relative" as "relative",
    left: "5vw",
    color: "#f8f8f8",
    textDecoration: "underline #324e7b",
    fontSize: "7vh",
    fontFamily: "impact"
  },
  subHeading:{
    position: "relative" as "relative",
    left: "5vw",
    color: "#f8f8f8",
    marginTop:".5rem",
    fontSize:"1.3rem"
  },
  skillList: {
    marginTop:"1.5rem",
    marginLeft:"5vw",
    marginRight:"5vw",

  }
}

interface Props extends WithStylesProps<typeof styles> {
  skills?: string[]
}

class _SkillsList extends Component<Props> {
  render() {
    const { skills, classes } = this.props
    return (
      <div className={classes.container}>
        <div className={classes.heading}>
          Skills <i className="fa fa-star"></i>
        </div>
        <div className={classes.subHeading}>Click below to go to projects filtered by that skill or technology</div>
        <div className={classes.skillList}>
          {skills && skills.map(skill => (<SkillBlock skill={skill}/>))}
        </div>
      </div>
    )
  }
}

export const SkillsList = withStyles(styles)(_SkillsList)
