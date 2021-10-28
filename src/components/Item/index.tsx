import React from 'react'
import styles from './Item.module.scss'
import { IItem } from '../types'

import {
  Link,
  useRouteMatch
} from "react-router-dom";


const renderMediaTypeElement = (props: any) => {
  switch (props.data[0].media_type) {
    case "image": {
      return <ImageItem {...props} />
    }
    case "audio": {
      return <AudioItem {...props} />
    }
    default:
      return null
  }
}

const Item: React.FC<IItem> = (props) => {
  return (
    <div className={styles.Item}>
      {renderMediaTypeElement(props)}
    </div>
  )
}

const ImageItem: React.FC<IItem> = ({ data, links }) => {
  const { url } = useRouteMatch();
  return (
    <Link to={`${url}asset/image/${data[0].nasa_id}`}>
      <img src={links[0].href} alt={data[0].description} />
    </Link>
  )
}

const AudioItem: React.FC<IItem> = ({ data }) => {
  const { url } = useRouteMatch();
  return (
    <Link to={`${url}asset/audio/${data[0].nasa_id}`}>
      <p>{data[0].nasa_id}</p>
    </Link>
  )
}

export default Item
