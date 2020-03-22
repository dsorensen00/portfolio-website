import React, { Component } from "react"
import withStyles, { WithStylesProps } from "react-jss"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { CarouselArrow } from "./CarouselArrow"
import Hacker from "../../../assets/photos/undraw_programmer_imem.svg"
import Developer from "../../../assets/photos/undraw_web_developer.svg"
import Computer from "../../../assets/photos/undraw_computer.svg"

const styles = {
  heading: {
    position: "relative" as "relative",
    left: "10vw",
    color: "#f8f8f8",
    textDecoration: "underline #324e7b",
    fontSize: "7vh",
    fontFamily: "impact"
  },
  slideShowContainer: {
    position: "relative" as "relative",
    background: "#86a6df",
    paddingTop: "5vh",
    paddingBottom: "10vh"
  },
  slide: {
    position: "relative" as "relative",
    padding: "0px",
    width: "75vw",
    left: "11vw",
    textAlign: "justify" as "justify",
    color: "#f8f8f8",
    fontWeight: "bold" as "bold",
    fontSize: "3vh",
    "@media (max-width: 800px)": {
      textAlign: "center" as "center",
      fontSize: "4vw"
    }
  },
  author: {
    textAlign: "right" as "right",
    color: "#324e7b",
    textDecoration: "underline #f8f8f8"
  },
  authorLeft: {
    textAlign: "left" as "left",
    color: "#324e7b",
    textDecoration: "underline #f8f8f8"
  },
  hackerImg: {
    position: "absolute" as "absolute",
    height: "35vh",
    left: "10vw",
    top: "22vh",
    "@media (max-width:1024px)": {
      top: "50vh",
      height: "20vh",
      left: 0
    }
  },
  developer: {
    position: "absolute" as "absolute",
    height: "30vh",
    top: "15vh",
    "@media (max-width:1024px)": {
      top: "0vh",
      height: "20vh",
      width: "40vw",
      left: 0
    }
  },
  developerText: {
    position: "relative" as "relative",
    width: "50vw",
    left: "25vw",
    "@media (max-width:1024px)": {
      top: "25vh",
      width: "85vw",
      left: 0,
      display: "block"
    }
  },
  developerAuthor: {
    textAlign: "right" as "right",
    color: "#324e7b",
    textDecoration: "underline #f8f8f8",
    "@media (max-width:1025px)": {
      position: "absolute" as "absolute",
      top: 0,
      left: "40vw",
      width: "40vw",
      textAlign: "right" as "right",
      color: "#324e7b",
      textDecoration: "underline #f8f8f8"
    }
  },
  computer: {
    position: "absolute" as "absolute",
    right: "15vw",
    height: "30vh",
    top: "35vh",
    "@media (max-width:1024px)": {
      display: "none"
    }
  }
}

interface Props extends WithStylesProps<typeof styles> {}

class _RecommendCarousel extends Component<Props> {
  render() {
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 2,
        slidesToSlide: 2
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    }
    const { classes } = this.props
    return (
      <div className={classes.slideShowContainer}>
        <p className={classes.heading}>ACCLAIM <i className="fa fa-medal"></i></p>
        <Carousel
          removeArrowOnDeviceType={["tablet", "mobile"]}
          autoPlay={true}
          autoPlaySpeed={6000}
          swipeable={true}
          draggable={false}
          showDots={false}
          responsive={responsive}
          infinite={true}
          keyBoardControl={false}
          customLeftArrow={<CarouselArrow direction="left" />}
          customRightArrow={<CarouselArrow direction="right" />}>
          <div className={classes.slide}>
            <p>
              I had the pleasure of working with Damon at Salad Technologies,
              collaborating on several different products across the
              organization. Damon's ability to handle multiple projects and
              seamlessly move between high priority tasks had a dramatic impact
              on the productivity of the entire product and engineering team.
              Among other responsibilities, Damon was responsible for the
              development of all internal support tools, including creating the
              support portal for the customer support and product teams. He was
              giving full responsibility and autonomy to design, develop and
              deploy this important tool that has been critical to our success.
              As his manager, I was always able to trust Damon to complete his
              work on schedule and communicate any roadblocks with the rest of
              the team, Damon earns my highest recommendation and will be a
              great asset to any company.
            </p>
            <p className={classes.authorLeft}>
              - Daniel Sarfati
              <br />
              Head of Engineering
              <br />
              Sald Technologies
            </p>
            <img src={Computer} className={classes.computer} alt=""/>
          </div>

          <div className={classes.slide}>
            <img src={Developer} className={classes.developer} alt=""/>
            <p className={classes.developerText}>
              Damon is a hard worker that is able to learn new technologies and
              get things done. I had the pleasure of working with him at Salad
              Technologies and was able to see him grow as a developer. One of
              the things that impressed me most about Damon was his ability, and
              eagerness, to pickup tasks and take on new challenges. He built
              Discord bots that communicated with our backend and would update
              status under several conditions. He took on the major task of
              coding our support app from backend to frontend that automated
              redemption, inventory management, and a host of other features.
              Damon is a true rock star!
            </p>
            <p className={classes.developerAuthor}>
              - Joshua Christensen
              <br />
              Front End Dev
              <br />
              Salad Technologies
            </p>
          </div>

          <div className={classes.slide}>
            <p>
              Damon is always eager and willing to learn new technologies. He
              dives head first and quickly becomes proficient with the tools
              needed to get the job done. He is great at integrating different
              services on the backend and capable of quickly building UIs on the
              frontend. Damon was a valuable team member at Salad, and I know he
              will be a great asset on any development team.
            </p>
            <p className={classes.author}>
              - Kyle Dodson
              <br />
              Co-Founder, CTO
              <br />
              Zapic, Inc.
            </p>
            <img src={Hacker} className={classes.hackerImg} alt=""/>
          </div>
        </Carousel>
      </div>
    )
  }
}

export const RecommendCarousel = withStyles(styles)(_RecommendCarousel)
