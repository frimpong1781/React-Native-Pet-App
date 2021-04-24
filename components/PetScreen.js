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
               petImage: "Raka.jpeg",
          },
          {
               petName: "Raka",
               breed: "Dog",
               age: "13 years old",
               location: "93 Shoreline Dr.",
               petImage: "Raka.jpeg",
          },
          {
               petName: "Jhony",
               breed: "Dog",
               age: "2 years old",
               location: "93 Shoreline Dr.",
               petImage: "Raka.jpeg",
          },
          {
               petName: "Ghandi",
               breed: "Dog",
               age: "6 years old",
               location: "7 High st. Tadi",
               petImage: "Raka.jpeg",
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
                                   petImage={item.petImage}
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
