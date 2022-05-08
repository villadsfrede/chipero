import { useRouter } from 'next/router'
import { ProductData } from '../../components/ProductData'
import NavBar from "../../components/NavBar"
import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import Image from "next/Image"
import Collapsible from "../../components/Nutrition"

const ProductPage = () => {
  const router = useRouter()
  const { pid } = router.query

  return (
    <div className={styles.container}>
      <Head>
        <title>Chipero</title>
        <meta name="Chipero" content="Home of the Chipero" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <NavBar/>
        
        <div className={styles.productDisplay}>
        {ProductData.map((prod, index) => {
              return (
                <div className={ProductData[index].pid == pid ? styles.prodactive : styles.prodhidden} key={index}> 
                    <div><Image src={prod.image} height={300} width={300} className={styles.imageprod}/></div   >
                    <div className={styles.prodinfo}>
                        <h1 className={styles.title}>{prod.name}</h1>
                        <Collapsible title="Ingredienser">{prod.ingredients}</Collapsible>
                        <Collapsible title="Næringsindhold" className={styles.divtabel}>
                            <div className={styles.nutritabel}>
                                <table>
                                    <tr>
                                        <th className={styles.th}>Næringsindhold</th>
                                        <th className={styles.th}>Per/100g</th>
                                        <th className={styles.th}>30g = 1 portion</th>
                                    </tr>
                                    <tr>
                                        <th className={styles.th}>Energi (kcal)</th>
                                        <th className={styles.th}>471</th>
                                        <th className={styles.th}>151</th>
                                    </tr>
                                    <tr>
                                        <th className={styles.th}>Fedt</th>
                                        <th className={styles.th}>21g</th>
                                        <th className={styles.th}>6,3g</th>
                                    </tr>
                                    <tr>
                                        <th className={styles.th}>Kulhydraft</th>
                                        <th className={styles.th}>63g</th>
                                        <th className={styles.th}>20g</th>
                                    </tr>
                                    <tr>
                                        <th className={styles.th}>Fibre</th>
                                        <th className={styles.th}>3,2g</th>
                                        <th className={styles.th}>1,0g</th>
                                    </tr>
                                    <tr>
                                        <th className={styles.th}>Protein</th>
                                        <th className={styles.th}>6,0g</th>
                                        <th className={styles.th}>1,8g</th>
                                    </tr>
                                </table>
                            </div>
                        
                
                        
                        </Collapsible>
                    </div>
                </div>
              )
          })}
        </div>
      </main>
    </div>
  )
}

export default ProductPage;
