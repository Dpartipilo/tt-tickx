import React, { FormEvent, useState } from 'react'
import styles from './Search.module.scss';

interface ISearch {
  handleSearch: (evt: FormEvent, searchValue: string) => void
}

const Search: React.FC<ISearch> = ({ handleSearch }) => {
  const [searchValue, setSearchValue] = useState("")

  return (
    <div className={styles.Search}>
      <h1>Nasa search</h1>

      <form onSubmit={(evt) => handleSearch(evt, searchValue)}>
        <input type="text" value={searchValue}
          onChange={(evt) => setSearchValue(evt.target.value)}
        />

        <button type="submit">
          Search
        </button>
      </form>

    </div>
  )
}

export default Search
