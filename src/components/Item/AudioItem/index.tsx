import React from 'react';
import { IItem } from '../../types';
import { Link, useRouteMatch } from "react-router-dom";
import Headphones from './headphone-icon.svg';
import styles from './AudioItem.module.scss'

const AudioItem: React.FC<IItem> = ({ data }) => {
  const { url } = useRouteMatch();
  return (
    <div className={styles.AudioItem}>
      <Link to={`${url}asset/audio/${data[0].nasa_id}`}>
        <img className="icon" src={Headphones} alt="" />
        <p>{data[0].nasa_id}</p>
      </Link>
    </div>

  )
}

export default AudioItem