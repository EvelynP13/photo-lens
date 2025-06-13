import React, { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import CollectionsDetailsScreen from "../screens/CollectionDetails";
import { global } from "../config/global";

export default function CollectionDetailsScreen({ route, navigation }) {
  const [collectionData, setCollectionData] = useState();
  const { collectionId } = route.params;
  const getCollectionData = () => {
    fetch(
      "https://api.unsplash.com/collections/" +
        collectionId +
        "?client_id=" +
        global.unsplashAccessKey
    )
      .then((response) => response.json())
      .then((json) => {
        setCollectionData(json);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    getCollectionData();
  }, [collectionId]);
  return (
    <View style={StyleSheet.CollectionDetailsScreen}>
      {collectionData ? (
        <View style={styles.detailsContainer}>
          {collectionData.preview_photos ? (
            <View>
              <FlatList data={
                collectionData.preview_photos
              }
              renderItem={({item}) => (
                <TouchableOpacity style={styles.resultImageTouchable}
                onPress={() => {
                  navigation.navigate('Photo Details', {
                    photoId: item.id,
                  });
                }}
              >
                <Image style={styles.resultImage} source={{uri: item.urls.regular}}
                />
                </TouchableOpacity>
                )}
                numColumns="2"
                style={{margin: 10, marginBottom: 100}}
                />
            </View>
          ) : (
            <View>
              <Text style={styles.noPhotos}>Collection has no photos!</Text>
            </View>
          )}
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
  collectionDetailsScreen: {},
  loadingContainer: {
    height: "100%",
    justifyContent: "center",
  },
  noPhotos:{
    backgroundColor: '#000',
    color: '#FFF',
    margin: 10,
    padding: 10
  },
  resultImage: {
    flex: 1, 
    height: 200
  },
  resultImageTouchable: 
  {
    flex: 1,
    margin: 10, 
    height: 200
  }
});
