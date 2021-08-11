import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Button,
  TextInput,
  View,
  Text,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

const image = {
  uri: "https://cdn.pixabay.com/photo/2017/01/18/13/10/galaxy-soho-1989816_960_720.jpg",
};
const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test("is-num-1-5", "Rating must be a number 1 - 5", (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

// rsf
export default function FormsScreen({ addReview }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ flex: 1, justifyContent: "center" }}
        source={image}
      >
        <Text style={styles.title}>Formulaire</Text>
        <Formik
          initialValues={{ title: "", body: "", rating: "" }}
          validationSchema={reviewSchema}
          onSubmit={(values, actions) => {
            actions.resetForm();
            addReview(values);
          }}
        >
          {(props) => (
            <View>
              <TextInput
                style={styles.input}
                placeholder="Review title"
                onChangeText={props.handleChange("title")}
                value={props.values.title}
              />
              <Text style={styles.errorText}>
                {props.touched.title && props.errors.title}
              </Text>

              <TextInput
                style={styles.input}
                multiline
                placeholder="Review details"
                onChangeText={props.handleChange("body")}
                value={props.values.body}
              />
              <Text style={styles.errorText}>
                {props.touched.body && props.errors.body}
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Rating (1 - 5)"
                onChangeText={props.handleChange("rating")}
                value={props.values.rating}
                keyboardType="numeric"
              />
              <Text style={styles.errorText}>
                {props.touched.rating && props.errors.rating}
              </Text>
              <Button
                style={styles.subBtn}
                title="Valider"
                onPress={props.handleSubmit}
              />
            </View>
          )}
        </Formik>
      </ImageBackground>
    </View>
  );
}
// rns
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  errorText: {
    color: "red",
    fontSize: 16,
    fontFamily: "nunito-bold",
    textAlign: "center",
  },
  input: {
    backgroundColor: "white",
    color: "black",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    margin: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  subBtn: {
    color: "blue",
    margin: 10,
    width: 100,
    borderRadius: 6,
  },
});
