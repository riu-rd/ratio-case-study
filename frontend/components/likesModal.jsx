import { View, ScrollView, Text, Modal, Button, Image, ImageBackground } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react';
import { profileLikes } from '../constants/profiles';

const LikesModal = () => {
  return (
    <SafeAreaView className="bg-primary w-full h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="justify-start items-start h-full w-full">

          <View className="justify-start items-start w-full ml-2">
            <Text className="font-outfitbold text-black text-2xl">
              Profiles that liked you!
            </Text>
          </View>

          <View className="flex-1 flex-row items-center justify-around flex-wrap my-2">
            {
              profileLikes.map((profile, index) => (
                  <ImageBackground 
                    key={index}
                    className="rounded-2xl overflow-hidden m-1 w-36 h-36 justify-end shadow-2xl"
                    source={profile.image}
                    resizeMode='cover'
                  >
                    <View className="flex-1 justify-end p-2">
                      <Text className="text-white font-outfitnormal text-xs">
                        {profile.type}
                      </Text>
                      <Text className="text-white font-outfitnormal text-xs">
                        {profile.time}
                      </Text>
                    </View>
                  </ImageBackground>
              ))
            }
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default LikesModal;