import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";
import CollectionsScreen from "../screens/Collections";
import CollectionDetailsScreen from "../screens/CollectionDetails";
import PhotoDetailsScreen from "../screens/PhotoDetails";

export default function CollectionsNavigator() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator style={StyleSheet.CollectionsNavigator}>
      <Stack.Screen
        name="Collections"
        component={CollectionsScreen}
        options={({ navigation }) => ({
          title: "Collections",
          headerLeft: (props) => {
            return (
              <Feather
                style={styles.headerMenuButton}
                name="menu"
                size={24}
                color="black"
                onPress={() => navigation.toggleDrawer
                  ()}
              />
            )
          },
        })}
      />
      <Stack.Screen name="Collection Details" component={CollectionDetailsScreen}
      />
      <Stack.Screen name="Photo Details"
      component={PhotoDetailsScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  CollectionsNavigator: {},
  headerMenuButton: {
    marginLeft: 20,
  },
});
