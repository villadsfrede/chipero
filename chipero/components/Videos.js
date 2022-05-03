import React, {useState, userEffect} from "react";
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Videos = () => {
    return (
        <section className={styles.videos}>
            <div>
                <h1 className={styles.title}>VIDEOS</h1>
            </div>
            <div className={styles.videoGrid}>
                <p>Video 1</p>
                <p>skitse video</p>
                <p>skitse video</p>
                <p>skitse video</p>
            </div>
        </section>
    )
};

export default Videos;