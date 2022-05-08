import React, {useState, userEffect} from "react";
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ProductData } from "./ProductData";
import Link from 'next/link'

const ProductBar = () => {
    return (
        <section >
            <div>
                <h1 className={styles.title}>Produkter</h1>
            </div>
        <div className={styles.productBar}>
           {ProductData.map((product, index) => {
              return (
                <Link href={"products/" + product.pid} key={index}>
                    <Image src={product.image} height={150} width={150} className={styles.imageProduct} key={index}/>   
                </Link>
              )
          })}
        </div>
        </section>
    )
};

export default ProductBar;