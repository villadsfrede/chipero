import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import NavBar from "../components/NavBar"
import ImageSlider from "../components/ImageSlider"
import { SliderData } from "../components/SliderData";
import Videos from "../components/Videos"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chipero</title>
        <meta name="Chipero" content="Home of the Chipero" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NavBar/>
        <ImageSlider slides={SliderData}/>
        <Videos />
      </main>
    </div>
  )
}
