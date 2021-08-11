import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";

const image = {
  uri: "https://cdn.pixabay.com/photo/2017/01/18/13/10/galaxy-soho-1989816_960_720.jpg",
};
// rsf
function LoginScreen(props) {
  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
      </View>
    </ImageBackground>
  );
}
// rns
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    color: "#FF6600",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});

export default LoginScreen;
