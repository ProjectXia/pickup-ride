import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "@env";
import { useNavigation } from "@react-navigation/native";
import NavFavourites from "./NavFavourites";
import { ChevronLeftIcon } from "react-native-heroicons/outline";

const NavigateCard = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center px-4">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ChevronLeftIcon size={20} color={"black"} on />
        </TouchableOpacity>
        <View className="justify-center flex-1">
          <Text className="text-xl text-center">Good Morning, Zia</Text>
        </View>
      </View>

      <View>
        <GooglePlacesAutocomplete
          enablePoweredByContainer={false}
          styles={toInputBoxStyles}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          placeholder="Where To?"
          onPress={(data, details = null) => {}}
          minLength={2}
          fetchDetails={true}
          returnKeyType={"search"}
          onFail={(error) => console.log(error)}
          onNotFound={() => console.log("no results")}
          query={{
            key: "AIzaSyALMQoqyOnN5AhdOR17Mbg9dPtKDx-XhPs",
            language: "en",
          }}
        />

        <NavFavourites />
      </View>
      <View className="flex-row py-4 mt-auto border-t justify-evenly border-slate-100">
        <TouchableOpacity
          className="flex flex-row justify-between px-4 py-3 bg-black rounded-full"
          style={{ width: 105 }}
          onPress={() => {
            navigation.navigate("RideOptionsCard");
          }}
        >
          <Image
            source={require("../assets/car-copy.png")}
            style={{
              width: 30,
              height: 20,
              resizeMode: "contain",
            }}
          />
          <Text className="text-center text-white">Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex flex-row justify-between px-4 py-3 rounded-full bg-slate-100"
          style={{ width: 105 }}
        >
          <Image
            source={require("../assets/food-copy.png")}
            style={{
              width: 30,
              height: 20,
              resizeMode: "contain",
            }}
          />
          <Text className="text-center text-white">Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: { backgroundColor: "white", paddingTop: 20, flex: 0 },
  textInput: { backgroundColor: "#DDDDDF", borderRadius: 0, fontSize: 18 },
  textInputContainer: { paddingHorizontal: 20, paddingBottom: 0 },
});
