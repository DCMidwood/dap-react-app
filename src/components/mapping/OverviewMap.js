import React, { useEffect, useRef } from "react";

import Map from "@arcgis/core/Map";
import Draw from "@arcgis/core/views/draw/Draw";
import MapView from "@arcgis/core/views/MapView";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";

import TurbineLayouts from "../../data/turbines.json"
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
    const view = new MapView({
      container: mapRef.current,
      map: new Map({
        basemap: "dark-gray-vector",
        layers: [geojson_layer],
      }),
      center: [props.longitude, props.latitude],
      zoom: props.zoom,
    });

    // view.ui.add("line-button", "top-left");
    // const draw = new Draw({
    //   view: view,
    // });
  }, [props.longitude, props.latitude, props.zoom]);

  return (
    <div
      className={classes.map}
      ref={mapRef}
      style={{ height: "40vh", width: "40%" }}
    />
  );
};

export default WebMap;
