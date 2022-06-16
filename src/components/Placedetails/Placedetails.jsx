import { Details } from '@material-ui/icons';
import React, { useEffect,useState,useRef } from 'react'
import Cards from '../Card/Cards'
import { useContext } from "react";
import { globalContext } from "../../app";
function Placedetails({rating}) {
  const {coordinates,bounds,data}=useContext(globalContext);
  const [cardRef,setRef]=useState();

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      {data.filter(item=>{
        return Number(item.rating)>=Number(rating);
      }).map((item,i)=>{
        if(item)
        return(<Cards  data={item}/>)
      })}
    </div>
  )
}

export default Placedetails