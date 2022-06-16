import { useState,createContext, useEffect } from 'react';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import styles from './index.module.scss';
import getPlaces from './helper/getplaces'

export const globalContext=createContext();
const App=()=>{
    const [data,setData]=useState([]);
    const [coordinates,setCoordinates]=useState({lat:35.927452143897355,lng:-86.75712401205051});
    const [bounds,setBounds]=useState({ne: {lat: 32.81404915059545, lng: -96.55994363712531},sw: {lat: 32.6904682569176, lng: -96.9547648041175}});
    const [type,setType]=useState('Restaurants');

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
            setCoordinates({lat:latitude,lng:longitude});
        })
    },[]);
    useEffect(()=>{
        const fun=async ()=>{
        await getPlaces(coordinates,bounds).then(async res=>await setData([...res]));
        }
        fun();
      },[bounds,coordinates,type]);
    return (
        <globalContext.Provider value={{coordinates,setCoordinates,bounds,setBounds,data,setData,type,setType}}>

        <section className={styles.mainContainer}>
        <Header/>
        <section className={styles.gridMap}>
            <List/>
            <Map/>
        </section>
        </section>
        </globalContext.Provider>
    )
}
export default App;