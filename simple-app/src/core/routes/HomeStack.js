import * as React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../../presentation/screens/Home";
import FormsScreen from "../../presentation/screens/Forms";
import LoginScreen from "../../presentation/screens/Login";
import ListScreen from "../../presentation/screens/List";
import CameraScreen from "../../presentation/screens/Camera";
import DetailsScreen from "../../presentation/screens/Details";
import UserDetailsScreen from "../../presentation/screens/UserDetails";
import AboutScreen from "../../presentation/screens/About";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    paddingLeft: 10,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: 120,
  },
});

const screens = {
  Home: {
    screen: HomeScreen,
  },
  Forms: {
    screen: FormsScreen,
    navigationOptions: {
      title: "Ecran formulaire",
    },
  },
  About: {
    screen: AboutScreen,
    navigationOptions: {
      title: "A propos",
    },
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: "Ecran de login",
    },
  },
  List: {
    screen: ListScreen,
    navigationOptions: {
      title: "Ecran liste utilisateurs",
      headerRight: () => (
        <View style={styles.iconContainer}>
          <Ionicons name="md-search" size={32} color="black" />
        </View>
      ),
    },
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      title: "Détail review",
    },
  },
  UserDetails: {
    screen: UserDetailsScreen,
    navigationOptions: {
      title: "Détails utlisateur",
    },
  },
  Camera: {
    screen: CameraScreen,
    navigationOptions: {
      title: "Ecran camera",
    },
  },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: "gray" },
    headerTintColor: "white",
  },
});

export default createAppContainer(HomeStack);
