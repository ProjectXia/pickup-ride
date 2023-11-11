import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { ArrowRightCircleIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      horizontal={true}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          className="w-40 p-2 pt-4 pb-8 pl-6 m-2 bg-slate-200"
          onPress={() => {
            navigation.navigate(item.screen);
          }}
        >
          <View>
            <Image
              source={{ uri: item.image }}
              style={{
                width: 120,
                height: 120,
                resizeMode: "contain",
                marginBottom: 10,
              }}
            />
            <Text className="mb-3 text-lg font-semibold ">{item.title}</Text>
            <ArrowRightCircleIcon size="45" color={"black"} className="p-2" />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
