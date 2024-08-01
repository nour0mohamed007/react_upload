import React from 'react';
import img from "./nike-air-max270-white-sneaker-1z2xvy8j3zhppmku.png";
import Styles from "./About.module.css";

const About = ({navigate}) => {
  return (
    <div className={Styles.about} id='About'>
        <div className={Styles.container}>
            <div className={Styles.aboutContent}>
                <div className={Styles.image} data-aos="fade-right">
                <svg className={Styles.scribble} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50 50 L150 50 L100 150 Z" stroke="#9b59b6" stroke-width="0.3" fill="none" />
                    <path d="M60 60 L160 60 L110 160 Z" stroke="#9b59b6" stroke-width="0.3" fill="none" />
                    <path d="M70 70 L170 70 L120 170 Z" stroke="#9b59b6" stroke-width="0.3" fill="none" />
                </svg>
                    <img  src={img} alt=""  />
                </div>
                <div className={Styles.text} data-aos="fade" >
                    <h1>Dedicated to <br /> quality and result</h1>
                    <p>providing the best shoe of various types and manufacturing
                        <br />
                        them for true travel lovers. these items are lightweight and comfortable.
                    </p>
                    <div className={Styles.aboutButton}>
                        <button className={Styles.aboutBtn} onClick={() => navigate('about')}>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About