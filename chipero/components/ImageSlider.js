import React, {useState, userEffect} from "react";
import { SliderData } from "./SliderData";
import Image from 'next/image'
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import styles from '../styles/Home.module.css'


const ImageSlider = ({slides}) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current -1)
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <section className={styles.slider}>
          <FaArrowLeft className={styles.arrowleft} onClick={prevSlide}/>  
          <FaArrowRight className={styles.arrowright} onClick={nextSlide}/> 
          {SliderData.map((slide, index) => {
              return (
                <div className={index === current ? styles.slideactive : styles.slide} key={index}> 
                    {index === current && (<Image src={slide.image} height={600} width={800} className={styles.imageslide}/>)}
                </div>
              )
          })}
        </section>
    )
};

export default ImageSlider;