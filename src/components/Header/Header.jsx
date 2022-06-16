import React from 'react';
import styles from './style.module.scss'
import {FaSearch} from 'react-icons/fa'

function Header() {
  return (
    <div className={styles.navContainer}>
        <h1>Travel Planner</h1>
        <div className={styles.search}>
            <p>Explore new places :</p>
            <div className={styles.searchIconBox}>
            <FaSearch className={styles.searchIcon}/>
            <input className={styles.searchBar} type={"text"} placeholder="Start searching"/>
            </div>
        </div>
    </div>
  )
}

export default Header