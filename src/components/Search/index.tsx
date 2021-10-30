import React, { FormEvent, useState, useEffect } from 'react'
import styles from './Search.module.scss';

import Checkbox from '../Checkbox';

interface ISearch {
  handleSearch: (evt: FormEvent, searchValue: string, mediaTypes: string) => void
}

const Search: React.FC<ISearch> = ({ handleSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const [mediaTypes, setMediaTypes] = useState<string[]>([]);
  const [searchDisabled, setSearchDisabled] = useState(false);

  useEffect(() => {
    mediaTypes.length > 0 && searchValue.length > 0 ? setSearchDisabled(false) : setSearchDisabled(true);
  }, [mediaTypes, searchValue])

  const handleOnChange = (evt: any) => {
    console.log(evt.target.checked)
    let selectedMediaTypes = [...mediaTypes];

    if (evt.target.checked) {
      selectedMediaTypes.push(evt.target.name)
    } else {
      const index = mediaTypes.indexOf(evt.target.name);
      selectedMediaTypes.splice(index, 1);
    };

    setMediaTypes(selectedMediaTypes);
  }

  return (
    <div className={styles.Search}>

      <div className={styles.formContainer}>
        <h1>Nasa search</h1>

        <form onSubmit={(evt) => handleSearch(evt, searchValue, mediaTypes.join(","))}>

          <div className={styles.inputContainer}>
            <input placeholder="Search for..." type="text" value={searchValue}
              onChange={(evt) => setSearchValue(evt.target.value)}
            />

            <button disabled={searchDisabled} type="submit">
              Search
            </button>
          </div>


          <div className={styles.checkboxGroup}>
            <Checkbox id="checkbox-image" name="image" label="Image" handleOnChange={handleOnChange} />
            <Checkbox id="checkbox-audio" name="audio" label="Audio" handleOnChange={handleOnChange} />

            {/* <Checkbox id="checkbox-video" name="video" label="Video" handleOnChange={handleOnChange} /> */}
          </div>
        </form>
      </div>

    </div>
  )
}

export default Search
