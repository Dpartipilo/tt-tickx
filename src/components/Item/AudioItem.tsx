import React from 'react';
import { IItem } from '../types';
import { Link, useRouteMatch } from "react-router-dom";

const AudioItem: React.FC<IItem> = ({ data }) => {
  const { url } = useRouteMatch();
  return (
    <Link to={`${url}asset/audio/${data[0].nasa_id}`}>
      <p>{data[0].nasa_id}</p>
    </Link>
  )
}

export default AudioItem