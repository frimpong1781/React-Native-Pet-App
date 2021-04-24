import React from "react";
import { View, Text, FlatList } from "react-native";
import Pet from "./Pet";

const PetScreen = () => {
     const pets = [
          {
               petName: "Pastel",
               breed: "Cat",
               age: "2 years old",
               location: "93 Shoreline Dr.",
          },
          {
               petName: "Raka",
               breed: "Dog",
               age: "13 years old",
               location: "93 Shoreline Dr.",
          },
          {
               petName: "Jhony",
               breed: "Dog",
               age: "2 years old",
               location: "93 Shoreline Dr.",
          },
          {
               petName: "Ghandi",
               breed: "Dog",
               age: "6 years old",
               location: "7 High st. Tadi",
          },
     ];

     return (
          <View>
               <FlatList
                    data={pets}
                    renderItem={({ item }) => {
                         return (
                              <Pet
                                   name={item.petName}
                                   breed={item.breed}
                                   age={item.age}
                                   location={item.location}
                              />
                         );
                    }}
                    keyExtractor={(item) => item.petName}
                    showsVerticalScrollIndicator={false}
               />

               <Text></Text>
          </View>
     );
};

export default PetScreen;
