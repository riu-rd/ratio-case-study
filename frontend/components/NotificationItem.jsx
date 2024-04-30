import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import icons from "../constants/icons"
import { useRouter } from 'expo-router'

const NotificationItem = ({title, description, icon, date}) => {
  const router = useRouter();

  return (
    <>
      <View className="flex flex-row justify-end items-center h-fit w-[95%] gap-1 mt-6">
          <Text className="w-3/12 text-black text-left font-outfitnormal text-sm">{date}</Text>
          <View className="bg-black w-9/12 h-[1px] mr-2"></View>
      </View>

      <TouchableOpacity className="flex flex-row w-full gap-1"
      onPress={()=> {
        router.push({ pathname: "notificationview", params: { title, description, icon, date } })
      }}>
        <View className="items-center justify-center">
          <View className="border-black border-[1px] w-16 h-16 rounded-full items-center justify-center">
              <Image 
                source = {icon}
                resizeMode='contain'
              />
          </View>
        </View>
          
        <View className="justify-start items-start gap-2 flex-wrap w-full">
          <Text className="font-outfitbold text-base">{title}</Text>
          <View className="flex flex-row justify-between items-center w-3/4">
            <Text className="font-zillanormal text-xs w-[85%]">{description}</Text>
            <Image 
              source ={icons.arrow}
              resizeMode='contain'
            />
          </View>
        </View>
      </TouchableOpacity>
    </>
  )
}

export default NotificationItem