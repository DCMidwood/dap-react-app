import WebMap from "../components/mapping/OverviewMap"
// import { Map } from '@esri/react-arcgis';


const DesignPortal = () => {
    const latitude = 54.1
    const longitude =  -2.6
    const zoom = 6
    
    return (
        <div>
            <h3>Design Portal</h3>
            <WebMap latitude={latitude} longitude={longitude} zoom = {zoom}/>
        </div>
    )
}


// const DesignPortal = () => {
//     return (
//     <Map
//         class="full-screen-map"
//         mapProperties={{ basemap: 'satellite' }}
//     />
//     )
// }


export default DesignPortal