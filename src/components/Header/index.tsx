import React from 'react'
import styles from "./header.module.scss"
import {
  Link
} from "react-router-dom";
import CircleLoader from "react-spinners/CircleLoader";
import { IHeader } from '../types'


const Header: React.FC<IHeader> = ({ loading }) => {
  return (
    <div className={styles.Header}>
      <Link to={"/"}>Home</Link>
      <div className={styles.loaderContainer}>

        <CircleLoader color={"#ffffff"} loading={loading} size={50} />
      </div>
    </div>
  )
}

export default Header
