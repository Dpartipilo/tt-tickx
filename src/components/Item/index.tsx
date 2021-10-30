import React from 'react'
import styles from './Item.module.scss'
import { IItem } from '../types'

import ImageItem from './ImageItem';
import AudioItem from './AudioItem';


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

export default Item
