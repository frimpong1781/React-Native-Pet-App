import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

const Pet = ({ name, breed, age, location, petImage }) => {
     return (
          <View style={styles.container}>
               <Image
                    source={require("../assets/Ninja.jpeg")}
                    // source={require("../assets/" + { petImage })}
                    style={styles.image}
               />
               <View style={styles.petInfo}>
                    <Text style={styles.petName}>{name}</Text>
                    <Text style={styles.petText}>{breed}</Text>
                    <Text style={styles.petText}>{age}</Text>
                    <View style={styles.icon}>
                         <EvilIcons name='location' size={24} color='#062f80' />
                         <Text style={styles.location}>{location}</Text>
                    </View>
               </View>
          </View>
     );
};

const styles = StyleSheet.create({
     container: {
          flexDirection: "row",
          marginHorizontal: 20,
          alignItems: "center",
          marginVertical: 10,
     },
     image: {
          width: 150,
          height: 200,
          borderRadius: 20,
          flex: 5,
     },
     petInfo: {
          backgroundColor: "#fff",
          height: 150,
          flex: 5,
          borderBottomRightRadius: 20,
          borderTopRightRadius: 20,
          justifyContent: "center",
     },
     icon: {
          flexDirection: "row",
          marginHorizontal: 5,
          marginTop: 12,
     },
     petName: {
          marginHorizontal: 10,
          fontWeight: "bold",
          fontSize: 20,
          color: "#062f80",
     },
     petText: {
          marginHorizontal: 10,
          marginTop: 10,
          fontSize: 15,
          color: "#91969e",
     },
     location: {
          fontSize: 15,
          color: "#91969e",
     },
});

export default Pet;
