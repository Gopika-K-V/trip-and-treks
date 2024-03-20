import React from 'react'
import styles from "./homeBanner.module.scss";
import BannerImg from "../../assets/Images/banner_img.jpg";

const HomeBanner = () => {
  return (
    <section className={styles.home_banner}>
        <div className={styles.img_section}>
            <figure className={`ratio`}>
                <img src={BannerImg} alt="banner_img"/>
            </figure>
        </div>
        <div className={styles.content_section}>
            <div className={`container`}>
                <h1 className={styles.main_title}>
                    Fly Tours
                </h1>
                <h6 className={styles.banner_desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt</h6>
            </div>
        </div>
    </section>
  )
}

export default HomeBanner
