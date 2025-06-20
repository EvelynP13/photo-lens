import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import HomeNavigator from "./src/navigators/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import PhotosNavigator from "./src/navigators/Photos";
import CollectionsNavigator from "./src/navigators/Collections";

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer style={styles.container}>
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen
          name="Home"
          component={HomeNavigator}
          options={{ title: "Home" }}
        />
        <Drawer.Screen
          name="Photos"
          component={PhotosNavigator}
          options={{ title: "Photos" }}
        />
        <Drawer.Screen
          name="Collections"
          component={CollectionsNavigator}
          options={{ title: "Photo Collections" }}
        />
      </Drawer.Navigator>
      <StatusBar style="auto" hidden={true} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
