import React, { useEffect, useRef } from "react";

import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";

import TurbineLayouts from "./turbines.json";

import classes from "./WebMap.module.css";

const renderer = {
  type: "simple",
  symbol: {
    type: "simple-marker",
    color: "red",
    size: 6,

    outline: {
      color: "white",
    },
  },
};

const blob = new Blob([JSON.stringify(TurbineLayouts)], {
  type: "application/json",
});
const url = URL.createObjectURL(blob);
const geojson_layer = new GeoJSONLayer({
  url: url,
  renderer: renderer,
});

const WebMap = (props) => {
  const mapRef = useRef(null);

  useEffect(() => {
    // const geojsonLayer = new GeoJSONLayer({
    //     url: geojson_layer,
    //     renderer: renderer
    // });

    console.log(props.latitude);
    new MapView({
      container: mapRef.current,
      map: new Map({
        basemap: "dark-gray-vector",
        layers: [geojson_layer],
      }),
      center: [props.longitude, props.latitude],
      zoom: 10.5,
    });
  }, [props.longitude, props.latitude]);
  return (
    <div
      className={classes.map}
      ref={mapRef}
      style={{ height: "40vh", width: "40%" }}
    />
  );
};

export default WebMap;
