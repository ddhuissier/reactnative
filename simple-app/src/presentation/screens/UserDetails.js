import React from "react";
import { ImageBackground, StyleSheet, View, Text, Image } from "react-native";
import Card from "../../components/Card";

export default function UserDetailsScreen({ navigation }) {
  const name = navigation.getParam("name");
  const username = navigation.getParam("username");
  const email = navigation.getParam("email");
  const street = navigation.getParam("address.street");
  return (
    <ImageBackground
      source={require("../../assets/bg-2.jpg")}
      style={styles.bgImage}
    >
      <View style={StyleSheet.container}>
        <Card style={styles.card}>
          <Image
            style={styles.avatar}
            source={require("../../assets/user_avatar.png")}
          ></Image>
          <Text style={styles.info}>{name}</Text>
          <Text style={styles.info}>{username}</Text>
          <Text style={styles.info}>{email}</Text>
          <Text style={styles.info}>{street}</Text>
        </Card>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bgImage: {
    flex: 1,
    justifyContent: "center",
  },
  avatar: {
    width: 100,
    height: 100,
  },
  info: {
    color: "black",
    fontSize: 15,
  },
});
