import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import axios from 'axios';

function App() {

  const [city, setCity] = useState("")
  const [lat, setLat] = useState("")
  const [lng, setLng] = useState("")
  const [ke,setKe] = useState()
  const [val,setVal] = useState()
  const [object, setObject] = useState(null)
  // setCity("coimbatore")

  useEffect(() => {
    weatherDetails()
  },[])

  const weatherDetails = async () => {
    const url = "http://api.geonames.org/findNearByWeatherJSON?lat=10.921389325&lng=77.30262575&username=arun"
    const res = await axios.get(url)
    const data = await res.data
    console.log(data)
    setCity(data.weatherObservation.stationName)
    setLat(data.weatherObservation.lat)
    setLng(data.weatherObservation.lng)
    const keys = Object.keys(data.weatherObservation)
    console.log(keys)
    keys.forEach(key=>{
      console.log(`${key} : ${data.weatherObservation[key]}`)
    })
    // setObject(keys.forEach(key=>{
    //   `${key} : ${data.weatherObservation[key]}`
    // }))
    const weatherDetails = keys.map(key => `${key} : ${data.weatherObservation[key]}`)
    setObject(weatherDetails)

    console.log(object)
  }
  return (
    <div className="App">
      <button type="submit" onClick={weatherDetails}>click me</button>
      <p className='details'>{city} : {lat}, {lng}</p>
      <br />
      {object && object.map(detail => <p key={detail}> {detail} </p>)}

    </div>
  );
}

export default App;
