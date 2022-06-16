import React from 'react'
import {FaSearchLocation,FaPhone} from 'react-icons/fa'
import style from './style.module.scss'
function Cards({data}) {
    let image="https://www.rlare.com/wp-content/uploads/2019/12/Inside-1-1.jpg";
    if(data?.photo?.images?.medium!==undefined)
    {
        image=data.photo.images.medium.url;
    }
  return (
    <div className={style.cardContainer}>
        <div className={style.picContainer}>
            <img className={style.resImg} src={image} alt="restraunt image"/>
        </div>
        <section className={style.body}>
            <h1>{`${data?.name} (${data?.rating})`}</h1>
            <div className={style.info}>
                <div className={style.price}>
                    <p>Price:</p>
                    <p>{data?.price}</p>
                </div>
                <div className={style.ranking}>
                    <p>Ranking :</p>
                    <p>{data?.ranking}</p>
                </div>
                <div className={style.cusine}>
                    {data?.cuisine?.map((item)=>{
                        return(<div className={style.cusineCard} key={item?.key}>
                            {item?.name}
                        </div>)
                    })}
                </div>
                <div className={style.address}>
                    <FaSearchLocation/>
                    <p>{data?.address}</p>
                </div>
                <div className={style.phone}>
                    <FaPhone/>
                    <p>{data?.phone}</p>
                </div>
                <div className={style.links}>
                    <a href={data?.web_url} target="_blank">Trip Advisor</a>
                    <a href={data?.website} target="_blank">Website</a>
                </div>

            </div>
        </section>
    
    </div>
  )
}

export default Cards