import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import "react-native-gesture-handler";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import Card from "../../components/Card";
import FormsScreen from "./Forms";

const image = {
  uri: "https://cdn.pixabay.com/photo/2021/08/02/20/35/architecture-6517841_960_720.jpg",
};

const HomeScreen = ({ navigation }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
  };

  return (
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.containerHome}>
        <Text style={styles.title}>HOME</Text>

        <Modal visible={modalOpen} animationType="slide">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.modalContent}>
              <MaterialIcons
                name="close"
                size={24}
                style={{ ...styles.modalToggle, ...styles.modalClose }}
                onPress={() => setModalOpen(false)}
              />
              <FormsScreen addReview={addReview} />
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        <FlatList
          style={styles.list}
          data={reviews}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Details", item)}
            >
              <Card>
                <Text style={styles.cardTitle}>{item.title}</Text>
              </Card>
            </TouchableOpacity>
          )}
        />

        <View style={styles.buttonBar}>
          <View style={styles.button}>
            <FontAwesome.Button
              name="plus"
              backgroundColor="grey"
              onPress={() => {
                setModalOpen(true);
              }}
            >
              Add to List
            </FontAwesome.Button>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("List");
            }}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>List</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Camera");
            }}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Camera</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  containerHome: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    alignItems: "center",
    backgroundColor: "transparent",
  },
  item: {
    backgroundColor: "#00289F",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 5,
  },
  title: {
    fontFamily: "nunito-bold",
    fontSize: 40,
    color: "white",
    paddingLeft: 10,
  },
  cardTitle: {
    fontFamily: "nunito-bold",
    fontSize: 18,
    color: "black",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  list: {
    marginTop: 20,
  },
  buttonBar: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    margin: 15,
    width: 120,
    height: 50,
    backgroundColor: "grey",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    padding: 10,
    color: "white",
  },
  modalToggle: {
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    backgroundColor: "grey",
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});
export default HomeScreen;
