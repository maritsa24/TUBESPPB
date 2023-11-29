import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/HomeScreen";
import BrandScreen from "./src/BrandScreen";
import ProfileScreen from "./src/ProfileScreen";
import TypeScreen from "./src/TypeScreen";
import InfoScreen from "./src/InfoScreen";
import InfoBrandScreen from "./src/InfoBrandScreen";
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Initial" component={HomeScreen} />
      <Stack.Screen name="InitialBrand" component={BrandScreen} />
      <Stack.Screen name="Info" component={InfoScreen} />
      <Stack.Screen name="InfoBrand" component={InfoBrandScreen} />
    </Stack.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
              color = focused ? "white" : "darkgray";
            } else if (route.name === "Brand") {
              iconName = "car-sport";
              color = focused ? "white" : "darkgray";
            } else if (route.name === "Type") {
              iconName = "ios-settings-sharp";
              color = focused ? "white" : "darkgray";
            } else if (route.name === "Profile") {
              iconName = "person";
              color = focused ? "white" : "darkgray";
            }

            return (
              <Ionicons name={iconName} size={24} color={color} />
            )
          },
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            padding: 10,
            backgroundColor:  'black',
            borderTopStartRadius: 40,
            borderTopEndRadius: 40,
          }
        })}
      >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Brand" component={BrandScreen} />
      <Tab.Screen name="Type" component={TypeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  footerIcon: {
    width: 25
  }
});
