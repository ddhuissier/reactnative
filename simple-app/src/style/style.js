import { StyleSheet } from "react-native";
//import themeStyle from "./theme.style";

export const globalStyles = StyleSheet.create({
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
  image: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 30,
    width: 260,
    backgroundColor: "#2196F3",
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    padding: 20,
    color: "white",
  },
});

/* image: {
    flex: 1,
    justifyContent: "center",
    // width: "100%",
    // height: "100%",
  },
  buttonBar: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    // padding: 5,
  },
  button: {
    marginLeft: 10,
    //marginBottom: 30,
    width: 150,
    height: 50,
    backgroundColor: "grey",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    padding: 10,
    color: "white",
  }, */
