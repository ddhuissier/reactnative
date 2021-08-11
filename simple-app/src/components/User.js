import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Card from "./Card";

const Users = ({ navigation }) => {
  const [isLoading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    setLoading(true);
    getUsers();
  }, []);
  return (
    <View
      style={{
        flex: 2,
        padding: 10,
        height: 300,
        width: "100%",
        alignItems: "center",
        backgroundColor: "transparent",
      }}
    >
      {/* padding: 10, height: 300 */}
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          <Text
            style={{
              fontFamily: "nunito-bold",
              fontSize: 24,
              //fontWeight: "bold",
              color: "black",
            }}
          >
            JsonPlaceHolder Users
          </Text>
          <FlatList
            style={{ marginTop: 16 }}
            data={users}
            keyExtractor={({ id }) => id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("UserDetails", item)}
              >
                <Card>
                  <Text style={{ color: "grey", fontSize: 16 }}>
                    {item.name}{" "}
                  </Text>
                </Card>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};
/* const stylesUser = StyleSheet.create({
  containerUser: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    alignItems: "center",
  },
}); */
export default Users;
