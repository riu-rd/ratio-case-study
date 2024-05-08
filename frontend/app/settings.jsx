import { View, Text, ScrollView, TouchableOpacity, Switch, Image, SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import icons from '../constants/icons';

const settings = () => {
  return (
    <SafeAreaView className="bg-primary w-full h-full justify-start">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View className="justify-start items-center h-full w-full">

        <View className="w-full justify-start items-center px-5">
          <Text className="font-outfitsemibold text-sm text-[#838383] py-3 w-full text-start">
            Phone Number & Email
          </Text>

          <View className="w-full h-[1px] bg-colorline" />

          <TouchableOpacity className="w-full flex flex-row justify-between items-center py-3"
            // onPress={()=> {
            //   router.replace({ pathname: "/", params: {  } })
            // }}
          >
            <Text className="font-outfitbold text-sm">
            (226)-235-5763
            </Text>
            <View className="flex flex-row justify-center items-center gap-2">
                <Image 
                  source ={icons.arrow}
                  resizeMode='contain'
                />
            </View>
          </TouchableOpacity>

          <View className="w-full h-[1px] bg-colorline" />

          <TouchableOpacity className="w-full flex flex-row justify-between items-center py-3"
            // onPress={()=> {
            //   router.replace({ pathname: "/", params: {  } })
            // }}
          >
            <Text className="font-outfitbold text-sm">
            camilo.siabato.1@gmail.com
            </Text>
            <View className="flex flex-row justify-center items-center gap-2">
                <Image 
                  source ={icons.arrow}
                  resizeMode='contain'
                />
            </View>
          </TouchableOpacity>


        </View>

        <View className="w-full h-[1px] bg-colorline" />

      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default settings