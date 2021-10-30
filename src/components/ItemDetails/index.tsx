import React, { useEffect, useState, useCallback } from 'react'
import styles from './ItemDetails.module.scss';
import { useParams } from "react-router-dom";
import { IItemDetails, IAsset } from '../types';

import AudioItemDetails from './AudioItemDetails';
import ImageItemDetails from './ImageItemDetails';


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

export default ItemDetails
