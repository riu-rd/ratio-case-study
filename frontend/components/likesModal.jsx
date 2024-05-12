import { View, ScrollView, Text, ImageBackground } from 'react-native';
import React from 'react';
import { profileLikes } from '../constants/profiles';
import { Shadow } from 'react-native-shadow-2';

const LikesModal = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="w-full h-full">
      <View className="justify-start items-start h-full w-full">

        <View className="justify-start items-start w-full ml-2">
          <Text className="font-outfitbold text-black text-2xl">
            Profiles that liked you!
          </Text>
        </View>

        <View className="flex-1 flex-row items-center justify-around flex-wrap my-5">
          {
            profileLikes.map((profile, index) => (
              <View
              className="p-1"
              key={index}>
              <Shadow
                className="rounded-2xl bg-transparent"
                distance={10}>
                <ImageBackground 
                  className="rounded-2xl overflow-hidden w-36 h-36 justify-end"
                  source={profile.image}
                  resizeMode='cover'
                >
                  <View className="flex-1 justify-end p-2">
                    <Text className="text-white font-internormal text-xs">
                      {profile.type}
                    </Text>
                    <Text className="text-white font-internormal text-[10px]">
                      {profile.time}
                    </Text>
                  </View>
                </ImageBackground>
              </Shadow>
              </View>
            ))
          }
        </View>
      </View>
    </ScrollView>
  )
}

export default LikesModal;