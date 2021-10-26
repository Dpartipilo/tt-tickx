import React from 'react'
import styles from './ItemsList.module.scss'


import { IItems } from "../types"
import Item from '../Item'

const ItemsList: React.FC<IItems> = ({ items = [] }) => {

  return (
    <div className={styles.ItemsList}>
      {items.map((item) => {
        const { nasa_id } = item.data[0]
        return <Item key={nasa_id} {...item} />
      })}
    </div>
  )
}

export default ItemsList
