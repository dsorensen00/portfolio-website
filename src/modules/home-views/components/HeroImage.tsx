import React, { Component } from "react"
import withStyles, { WithStylesProps } from "react-jss"
import Image from "../../../assets/photos/mainHero.jpg"
import SecondImage from "../../../assets/photos/mainHero.jpeg"

const styles = {
  background: {
    backgroundImage: `url(${Image})`,
    height: "100vh",
    width: "100%",
    backgroundPosition: "50% 25%",
    backgroundSize: "cover",
    backgroundAttachment:"fixed",
    "@media (min-width: 1025px)": {
      backgroundImage: `url(${SecondImage})`
    }
  },
  fName: {
    position: "absolute" as "absolute",
    display:"none",
    "@media (max-width: 1025px)": {
      display:"block",
      color: "#f8f8f8",
      fontSize: "10vw",
      top: "33vh",
      left: "10vw",
      textAlign: "right" as "right",
      fontFamily: "impact",
      textShadow: "-10px 2px 4px #5068a9",
      textDecoration:"underline #5068a9",
    }
  },
  lName: {
    position: "absolute" as "absolute",
    display:"none",
    "@media (max-width: 1025px)": {
      display:"block",
      fontSize: "10vw",
      top: "33vh",
      left: "60vw",
      color:"#f8f8f8",
      textAlign: "right" as "right",
      textDecoration:"underline #5068a9",
      fontFamily: "impact",
      textShadow: "-8px 3px 4px #5068a9",
    }
  },
  title: {
    position: "absolute" as "absolute",
    top: "15vh",
    left: "5vw",
    color: "#f8f8f8",
    fontSize: "5vh",
    textAlign: "right" as "right",
    textShadow: "-2px -2px 3px #5068a9, 2px -2px 3px #5068a9, -2px 2px 3px #5068a9, 2px 2px 3px #5068a9",
    "@media (max-width: 1025px)": {
      fontSize: "10vw",
      top: "65vh",
      left: "10vw",
    }
  },
  signature:{
    fontFamily:"'Allura', cursive",
    color:"#f8f8f8",
    fontSize:"10vw",
    fontWeight:"bolder" as "bolder",
    textShadow: "-3px -3px 3px #5068a9, 3px -3px 3px #5068a9, -3px 3px 3px #5068a9, 3px 3px 3px #5068a9",
    "@media (max-width: 1024px)": {
        display:"none"
      },
  },
  arrowLeft: {
    position: "absolute" as "absolute",
    bottom: "10vh",
    left: "10vw",
    color: "#f8f8f8",
    textShadow: "-5px 2px 4px #5068a9",
    animation: "bounce 2s infinite"
  },
  arrowRight: {
    position: "absolute" as "absolute",
    bottom: "10vh",
    right: "10vw",
    color: "#f8f8f8",
    textShadow: "-5px 2px 4px #5068a9",
    animation: "bounce 2s infinite"
  }
}

interface Props extends WithStylesProps<typeof styles> {}

class _HeroImage extends Component<Props> {
  render() {
    const { classes } = this.props
    return (
      <>
        <div className={classes.background}>
          <div className={classes.fName}>Damon</div>
          <div className={classes.lName}>Sorensen</div>
          <div className={classes.title}>Software Engineer</div>
          <div className={classes.signature}>DS</div>
          <div className={`fa fa-arrow-down fa-4x ${classes.arrowLeft}`} />
          <div className={`fa fa-arrow-down fa-4x ${classes.arrowRight}`} />
        </div>
      </>
    )
  }
}

export const HeroImage = withStyles(styles)(_HeroImage)
