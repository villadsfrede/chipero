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
              <video>

              </video>
              <div className={styles.videosectiongrid}>
                <p>skitse video</p>
                <p>skitse video</p>
                <p>skitse video</p>
              </div>
            </div>
        <Footer />
      </main>
    </div>
  )
}
