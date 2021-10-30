import React from 'react'
import styles from './ItemDetails.module.scss';

interface IImageItemDetails {
  asset: any;
  details: any;
}

const ImageItemDetails: React.FC<IImageItemDetails> = ({ asset, details }) => {
  return (
    <div className={styles.ImageItemDetails}>
      <div className={styles.header}>
        <h1>{details?.["XMP:Title"] || "No title available"}</h1>
        <p className={styles.description}>{details?.["XMP:Description"] || "No description available"}</p>
      </div>

      <div className={styles.imageContainer}>
        <img src={asset?.[1].href} alt={details?.["XMP:Description"]} />
      </div>
    </div>
  )
}

export default ImageItemDetails
