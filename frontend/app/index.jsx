// @ts-nocheck
import { Text, View, ScrollView, Image, TouchableOpacity} from "react-native";
import { Link } from 'expo-router';
import React, {useEffect, useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "../constants/icons"
import NotificationItem from "../components/NotificationItem";
import axios from "axios";
import Constants from "expo-constants";

export default function App() {
  // Get the IPv4 Address of the Local Machine to connect to the Express Server
  const uri = Constants.expoConfig.hostUri.split(`:`).shift().concat(`:5555`);
  // Data from the Express Server
  const [data, setData] = useState([])

  // Axios GET call to connect to the Express Server
  useEffect(() => {
    axios.get(`http://${uri}/user/notifications`)
    .then((response) => {
      setData(response.data);
    })
    .catch((err) => {
      console.error(err);
    })
  }, []);

  // Set the Icon for each Notification
  const setIcon = (type) => {
    if (type === "event") {
      return icons.eventIcon
    }
    else if (type === "security") {
      return icons.securityIcon
    }
    else {
      return undefined
    }
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="w-full justify-start items-center h-full px-4 mt-6">
          <TouchableOpacity className="absolute top-2 left-5">
            <Image 
              source = {icons.backArrow}
              resizeMode="contain"
              className="scale-110"
            />
          </TouchableOpacity>
            
          <Text className="font-outfitbold text-xl">Notification </Text>

          <Link
          className="mb-8 text-blue-500 font-outfitbold text-base absolute top-2 right-5"
          href='/preferenceSettings'>
          Preferences
          </Link>
          <Link
          className="mb-8 text-blue-500 font-outfitbold text-base absolute top-8 right-5"
          href='/likes'>
          Likes
          </Link>
          <Link
          className="mb-8 text-blue-500 font-outfitbold text-base absolute top-8 right-32"
          href='/settings'>
          Settings
          </Link>
          {
            data.map((notif) => (
              <NotificationItem 
                key={notif.title}
                title={notif.title}
                description={notif.description}
                icon={setIcon(notif.type)}
                date={notif.date}
              />
            ))
          }

          <View className="flex flex-row justify-end items-center h-fit w-[95%] gap-1 mt-6 mb-10">
            <View className="bg-black w-9/12 h-[1px] mr-2"></View>
          </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
