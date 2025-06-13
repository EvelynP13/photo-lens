import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import PhotosScreen from "../screens/Photos";
import PhotoDetailsScreen from "../screens/PhotoDetails";
import { Feather } from "@expo/vector-icons";

export default function PhotosNavigator() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator style={StyleSheet.PhotosNavigator}>
      <Stack.Screen
        name="Photos"
        component={PhotosScreen}
        options={({ navigation }) => ({
          title: "Photos",
          headerLeft: () => (
            <Feather
              style={styles.headerMenuButton}
              name="menu"
              size={24}
              color="black"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
      <Stack.Screen name="Photo Details" component={PhotoDetailsScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  PhotosNavigator: {},
  headerMenuButton: {
    marginLeft: 20,
  },
});
