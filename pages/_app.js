import Navbar from '../components/Navbar';
import '../styles/globals.css';
import Construction from './construction';
import React from "react"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Construction />
      {/* <Navbar/> */}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp;
