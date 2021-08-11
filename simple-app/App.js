//import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";
/* import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks"; */
import AppLoading from "expo-app-loading";
//import { AppLoading } from "expo";
import Navigator from "./src/core/routes/HomeStack";
import * as Font from "expo-font";
//import { useFonts, Inter_600SemiBold } from "@expo-google-fonts/inter";

const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./src/assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./src/assets/fonts/Nunito-Bold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // let [fontsLoaded] = useFonts({
  //   Inter_600SemiBold,
  // });
  // console.log(useDimensions());
  // console.log(useDeviceOrientation());
  //const { landscape } = useDeviceOrientation();
  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
        {/* <Text style={styles.title}>My simple app</Text> */}
        <Navigator />
        {/* <StatusBar style="auto" /> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "black",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // alignItems: "center",
    // justifyContent: "center",
    // height: landscape ? "100%" : "30%",
  },
  title: {
    fontSize: 32,
    color: "white",
  },
});
