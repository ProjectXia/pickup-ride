import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "@env";
import NavOptions from "../components/NavOptions";
import NavFavourites from "../components/NavFavourites";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white ">
      <View className="flex-col p-5">
        <Text className="text-2xl font-extrabold text-red-400">
          PICKUP RIDE
        </Text>

        <GooglePlacesAutocomplete
          enablePoweredByContainer={false}
          styles={{
            container: { flex: 0, marginVertical: 20 },
            textInput: { fontSize: 18 },
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          placeholder="Where From?"
          onPress={(data, details = null) => {}}
          minLength={2}
          fetchDetails={true}
          onFail={(error) => console.log(error)}
          onNotFound={() => console.log("no results")}
          // listEmptyComponent={() => (
          //   <View style={{ flex: 1 }}>
          //     <Text>No results were found</Text>
          //   </View>
          // )}
          returnKeyType={"search"}
          query={{
            key: "AIzaSyALMQoqyOnN5AhdOR17Mbg9dPtKDx-XhPs",
            language: "en",
          }}
        />

        <NavOptions />
        <NavFavourites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
