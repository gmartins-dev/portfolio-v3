import Head from "next/head"
import React from "react"
import About from "../components/About"
import Contact from "../components/Contact"
import Main from "../components/Main"
import Projects from "../components/Projects"
import Skills from "../components/Skills"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Guilherme Martins | Frontend Developer</title>
        <meta
          name="description"
          content="My focus is on building beautiful Web and Mobile applications with great usability, scalability and performance to improve and facilitate people`s lives."
        />
        <link rel="icon" href="/assets/favicon.svg" />
      </Head>

      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
