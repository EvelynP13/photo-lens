import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  Linking,
} from "react-native";
import { global } from "../config/global";

export default function PhotoDetailsScreen({ route, navigation }) {
  const [photoData, setPhotoData] = useState();
  const { photoId } = route.params;
  console.log(photoId, photoData);

  const getPhotoData = () => {
    fetch(
      "https://api.unsplash.com/photos/" +
        photoId +
        "?client_id=" +
        global.unsplashAccessKey
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPhotoData(json);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getPhotoData();
  }, [photoId]);

  return (
    <View style={StyleSheet.PhotoDetailsScreen}>
      {photoData ? (
        <View style={styles.detailsContainer}>
          <Image
            style={styles.photoImage}
            source={{ uri: photoData.urls.regular }}
          />
          <View style={styles.metaDataContainer}>
            <Text style={styles.metaDataText}>
              <Text style={{ fontWeight: "bold" }}>Photographer:</Text>{" "}
              {photoData.user.first_name} {photoData.user.last_name}
            </Text>
            <Text style={styles.metaDataText}>
              <Text style={{ fontWeight: "bold" }}>Location:</Text>{" "}
              {photoData.location.title}
            </Text>
            <Text style={styles.metaDataText}>
              <Text style={{ fontWeight: "bold" }}>Num of views:</Text>{" "}
              {photoData.views}
            </Text>
            <Text style={styles.metaDataText}>
              <Text style={{ fontWeight: "bold" }}>Num of downloads:</Text>{" "}
              {photoData.downloads}
            </Text>
            <Text style={[styles.metaDataText, { marginTop: 10 }]}>
              <Text style={{ fontWeight: "bold" }}>View Photo:</Text>{" "}
              <Text
                onPress={() => {
                  Linking.openURL(photoData.links.html);
                }}
              ></Text>
              click here
            </Text>
            <Text style={styles.metaDataText}>
              <Text style={{ fontWeight: "bold" }}>Download Photo:</Text>{" "}
              <Text
                onPress={() => {
                  Linking.openURL(photoData.links.download);
                }}
              ></Text>
              click here
            </Text>
          </View>
        </View>
      ) : (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  PhotoDetailsScreen: {},
  loadingContainer: {
    height: "100%",
    justifyContent: "center",
  },
  photoImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  metaDataContainer: {
    margin: 20,
  },
  metDataText: {
    fontSize: 17,
  },
});
