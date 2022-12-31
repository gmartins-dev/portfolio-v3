import Image from "next/image"
import Link from "next/link"
import React from "react"
import cryptoImg from "../public/assets/projects/crypto.jpg"
import netflixImg from "../public/assets/projects/netflix.jpg"
import propertyImg from "../public/assets/projects/property.jpg"
import twitchImg from "../public/assets/projects/twitch.jpg"
import ProjectItem from "./ProjectItem"

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#2A7AE2]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <ProjectItem
            title="Qatar World Cup 2022"
            backgroundImg={mobileFwcImg}
            projectUrl="/projects/mobile/fwc"
            tech="React Native"
          />
          <ProjectItem
            title="Qatar World Cup 2022"
            backgroundImg={mobileBankImg}
            projectUrl="/projects/mobile/bank"
            tech="React Native"
          />
          <ProjectItem
            title="Qatar World Cup 2022"
            backgroundImg={mobileFlappyBirdImg}
            projectUrl="/projects/mobile/flappybird"
            tech="React Native"
          />
          <ProjectItem
            title="My Portfolio Website"
            backgroundImg={webPortfolioImg}
            projectUrl="/projects/web/portfolio"
            tech="Next JS"
          />
          <ProjectItem
            title="Netflix Clone"
            backgroundImg={webNetflixCloneImg}
            projectUrl="/projects/web/netflix"
            tech="Next JS"
          />
          <ProjectItem
            title="ShareSpot"
            backgroundImg={webShareSpotImg}
            projectUrl="/projects/web/sharespot"
            tech="Next JS"
          />
          <ProjectItem
            title="iHungry"
            backgroundImg={webIhungryImg}
            projectUrl="/projects/web/ihungry"
            tech="Next JS"
          />
          <ProjectItem
            title="Superbid"
            backgroundImg={webSuperbidImg}
            projectUrl="/projects/web/superbid"
            tech="React JS"
          />
          <ProjectItem
            title="eTickets"
            backgroundImg={webEticketsImg}
            projectUrl="/projects/web/etickets"
            tech="React JS"
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
