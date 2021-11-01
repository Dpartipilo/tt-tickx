import React from 'react'
import styles from './ItemsList.module.scss'


import { IItems } from "../types"
import Item from '../Item'

const ItemsList: React.FC<IItems> = ({ items }) => {

  return (
    items.length > 0 ?
      <div className={styles.ItemsList}>
        <h2>Results</h2>
        <div className={styles.itemsContainer}>
          {items.map((item) => {
            const { nasa_id } = item.data[0]
            return <Item key={nasa_id} {...item} />
          })}
        </div>
      </div>
      : null
  )
}

export default ItemsList
