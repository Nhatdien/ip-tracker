"use client"
import Image from 'next/image'
import './page.css'

import { IpInfo } from './popup'
import { useEffect, useState} from 'react'
import MapComponent from './MapComponent'

export default function Home() {
  const [ip, setIP] = useState<string>("");
  const [apiData, setApiData] = useState<any>();
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();
  const [err, setErr] = useState<any>();


  
  const getData = async () => {
    try{
    const apiKey = "at_shbxSO9sIWiAuxiEfhUcj4FGY5jeU"
    let response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`);
    let data = await response.json();
    setApiData(data);
    setLatitude(data.location.lat);
    setLongitude(data.location.lng);
    setErr("");
    }catch(error: any){
      setErr(error.message);
      console.log(err);
    }  
  }

  useEffect(() => {
    getData()
  }, [err])

  const renderTable = () => {
    // if (loading) {
    //   return <Loading />;
    // }

    if (err && err.length > 0) {
      return <div>{err}</div>
    }

    if (apiData) {
      return (
          <IpInfo 
         ip={apiData.ip} 
         country={apiData.location.country}
         city ={apiData.location.city}
         timezone={apiData.location.timezone}
         isp={apiData.isp}/>
      );
    }
  }

  return (
  <>
  {/* Input and header */}
  <header className='flex flex-col items-center head_wrapper z-10'>
  
    <h1 className='mb-4'> <b>IP Address Tracker</b></h1>
    <div className='input_wrapper text-center'>
    <input
    className="address_input" 
    type="text" 
    placeholder='Type ip address'
    value={ip}
    onChange={(e) => setIP(e.target.value)}/>
    <button className='find-btn' onClick={getData}><b>{'>'}</b></button>
    {renderTable()}
    </div>
  </header>
  {apiData && <MapComponent latitude={latitude} longitude={longitude}/>}
  </>
  )
}
