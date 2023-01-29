import { StyleSheet, Text, View, FlatList, Image, Button } from "react-native";
import React, { useState, useEffect } from "react";

const DefaultPostsScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log("posts", posts);
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ marginTop: 32 }}>
            <Image
              source={{ uri: item.photo }}
              style={{
                height: 240,
                marginBottom: 8,
                borderRadius: 8,
              }}
            />
          </View>
        )}
      />
      <Button
        title="to Map"
        onPress={() => {
          navigation.navigate("Map");
        }}
      />
      <Button
        title="to Comments"
        onPress={() => {
          navigation.navigate("Comments");
        }}
      />
    </View>
  );
};

export default DefaultPostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
