import React, { useEffect, useState, useCallback } from 'react'
import styles from './ItemDetails.module.scss';
import { useParams } from "react-router-dom";

import { getAssetById, getMetadataById } from '../../app-api'

interface IAsset {
  href: string
}

const ItemDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [asset, setAsset] = useState<IAsset[] | null>(null)
  const [assetDetails, setAssetDetails] = useState(null)

  const getAssetDetails = useCallback(async () => {
    try {
      const assetData = await getAssetById(id);
      const assetMetadata = await getMetadataById(id);

      setAsset(assetData);
      setAssetDetails(assetMetadata);

    } catch (error) {
      console.error(error)
    }
  }, [id])

  useEffect(() => {
    getAssetDetails()
  }, [id, getAssetDetails])

  return (
    <div className={styles.ItemDetails}>
      <h1>{assetDetails?.["XMP:Title"]}</h1>
      <p>{assetDetails?.["XMP:Description"]}</p>

      <img src={asset?.[1].href} alt={assetDetails?.["XMP:Description"]} />
    </div>
  )
}

export default ItemDetails
