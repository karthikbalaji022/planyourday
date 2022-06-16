import axios from "axios";


const getPlaces=async (coor,bound)=>{
  const options= {
    method: 'GET',
    url: `https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary`,
    params: {
      bl_latitude: bound.sw.lat,
      tr_latitude: bound.ne.lat,
      bl_longitude: bound.sw.lng,
      tr_longitude: bound.ne.lng,
      limit: '30',
      currency: 'USD',
      lunit: 'km',
      lang: 'en_US'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_RAPID_API_KEY,
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };    
  console.log({options});

    const data=await axios({...options}).then(function (response) {
        const {data}=response.data;
        return data;
      }).catch(function (error) {
        console.error(error);
      })
    return data;
}
export default getPlaces;