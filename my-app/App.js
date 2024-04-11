import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "./src/RootNavigation.js";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/Pages/Home.jsx";
import Navbar from "./src/Components/Navbar.jsx";
import PageDescription from "./src/Pages/PageDescription.jsx";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <View style={styles.appContainer}>
        <StatusBar style="auto" />
        <View style={styles.navContainer}>
          <Navbar />
        </View>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              ...styles.homeContainer, // Appliquer les styles du home screen
            }}
          />
          <Stack.Screen name="PageDescription" component={PageDescription} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundImage:
      "linear-gradient(0deg, rgba(38,24,79,1) 0%, rgba(195,165,249,1) 100%)",
  },
  navContainer: {
    justifyContent: "space-between",
  },
  homeContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
