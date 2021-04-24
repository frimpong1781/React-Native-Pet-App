import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PetScreen from "./components/PetScreen";
import Pet from "./components/Pet";

export default function App() {
     return (
          <View style={styles.container}>
               <PetScreen />
          </View>
     );
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: "lightgray",
          // backgroundColor: "#fff",
          // alignItems: "center",
          // justifyContent: "center",
     },
});
