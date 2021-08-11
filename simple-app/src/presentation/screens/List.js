import React from "react";
import { View, StyleSheet, StatusBar, ImageBackground } from "react-native";
import "react-native-gesture-handler";
import Users from "../../components/User";

const image = {
  uri: "../../assets/bg-1.jpg",
};

const ListScreen = ({ navigation }) => {
  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.container}>
        <Users navigation={navigation} />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    alignItems: "center",
    backgroundColor: "transparent",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
export default ListScreen;
