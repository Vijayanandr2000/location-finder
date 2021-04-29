import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

const Map = ({ list }) => {
  console.log(list);
  const [viewport, setViewport] = useState({
    latitude: 13.0878,
    longitude: 80.2785,
    zoom: 8,
  });

  return (
    <ReactMapGL
      mapboxApiAccessToken="pk.eyJ1IjoidmlqYXlhbmFuZHIiLCJhIjoiY2tvMmpnY3pmMDhucjJ2cnR6bm1lbGJsNiJ9.rEHL1kc21r7U7ciJHXcN7w"
      {...viewport}
      mapStyle="mapbox://styles/mapbox/dark-v9"
      width="100%"
      height="90%"
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {list.map((item) => (
        <Marker
          latitude={item.lat}
          longitude={item.lon}
          offsetLeft={-20}
          offsetTop={-10}
        >
          <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F299087%2Fmarker_map_icon&psig=AOvVaw1Bt1ZA0ZgwmhiARGtQHOzg&ust=1619767483865000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNjriaL2ovACFQAAAAAdAAAAABAJ"
            alt={item.place}
            width={viewport.zoom * 5}
            height={viewport.zoom * 5}
            color="red"
          />
        </Marker>
      ))}
    </ReactMapGL>
  );
};
export default Map;
