import React, { Component } from "react"
import withStyles, { WithStylesProps } from "react-jss"
import { NavLink } from "react-router-dom"

const styles = {
  container: {
    width: "27vw",
    height: "60vh",
    marginLeft: "3rem",
    marginTop: "3rem",
    alignContent: "spaced-around",
    "@media (max-width: 800px)": {
      marginLeft: "1.5rem",
      height: "80vh"
    }
  },
  header: {
    position: "relative" as "relative",
    color: "#f8f8f8",
    textDecoration: "underline #86a6df",
    fontSize: "2vw",
    "@media (max-width: 800px)": {
      fontSize: "4vw"
    },
    "@media (max-width: 500px)": {
      fontSize: "1.5rem"
    }
  },
  image: {
    position: "absolute" as "absolute",
    width: "25vw",
    height: "30vh",
    backgroundColor: "#86a6df",
    padding: ".5vw",
    color: "#324e7b",
    borderRadius: "1%",
    "@media (max-width: 800px)": {
      width: "90vw",
      height: "40vh"
    }
  },
  snippet: {
    position: "absolute" as "absolute",
    top: "45vh",
    width: "83%",
    color: "#f8f8f8",
    fontSize: "1.5vw",
    "@media (max-width: 800px)": {
      fontSize: "4vw",
      top: "50vh"
    },
    "@media (max-width: 500px)": {
      fontSize: "1.5rem",
      top: "57vh"
    }
  },
  button: {
    position: "absolute" as "absolute",
    top: "55vh",
    cursor: "pointer",
    backgroundColor: "#86a6df",
    border: "solid #f8f8f8",
    borderRadius: "2%",
    padding: "1rem",
    fontSize: "1.5vw",
    width: "70%",
    fontFamily: "impact",
    color: "#f8f8f8",
    textDecoration: "none",
    textAlign: "center" as "center",
    "&:hover": {
      backgroundColor: "#5068a9",
      fontSize: "1.5rem"
    },
    "@media (max-width: 800px)": {
      top: "60vh",
      fontSize: "1.5rem",
      width: "85%"
    },
    "@media (max-width: 500px)": {
      fontSize: "1.3rem",
      width: "80%",
      top: "73vh"
    }
  }
}

interface Props extends WithStylesProps<typeof styles> {
  image?: string
  snippet?: string
  title?: string
  buttonText?: string
  buttonLink?: string
  tags?: string[]
}

class _ProjectThumbnail extends Component<Props> {
  render() {
    const { image, title, snippet, tags, buttonText, buttonLink, classes } = this.props
    return (
      <div className={classes.container}>
        <div className={classes.header}>{title}</div>
        {image && <img src={image} className={classes.image} alt="Project" />}
        <div className={classes.snippet}>{snippet}</div>
        {buttonLink && (
          <a href={buttonLink} target="_blank" className={classes.button}>
            {buttonText}
          </a>
        )}
      </div>
    )
  }
}

export const ProjectThumbnail = withStyles(styles)(_ProjectThumbnail)
