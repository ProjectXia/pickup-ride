import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https:links.papareact.com/3pn",
  },
  {
    id: "Uber-X-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https:links.papareact.com/5w8",
  },
  {
    id: "Uber-X-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https:links.papareact.com/7pf",
  },
  {
    id: "Uber-X-342",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https:links.papareact.com/5w8",
  },
];

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  return (
    <SafeAreaView className="flex-grow bg-white mb-28">
      <View className="flex-row items-center px-4 mb-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeftIcon size={20} color={"black"} on />
        </TouchableOpacity>
        <View className="justify-center flex-1">
          <Text className="text-xl text-center">Select a Ride</Text>
        </View>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            className={`flex-row items-center justify-between px-6 ${
              id === selected?.id && "bg-slate-200"
            }`}
          >
            <Image
              source={{ uri: image }}
              style={{ width: 88, height: 88, resizeMode: "contain" }}
            />
            <View className="-ml-6">
              <Text className="text-xl font-semibold">{title}</Text>
              <Text>Travel time...</Text>
            </View>
            <Text className="text-xl font-semibold">$45</Text>
          </TouchableOpacity>
        )}
      />
      <View>
        <TouchableOpacity
          className={`py-3 mx-3 mt-1 bg-black ${!selected && "bg-slate-300"}`}
          disabled={!selected}
        >
          <Text className="text-lg text-center text-white">
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;
