import React,{useContext} from 'react'
import GoogleMapReact from 'google-map-react'
import { globalContext } from '../../app';

import styles from './style.module.scss'


function Map() {
  const {coordinates,setCoordinates,bounds,setBounds,data}=useContext(globalContext);
  const defaultMapProps={
    center:{
      lat:coordinates.lat,
      lng:coordinates.lng
    },
    zoom:14
  }
  return (
    <div className={styles.mapContainer}>
      <GoogleMapReact
      bootstrapURLKeys={{key:process.env.REACT_API_KEY}}
      center={defaultMapProps.center}
      defaultZoom={defaultMapProps.zoom}
      margin= {[50,50,50,50]}
      options=''
      onChange={(e)=>{
        setCoordinates({lat:e.center.lat,lng:e.center.lng});
        setBounds({ne:e.marginBounds.ne,sw:e.marginBounds.sw})
      }}
      // onChildClick={(child)=>alert({child})}
      >
        {data?.map((item,i)=>{
          if(item.photo!==undefined)
            return(
              <div
              className={styles.mapStyle}
              lat={item.latitude}
              lng={item.longitude}
              key={i}
              onClick={(e)=>{console.log({i})}}
              >
                <p>{item.name}</p>
                <img src={item?.photo?.images?.thumbnail.url} alt={item.name}/>
                <p>Rating: {item.rating}</p>
              </div>
            )
        })}

      </GoogleMapReact>
    </div>
  )
}

export default Map