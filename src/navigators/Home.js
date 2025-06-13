import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/Home";
import { Feather } from "@expo/vector-icons";
import PhotoDetailsScreen from '../screens/PhotoDetails';

const Stack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: "Professional Photos",
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
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerMenuButton: {
    marginLeft: 15,
  },
  headerMenuButton: {
    margin: 20
  }
});
