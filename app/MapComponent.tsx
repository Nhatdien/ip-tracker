import "leaflet/dist/leaflet.css"
import { Icon } from 'leaflet'
import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet'

interface cordinate  {
    latitude: number,
    longitude: number
}
const MyComponent = ({latitude, longitude}:cordinate) => {
    const map = useMap()
    map.panTo([latitude, longitude])
    return null
  }

const customIcon = new Icon({
    "iconUrl" :"https://cdn-icons-png.flaticon.com/128/447/447031.png",
    "iconSize": [50, 40]
  })

const MapComponent = ({latitude, longitude}:cordinate) => {
   return <>
   <MapContainer center={[latitude,longitude]} zoom={15} scrollWheelZoom={false}>
   
    <MyComponent latitude={latitude} longitude={longitude}/>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
    />
    
     <Marker position={[latitude, longitude]} icon={customIcon}>
  </Marker>
  </MapContainer>
  </>
}

export default MapComponent