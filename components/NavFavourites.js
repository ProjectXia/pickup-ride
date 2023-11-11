import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { BriefcaseIcon, HomeIcon } from "react-native-heroicons/solid";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "Code Street, London UK",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "London Eye, London UK",
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View className="bg-slate-200" style={{ height: 0.5 }} />
      )}
      renderItem={({ item: { id, location, destination, icon } }) => (
        <TouchableOpacity className="flex-row items-center p-5">
          {id === "123" ? (
            <View className="p-2 mr-4 rounded-full bg-slate-300">
              <HomeIcon size={25} color={"white"} />
            </View>
          ) : (
            <View className="p-2 mr-4 rounded-full bg-slate-300">
              <BriefcaseIcon size={25} color={"white"} />
            </View>
          )}
          <View>
            <Text className="text-lg font-semibold">{location}</Text>
            <Text className="text-slate-500">{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;
