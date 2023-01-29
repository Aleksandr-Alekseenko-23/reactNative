import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: "50.516339",
          longitude: "30.602185",
          latitudeDelta: "0.001",
          longitudeDelta: "0.006",
        }}
      >
        <Marker
          coordinate={{ latitude: "50.516339", longitude: "30.602185" }}
        />
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
