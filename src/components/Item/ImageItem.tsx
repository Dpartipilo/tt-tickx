import React from 'react';
import { IItem } from '../types';
import { Link, useRouteMatch } from "react-router-dom";

const ImageItem: React.FC<IItem> = ({ data, links }) => {
  const { url } = useRouteMatch();
  return (
    <Link to={`${url}asset/image/${data[0].nasa_id}`}>
      <img src={links[0].href} alt={data[0].description} />
    </Link>
  )
}

export default ImageItem
