import { View, ScrollView, Text, Modal, Button, Image, ImageBackground } from 'react-native';
import React from 'react';
import { profileLikes } from '../constants/profiles';

const LikesModal = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="w-full h-full">
      <View className="justify-start items-start h-full w-full">

        <View className="justify-start items-start w-full ml-2 mb-3">
          <Text className="font-outfitbold text-black text-2xl">
            Profiles that liked you!
          </Text>
        </View>

        <View className="flex-1 flex-row items-center justify-around flex-wrap my-2">
          {
            profileLikes.map((profile, index) => (
              <View
                className="w-fit h-fit"
                key={index}>
                <ImageBackground 
                  className="rounded-2xl overflow-hidden mx-0 my-1 w-36 h-36 justify-end"
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
              </View>
            ))
          }
        </View>
      </View>
    </ScrollView>
  )
}

export default LikesModal;