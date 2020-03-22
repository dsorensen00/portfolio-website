import React, { Component } from "react"
import withStyles, { WithStylesProps } from "react-jss"
import { NavLink } from "react-router-dom"
import Carousel from "react-multi-carousel"
import { ProjectThumbnail } from "./ProjectThumbnail"
import Salad from "../../../assets/photos/salad.io.png"
import Doggo from "../../../assets/photos/RandomDog.png"
import Snake from "../../../assets/photos/snake.png"
import { Project } from "../../home/models/Project"

const styles = {
  container: {
    backgroundColor: "#324e7b",
    paddingTop: "10vh",
    paddingBottom: "5vh"
  },
  heading: {
    position: "relative" as "relative",
    left: "5vw",
    color: "#f8f8f8",
    textDecoration: "underline #86a6df",
    fontSize: "7vh",
    fontFamily: "impact"
  },
  seeMore: {
    position: "absolute" as "absolute",
    right: "5vw",
    color: "#f8f8f8",
    textDecoration: "underline"
  }
}

interface Props extends WithStylesProps<typeof styles> {
  projects?: Project[]
}

class _FeaturedProjects extends Component<Props> {
  render() {
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 3
      },
      desktop: {
        breakpoint: { max: 3000, min: 800 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 800, min: 464 },
        items: 1
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    }
    const { projects, classes } = this.props
    return (
      <div className={classes.container}>
        <div className={classes.heading}>
          TOP PROJECTS <i className="fa fa-trophy"></i>
        </div>
        <NavLink to="" className={classes.seeMore}>
          See All >
        </NavLink>
        {projects && (
          <Carousel
            removeArrowOnDeviceType={["tablet", "mobile"]}
            swipeable={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            infinite={true}
            draggable={false}
            showDots={false}
            responsive={responsive}
            keyBoardControl={false}
            arrows={false}>
            {projects?.map(project => (
              <ProjectThumbnail
                title={project.title}
                image={project.imageUrl}
                snippet={project.snippet}
                buttonText={project.buttonText}
                buttonLink={project.demoUrl !== ""? project.demoUrl:project.repoUrl}
              />
            ))}
          </Carousel>
        )}
      </div>
    )
  }
}

export const FeaturedProjects = withStyles(styles)(_FeaturedProjects)
