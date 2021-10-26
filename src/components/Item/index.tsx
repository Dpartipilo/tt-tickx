import React from 'react'
import styles from './Item.module.scss'
import { IItem } from '../types'

import {
  Link,
  useRouteMatch
} from "react-router-dom";

const Item: React.FC<IItem> = ({ data, links }) => {
  const { url } = useRouteMatch();
  return (
    <div className={styles.Item}>
      <Link to={`${url}asset/${data[0].nasa_id}`}>
        <img src={links[0].href} alt={data[0].description} />
      </Link>
    </div>
  )
}

export default Item
