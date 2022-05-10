import React, {useState, userEffect} from "react";
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const Footer = () => {
    return (
        <div className={styles.footer}>
            <h3>Chipero A/S</h3>
            <h3>Næstved, Danmark </h3>
            <h3>Telefon: +45 12 34 56 78</h3>
        </div>
    )
};

export default Footer;