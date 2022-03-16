import "react-native-gesture-handler";
import React from "react";
import {
  getPathFromState,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Provider as AuthorizationProvider } from "./src/context/AuthContext";
import { Provider as GrabItemProvider } from "./src/context/GrabItemContext";
import { Provider as MeetingPlaceProvider } from "./src/context/MeetingPlaceContext";
import { navigationRef, navigate } from "./src/RootNavigation";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

//==============
// Screens
//==============
import AboutScreen from "./src/screens/AboutScreen";
import EvacGrabItemScreen from "./src/screens/GrabItems/EvacGrabItemScreen";
import HowToGuideScreen from "./src/screens/HowToGuideScreen";
import MainScreen from "./src/screens/MainScreen";
import MeetingPlacesScreen from "./src/screens/MeetingPlaces/MeetingPlacesScreen";
import SigninScreen from "./src/screens/Login/SigninScreen";
import SignupScreen from "./src/screens/Login/SignupScreen";
import ResetPasswordScreen from "./src/screens/Login/ResetPasswordScreen";
import WelcomeLoginCredCheckScreen from "./src/screens/Login/WelcomeLoginCredCheckScreen";
import CreateGrabItemScreen from "./src/screens/GrabItems/CreateGrabItemScreen";
import GrabItemDetailScreen from "./src/screens/GrabItems/GrabItemDetailScreen";
import CreateMeetingPlacesScreen from "./src/screens/MeetingPlaces/CreateMeetingPlacesScreen";
import MeetingPlaceDetailScreen from "./src/screens/MeetingPlaces/MeetingPlaceDetailScreen";
import EditGrabItemScreen from "./src/screens/GrabItems/EditGrabItemScreen";
import EditMeetPlaceScreen from "./src/screens/MeetingPlaces/EditMeetPlaceScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const LoggedIn = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={MainScreen}
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="EvacGrabItem"
        component={EvacGrabItemScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity onPress={() => navigate("CreateItem")}>
              <Feather name="plus" size={30} />
            </TouchableOpacity>
          ),
          title: "My Evac Item List",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="MeetingPlaces"
        component={MeetingPlacesScreen}
        options={{
          headerRight: () => (
            <TouchableOpacity onPress={() => navigate("CreatePlace")}>
              <Feather name="plus" size={30} />
            </TouchableOpacity>
          ),
          title: "My Meeting Place List",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: "About ",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="HowToGuide"
        component={HowToGuideScreen}
        options={{
          title: "Walkthrough",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="CreateItem"
        component={CreateGrabItemScreen}
        options={{
          title: "Create Item",
          drawerLabel: () => null,
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="ItemDetail"
        component={GrabItemDetailScreen}
        options={{
          title: "Item Details",
          drawerLabel: () => null,
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="CreatePlace"
        component={CreateMeetingPlacesScreen}
        options={{
          title: "Create Meeting Place",
          drawerLabel: () => null,
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="PlaceDetail"
        component={MeetingPlaceDetailScreen}
        options={{
          title: "Place Details",
          drawerLabel: () => null,
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="EditItem"
        component={EditGrabItemScreen}
        options={{
          title: "Edit Item",
          drawerLabel: () => null,
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Drawer.Screen
        name="EditPlace"
        component={EditMeetPlaceScreen}
        options={{
          title: "Edit Place",
          drawerLabel: () => null,
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Drawer.Navigator>
  );
};



function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CredCheck"
        component={WelcomeLoginCredCheckScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="About"
        component={AboutScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Signin"
        component={SigninScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoggedIn"
        component={LoggedIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPasswordScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default () => {
  return (
    <MeetingPlaceProvider>
      <GrabItemProvider>
        <AuthorizationProvider>
          <NavigationContainer ref={navigationRef}>
            <App />
          </NavigationContainer>
        </AuthorizationProvider>
      </GrabItemProvider>
    </MeetingPlaceProvider>
  );
};
