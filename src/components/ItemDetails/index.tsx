import React, { useEffect, useState, useCallback } from 'react'
import styles from './ItemDetails.module.scss';
import { useParams } from "react-router-dom";
import { IAsset } from '../types';

import AudioItemDetails from './AudioItemDetails';
import ImageItemDetails from './ImageItemDetails';

interface IItemDetails {
  asset: any;
  assetImageDetails: any;
  assetAudioDetails: any;
  getAssetDetails: (id: string, media: string) => void
}

const ItemDetails: React.FC<IItemDetails> = ({ asset, assetImageDetails, assetAudioDetails, getAssetDetails }) => {
  const { id, media } = useParams<{ id: string, media: string }>();

  useEffect(() => {
    getAssetDetails(id, media)
  }, [id, getAssetDetails])

  return (
    <div className={styles.ItemDetails}>
      {media === "image" && <ImageItemDetails asset={asset} details={assetImageDetails} />}

      {media === "audio" && <AudioItemDetails asset={asset} details={assetAudioDetails} />}
    </div>
  )
}

export default ItemDetails
