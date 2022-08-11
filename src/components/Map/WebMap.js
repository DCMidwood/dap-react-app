import React, {useEffect, useRef} from "react";

import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";

import TurbineLayouts from "./turbines.json"

  const renderer = {
    type: "simple",
    symbol: {
      type: "simple-marker",
      color: "red",
      size: 6,
      
      outline: {
        color: "white"
      }}
    };

  const blob = new Blob([JSON.stringify(TurbineLayouts)], {
    type: "application/json"
  });
  const url = URL.createObjectURL(blob);
  const geojson_layer = new GeoJSONLayer({ 
    url: url,
    renderer: renderer});


const WebMap = () => {
    const mapRef = useRef(null);

    useEffect(
        ()=> {

            // const geojsonLayer = new GeoJSONLayer({
            //     url: geojson_layer,
            //     renderer: renderer
            // });

            new MapView({
                container: mapRef.current,
                map: new Map({
                    basemap: "dark-gray-vector",
                    layers: [geojson_layer]
                }),
                center: [-2.67, 54.19],
                zoom: 10.5
            });
        },
        []
    )
    return <div ref={mapRef} style = {{ height: "40vh", width: "40%"}}/>
}

export default WebMap