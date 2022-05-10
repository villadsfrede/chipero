import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import NavBar from "../components/NavBar"
import ImageSlider from "../components/ImageSlider"
import { SliderData } from "../components/SliderData";
import Videos from "../components/Videos"
import ProductBar from "../components/ProductBar"
import Footer from "../components/Footer"
import { Player } from 'video-react';
import "../node_modules/video-react/dist/video-react.css";
import ReactPlayer from 'react-player'

export default function videospage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chipero</title>
        <meta name="Chipero" content="Home of the Chipero" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NavBar/>
            <div className={styles.videosection}>
              <ReactPlayer url='https://youtu.be/tJiI8Bi7F5s'/>
              <div className={styles.videosectiongrid}>
                <h2>skitse video</h2>
                <h2>skitse video</h2>
                <h2>skitse video</h2>
              </div>
            </div>
        <Footer />
      </main>
    </div>
  )
}
