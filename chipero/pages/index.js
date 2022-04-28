import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chipero</title>
        <meta name="Chipero" content="Home of the Chipero" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <h1 className="title">
        Read{' '}
          <Link href="/products">
            <a>this page!</a>
          </Link>
        </h1>   
      </main>
    </div>
  )
}
