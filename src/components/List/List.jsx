import React,{useState,useContext} from 'react'
import style from './style.module.scss'
import Placedetails from '../Placedetails/Placedetails';
import {globalContext} from '../../app';
function List() {
  const [rating,setRating]=useState('1.0');
  const {type,setType}=useContext(globalContext);
  return (
    <div className={style.listContainer}>
      <section className={style.listHead}>
        <p>Restaurants and Attractions near me</p>
        <div className={style.optionContainer}>
          <label>
            <strong>Places :</strong> 
          <select value={type} onChange={e=>setType(e.target.value)}className={style.placesList}>
            <option value="Restaurants">Restaurants</option>
            <option value="Attractions">Attractions</option>
            <option value="Hotels">Hotels</option>
          </select>
          </label>
          <label>
          <strong>Rating above :</strong>
          <select value={rating} onChange={e=>setRating(e.target.value)} className={style.ratingList}>
            <option value="1.0">1.0</option>
            <option value="2.0">2.0</option>
            <option value="3.0 ">3.0</option>
            <option value="4.0 ">4.0</option>
          </select>
          </label>
          
        </div>
      </section>
      <section className={style.listCard}>
      <Placedetails rating={rating}/>
      </section>
    </div>
  )
}

export default List