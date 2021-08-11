import React from "react";
import { ImageBackground, StyleSheet, View, Text } from "react-native";

const image = {
  uri: "https://cdn.pixabay.com/photo/2017/01/18/13/10/galaxy-soho-1989816_960_720.jpg",
};
// rsf
function AboutScreen(props) {
  return (
    <ImageBackground style={styles.bgImage} source={image}>
      <View style={styles.container}>
        <Text style={styles.title}>About</Text>
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
  bgImage: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    color: "#FF6600",
  },
});

export default AboutScreen;
