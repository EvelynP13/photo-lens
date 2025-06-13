import React, { useState, useEffect } from "react";

import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { global } from "../config/global";
import SearchForm from "../components/SearchForm";

export default function PhotosScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("Beach");
  const [photos, setPhotos] = useState([]);
  const searchPhotos = () => {
    console.log("Make a call to the API using the search query:" + searchQuery);
    fetch(
      "https://api.unsplash.com/search/photos?client_id=" +
        global.unsplashAccessKey +
        "&query=" +
        searchQuery
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPhotos(json["results"]);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    searchPhotos();
  }, [searchQuery]);
  return (
    <View style={styles.PhotosScreen}>
      <SearchForm setSearchQuery={setSearchQuery} type="photos"/>
      {photos.length > 0 ? (
        <FlatList
          data={photos}
          keyExtractor={(item) => item.id}
          numColumns={2}
          style={{ margin: 10, marginBottom: 100 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.resultImageTouchable}
              onPress={() => {
                navigation.navigate("Photo Details", {
                  photoId: item.id,
                });
              }}
            >
              <Image
                style={styles.resultImage}
                source={{ uri: item.urls.regular }}
              />
            </TouchableOpacity>
          )}
        />
      ) : (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  PhotosScreen: {},
  loadingContainer: {
    height: "100%",
    justifyContent: "center",
  },
  resultImage: {
    flex: 1,
    height: 200,
  },
  resultImageTouchable: {
    flex: 1,
    margin: 10,
    height: 200,
  },
});
