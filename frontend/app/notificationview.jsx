import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router';

const NotificationView = () => {
  const { title, description, icon, date } = useLocalSearchParams();

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="justify-start items-center h-full w-full m-2">

          <Text className="font-outfitbold text-xl">{title}</Text>
          <View className="flex flex-row justify-center items-center h-fit w-full mt-1">
              <View className="bg-black w-4/5 h-[1px] mr-2"></View>
          </View>
          <View className="flex flex-col justify-center items-start h-fit w-4/5 mt-4">
            <Text className="font-outfitnormal text-lg">{date}</Text>
            <Text className="mt-2 font-zillanormal text-base">{description}</Text>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default NotificationView