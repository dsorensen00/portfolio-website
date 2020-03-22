import React, { Component } from "react"
import withStyles, { WithStylesProps } from "react-jss"
import { Navbar } from "../components/Navbar"
import { HeroImage } from "./components/HeroImage"
import { RecommendCarousel } from "./components/RecommendCarousel"
import { FeaturedProjects } from "./components/FeaturedProjects"
import { SkillsList } from "./components/SkillsList"
import { Footer } from "../components/Footer"
import { SkillList } from "../home/SkillList"
import { ProjectList } from "../home/ProjectList"

const styles = {}

interface Props extends WithStylesProps<typeof styles> {}

class _HomePage extends Component<Props> {
  render() {

    return (
      <>
        <Navbar />
        <HeroImage />
        <RecommendCarousel />
        <FeaturedProjects projects={ProjectList}/>
        <SkillsList skills={SkillList}/>
        <Footer />
      </>
    )
  }
}

export const HomePage = withStyles(styles)(_HomePage)
