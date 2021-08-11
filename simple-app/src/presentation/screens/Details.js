import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Card from "../../components/Card";

export default function DetailsScreen({ navigation }) {
  const title = navigation.getParam("title");
  const body = navigation.getParam("body");
  const rating = navigation.getParam("rating");
  return (
    <View style={StyleSheet.container}>
      <Card>
        <Text style={styles.info}>{title}</Text>
        <Text style={styles.info}>{body}</Text>
        <Text style={styles.info}>{rating}</Text>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  info: {
    fontFamily: "nunito-bold",
    color: "black",
    fontSize: 18,
  },
});
