import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import NavBar from "../../components/NavBar"
import {ProductData, productData} from "../../components/ProductData"
import Footer from "../../components/Footer"

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
        <br></br>
        <br></br>
        <br></br>
        <h1 className={styles.title}>Produkter</h1>
        <div className={styles.prodGrid}>
            {ProductData.map((prod, index) => {
                return (
                <div className={styles.prodFlex}>
                <Link href={"products/" + prod.pid} key={index}>
                    <Image src={prod.image} height={150} width={150} className={styles.imageProduct} key={index}/>   
                </Link>
                <h2>{prod.name}</h2>
                </div>  
                )
            })}
        </div>
        <Footer />
      </main>
    </div>
  )
}
