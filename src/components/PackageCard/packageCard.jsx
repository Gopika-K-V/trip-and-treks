import React from 'react'
import styles from "./packageCard.module.scss";
import { Link } from 'react-router-dom';

const PackageCard = ({props}) => {
    
    return (
        <Link to={props?.link} className={styles.package_card}>
            <figure className={`${styles.img_wrapper} ratio`}>
                <img src={props?.image} alt={props?.title}/>
            </figure>
            <div className={styles.content_wrapper}>
                <p className={styles.content_text}>{props?.title}</p>
            </div>
        </Link>
    )
}

export default PackageCard
