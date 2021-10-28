import React, { useEffect, useState, useCallback } from 'react'
import styles from './ItemDetails.module.scss';
import { useParams } from "react-router-dom";
import { IItemDetails, IAsset } from '../types';
import ReactPlayer from 'react-player';

import { getAssetById, getImageMetadataById, getAudioMetadataById } from '../../app-api'



const ItemDetails: React.FC<IItemDetails> = ({ mediaTypes }) => {
  const { id, media } = useParams<{ id: string, media: string }>();
  const [asset, setAsset] = useState<IAsset[] | null>(null);
  const [assetImageDetails, setAssetImageDetails] = useState(null);
  const [assetAudioDetails, setAssetAudioDetails] = useState(null);

  const getAssetDetails = useCallback(async () => {
    try {
      const assetData = await getAssetById(id);
      setAsset(assetData);

      if (media === "image") {
        const assetImageMetadata = await getImageMetadataById(id);
        setAssetImageDetails(assetImageMetadata);
      }

      if (media === "audio") {
        const assetAudioMetadata = await getAudioMetadataById(id);
        setAssetAudioDetails(assetAudioMetadata);
      }

    } catch (error) {
      console.error(error);
    }
  }, [id, media])

  useEffect(() => {
    getAssetDetails()
  }, [id, getAssetDetails])

  return (
    <div className={styles.ItemDetails}>
      {media === "image" && <ImageItemDetails asset={asset} details={assetImageDetails} />}

      {media === "audio" && <AudioItemDetails asset={asset} details={assetAudioDetails} />}
    </div>
  )
}

const ImageItemDetails: React.FC<any> = ({ asset, details }) => {
  return (
    <div className={styles.ImageItemDetails}>
      <h1>{details?.["XMP:Title"]}</h1>
      <p>{details?.["XMP:Description"]}</p>

      <img src={asset?.[1].href} alt={details?.["XMP:Description"]} />
    </div>
  )
}

const AudioItemDetails: React.FC<any> = ({ asset, details }) => {
  return (
    <div className={styles.ImageItemDetails}>
      <h1>{details?.["AVAIL:Title"]}</h1>
      <p>{details?.["AVAIL:Description"]}</p>

      <div className={styles.mediaPlayer}>
        <ReactPlayer url={asset?.[3].href} controls={true} width="400px" height="50px" />
      </div>
    </div>
  )
}

export default ItemDetails
