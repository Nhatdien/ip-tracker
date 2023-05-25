"use client"
import Image from 'next/image'
import './page.css'

import "leaflet/dist/leaflet.css"
import { Icon } from 'leaflet'
import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet'
import { useState} from 'react'
export default function Home() {
  const [ip, setIP] = useState<string>("");
  const [apiData, setApiData] = useState<any>();
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();
  const MyComponent = () => {
    const map = useMap()
    map.panTo([latitude, longitude])
    return null
  }
  
  const getData = async () => {
    const apiKey = "at_shbxSO9sIWiAuxiEfhUcj4FGY5jeU"
    let response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`);
    let data = await response.json();
  
    return data
  }

  const handleClick = async () => {
   
    const data = await getData();
    console.log(data);
    setApiData(data);
    setLatitude(data.location.lat);
    setLongitude(data.location.lng);
  }

  const customIcon = new Icon({
    "iconUrl" :"https://cdn-icons-png.flaticon.com/128/447/447031.png",
    "iconSize": [40, 40]
  })
  return (<>
  <header className='flex flex-col items-center head_wrapper'>
    <h1 className='mb-4'> <b>IP Address Tracker</b></h1>
    <div className='input_wrapper'>
    <input
    className="address_input" 
    type="text" 
    placeholder='Type ip address'
    value={ip}
    onChange={(e) => setIP(e.target.value)}/>
    <button className='find-btn' onClick={handleClick}><b>{'>'}</b></button>
    </div>
  </header>

    {apiData && <MapContainer center={[latitude,longitude]} zoom={8} scrollWheelZoom={true}>
    <MyComponent/>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
    />
    
     <Marker position={[latitude, longitude]} icon={customIcon}>
    <Popup>
    
    </Popup>
  </Marker>
  </MapContainer>}
  </>
  )
}
