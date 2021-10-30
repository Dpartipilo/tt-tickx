import React from 'react'
import styles from './ItemDetails.module.scss';
import ReactPlayer from 'react-player';

interface IAudioItemDetails {
  asset: any;
  details: any;
}

const AudioItemDetails: React.FC<IAudioItemDetails> = ({ asset, details }) => {
  return (
    <div className={styles.AudioItemDetails}>
      <h1>{details?.["AVAIL:Title"]}</h1>

      <div className={styles.mediaPlayer}>
        <ReactPlayer url={asset?.[3].href} controls={true} width="400px" height="50px" />
      </div>

      <p>{details?.["AVAIL:Description"]}</p>
    </div>
  )
}

export default AudioItemDetails
