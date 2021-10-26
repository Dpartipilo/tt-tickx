import React, { FormEvent, useState } from 'react';
import styles from './App.module.scss';
import { getDataByQuery } from './app-api'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Search from './components/Search';
import ItemsList from './components/ItemsList';
import ItemDetails from './components/ItemDetails'

function App() {
  const [nasaCollection, setNasaCollection] = useState<any>(null);

  const handleSearch = async (evt: FormEvent, searchValue: string) => {
    evt.preventDefault();
    try {
      const data = await getDataByQuery(searchValue);
      setNasaCollection(data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className={styles.App}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Search handleSearch={handleSearch} />
            <ItemsList items={nasaCollection?.collection?.items} />
          </Route>
          <Route path='/asset/:id'>
            <ItemDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
