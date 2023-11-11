import { View, Text } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

const origin = { latitude: 37.3318456, longitude: -122.0296002 };
const destination = { latitude: 37.771707, longitude: -122.4053769 };
const GOOGLE_MAPS_APIKEY = "AIzaSyALMQoqyOnN5AhdOR17Mbg9dPtKDx-XhPs";

const Map = () => {
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {/* <MapViewDirections
        origin={origin} 
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
      /> */}
      <Marker
        coordinate={{
          latitude: 37.78825,
          longitude: -122.4324,
        }}
        title="Origin"
        description="Here is the description"
        identifier="origin"
      />
    </MapView>
  );
};

export default Map;
