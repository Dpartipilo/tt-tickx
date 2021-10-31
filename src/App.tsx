import React, { FormEvent, useState, useCallback } from 'react';
import styles from './App.module.scss';
import { getDataByQuery } from './app-api'
import {
  Switch,
  Route,
  useParams
} from "react-router-dom";

import Search from './components/Search';
import ItemsList from './components/ItemsList';
import ItemDetails from './components/ItemDetails';
import Header from './components/Header';
import Footer from './components/Footer';

import { IAsset } from "./components/types";

import { getAssetById, getImageMetadataById, getAudioMetadataById } from './app-api'

function App() {
  const { id, media } = useParams<{ id: string, media: string }>();
  const [nasaCollection, setNasaCollection] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [asset, setAsset] = useState<IAsset[] | null>(null);
  const [assetImageDetails, setAssetImageDetails] = useState(null);
  const [assetAudioDetails, setAssetAudioDetails] = useState(null);

  const handleSearch = async (evt: FormEvent, searchValue: string, mediaTypes: string) => {
    evt.preventDefault();
    setLoading(true);
    try {
      const data = await getDataByQuery(searchValue, mediaTypes);
      setNasaCollection(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false);
    }
  }

  const getAssetDetails = useCallback(async (id: string, media: string) => {
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  }, [id, media])


  return (
    <div className={styles.App}>

      <Header loading={loading} />
      <Switch>
        <Route exact path="/">
          <Search handleSearch={handleSearch} />
          <ItemsList items={nasaCollection?.collection?.items || []} />
        </Route>
        <Route path='/asset/:media/:id'>
          <ItemDetails asset={asset} assetImageDetails={assetImageDetails} assetAudioDetails={assetAudioDetails} getAssetDetails={getAssetDetails} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
