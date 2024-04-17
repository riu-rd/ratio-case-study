// @ts-nocheck
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import icons from "../constants/icons"
import {Notifications} from "../constants/notifications.js"
import NotificationItem from "../components/NotificationItem";

export default function App() {
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
            
          <Text className="font-obold text-xl">Notification</Text>

          {
            Notifications.map((notif) => (
              <NotificationItem 
                title={notif.title}
                description={notif.description}
                icon={notif.icon}
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
