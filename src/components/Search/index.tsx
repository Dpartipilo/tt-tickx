import React, { ChangeEvent, FormEvent, useState } from 'react'
import styles from './Search.module.scss';

import Checkbox from '../Checkbox';

interface ISearch {
  handleSearch: (evt: FormEvent, searchValue: string, mediaTypes: string) => void
}

const Search: React.FC<ISearch> = ({ handleSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const [mediaTypes, setMediaTypes] = useState<string[]>([]);

  const handleOnChange = (evt: ChangeEvent<HTMLInputElement>) => {
    let selectedMediaTypes = mediaTypes;

    if (evt.target.checked) {
      selectedMediaTypes.push(evt.target.name)
      setMediaTypes(selectedMediaTypes);
    } else {
      const index = mediaTypes.indexOf(evt.target.name);
      selectedMediaTypes.splice(index, 1);
      setMediaTypes(selectedMediaTypes);
    };
  }

  return (
    <div className={styles.Search}>
      <h1>Nasa search</h1>

      <form onSubmit={(evt) => handleSearch(evt, searchValue, mediaTypes.join(","))}>
        <input placeholder="Search for..." type="text" value={searchValue}
          onChange={(evt) => setSearchValue(evt.target.value)}
        />

        <button type="submit">
          Search
        </button>

        <div className={styles.checkboxGroup}>
          <Checkbox id="checkbox-image" name="image" label="Image" handleOnChange={handleOnChange} />
          <Checkbox id="checkbox-audio" name="audio" label="Audio" handleOnChange={handleOnChange} />

          {/* <Checkbox id="checkbox-video" name="video" label="Video" handleOnChange={handleOnChange} /> */}
        </div>
      </form>

    </div>
  )
}

export default Search
