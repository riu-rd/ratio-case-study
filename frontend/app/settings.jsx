import { View, Text, ScrollView, TouchableOpacity, Switch, Image, SafeAreaView, Alert } from 'react-native';
import SettingsButton from '../components/settingsButton';
import React, { useEffect, useState } from 'react';
import { useRouter, useLocalSearchParams } from 'expo-router';
import icons from '../constants/icons';

const settings = () => {
  const [pausedProfile, setPausedProfile] = useState(false);

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

          <View className="w-full flex flex-row justify-center items-center flex-wrap py-5 pl-5">
            <View className="justify-start items-start w-4/5 h-full">
              <Text className="text-black text-sm font-outfitsemibold">
                Pause Profile
              </Text>
              <Text className="font-outfitnormal text-sm text-gray">
                Enabling Pause Profile will not allow any new people to view your profile. You will still be able to chat with your current matches
              </Text>
            </View>
            <View className="justify-start items-center h-full w-1/5">
              <Switch 
                trackColor={{false: '#919191', true: '#2EA7D3'}}
                thumbColor={pausedProfile ? '#ffffff' : '#ffffff'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => setPausedProfile(previousState => !previousState)}
                value={pausedProfile}
                style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
              />
            </View>
          </View>

          <View className="w-full h-[1px] bg-colorline" />

          <View className="w-full justify-start items-center px-5">
            <Text className="font-outfitbold text-sm text-[#838383] mt-5 py-3 w-full text-start">
              Notifications
            </Text>

            <View className="w-full h-[1px] bg-colorline" />

            <TouchableOpacity className="w-full flex flex-row justify-between items-center py-3"
              // onPress={()=> {
              //   router.replace({ pathname: "/", params: {  } })
              // }}
            >
              <Text className="font-outfitbold text-sm">
              Push Notifications
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

          <View className="w-full justify-start items-center px-5">
            <Text className="font-outfitbold text-sm text-[#838383] mt-8 py-3 w-full text-start">
              Legal
            </Text>

            <View className="w-full h-[1px] bg-colorline" />

            <TouchableOpacity className="w-full flex flex-row justify-between items-center py-3"
              // onPress={()=> {
              //   router.replace({ pathname: "/", params: {  } })
              // }}
            >
              <Text className="font-outfitbold text-sm">
              Privacy Policy
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
              Terms of Service
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
              Privacy Preferences
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

          <View className="w-full justify-start items-center px-5">
            <Text className="font-outfitbold text-sm text-[#838383] mt-8 py-3 w-full text-start">
              Community
            </Text>

            <View className="w-full h-[1px] bg-colorline" />

            <TouchableOpacity className="w-full flex flex-row justify-between items-center py-3"
              // onPress={()=> {
              //   router.replace({ pathname: "/", params: {  } })
              // }}
            >
              <Text className="font-outfitbold text-sm">
              Community Guidelines
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
              Safety Center
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
              Safe Dating Tips
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

          <View className ="flex flex-row justify-between items-center my-10 w-full px-4 flex-wrap">
            <SettingsButton 
              title={"Log Out"}
              handlePress={() => Alert.alert('Logout Button pressed')}
              extraProps={"bg-[#81D8D0]"}
            />
            <SettingsButton 
              title={"Delete account"}
              handlePress={() => Alert.alert('Delete account Button pressed')}
              extraProps={"bg-transparent border-[1px] border-black"}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default settings