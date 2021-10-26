import React from 'react'
import styles from './Item.module.scss'
import { IItem } from '../types'


const Item: React.FC<IItem> = ({ data, links }) => {
  return (
    <div className={styles.Item}>
      <img src={links[0].href} alt={data[0].description} />
    </div>
  )
}

export default Item
