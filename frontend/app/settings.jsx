import { View, Text, ScrollView, TouchableOpacity, Switch, Image, SafeAreaView, Alert } from 'react-native';
import SettingsButton from '../components/settingsButton';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import icons from '../constants/icons';

import SettingsAlert from '../components/settingsAlert';

const settings = () => {
  const router = useRouter();
  const [pausedProfile, setPausedProfile] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  return (
    <SafeAreaView className="bg-primary w-full h-full justify-start">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="justify-start items-center h-full w-full">

          <View className="w-full justify-start items-center px-6">
            <Text className="font-outfitsemibold text-sm text-darkgray py-3 w-full text-start">
              Phone Number & Email
            </Text>

            <View className="w-full h-[1px] bg-lightgray" />

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

            <View className="w-full h-[1px] bg-lightgray" />

            <TouchableOpacity className="w-full flex flex-row justify-between items-center py-3"
              onPress={()=> {
                router.push({ pathname: "/emailSettings", params: {  } })
              }}
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

          <View className="w-full h-[1px] bg-lightgray" />

          <View className="w-full flex flex-row justify-center items-center flex-wrap py-2 pl-6">
            <View className="justify-start items-start w-4/5 h-full py-4">
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
                style={{ transform: [{ scaleX: 1.6 }, { scaleY: 1.6 }] }}
              />
            </View>
          </View>

          <View className="w-full h-[1px] bg-lightgray" />

          <View className="w-full justify-start items-center px-6">
            <Text className="font-outfitbold text-sm text-darkgray mt-5 py-3 w-full text-start">
              Notifications
            </Text>

            <View className="w-full h-[1px] bg-lightgray" />

            <TouchableOpacity className="w-full flex flex-row justify-between items-center py-3"
              onPress={()=> {
                router.push({ pathname: "/pushNotificationSettings", params: {  } })
              }}
            >
              <Text className="font-outfitsemibold text-sm">
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

          <View className="w-full h-[1px] bg-lightgray" />

          <View className="w-full justify-start items-center px-6">
            <Text className="font-outfitbold text-sm text-darkgray mt-8 py-3 w-full text-start">
              Legal
            </Text>

            <View className="w-full h-[1px] bg-lightgray" />

            <TouchableOpacity className="w-full flex flex-row justify-between items-center py-3"
              // onPress={()=> {
              //   router.replace({ pathname: "/", params: {  } })
              // }}
            >
              <Text className="font-outfitsemibold text-sm">
              Privacy Policy
              </Text>
              <View className="flex flex-row justify-center items-center gap-2">
                  <Image 
                    source ={icons.arrow}
                    resizeMode='contain'
                  />
              </View>
            </TouchableOpacity>

            <View className="w-full h-[1px] bg-lightgray" />

            <TouchableOpacity className="w-full flex flex-row justify-between items-center py-3"
              // onPress={()=> {
              //   router.replace({ pathname: "/", params: {  } })
              // }}
            >
              <Text className="font-outfitsemibold text-sm">
              Terms of Service
              </Text>
              <View className="flex flex-row justify-center items-center gap-2">
                  <Image 
                    source ={icons.arrow}
                    resizeMode='contain'
                  />
              </View>
            </TouchableOpacity>

            <View className="w-full h-[1px] bg-lightgray" />

            <TouchableOpacity className="w-full flex flex-row justify-between items-center py-3"
              // onPress={()=> {
              //   router.replace({ pathname: "/", params: {  } })
              // }}
            >
              <Text className="font-outfitsemibold text-sm">
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

          <View className="w-full h-[1px] bg-lightgray" />

          <View className="w-full justify-start items-center px-6">
            <Text className="font-outfitbold text-sm text-darkgray mt-8 py-3 w-full text-start">
              Community
            </Text>

            <View className="w-full h-[1px] bg-lightgray" />

            <TouchableOpacity className="w-full flex flex-row justify-between items-center py-3"
              // onPress={()=> {
              //   router.replace({ pathname: "/", params: {  } })
              // }}
            >
              <Text className="font-outfitsemibold text-sm">
              Community Guidelines
              </Text>
              <View className="flex flex-row justify-center items-center gap-2">
                  <Image 
                    source ={icons.arrow}
                    resizeMode='contain'
                  />
              </View>
            </TouchableOpacity>

            <View className="w-full h-[1px] bg-lightgray" />

            <TouchableOpacity className="w-full flex flex-row justify-between items-center py-3"
              // onPress={()=> {
              //   router.replace({ pathname: "/", params: {  } })
              // }}
            >
              <Text className="font-outfitsemibold text-sm">
              Safety Center
              </Text>
              <View className="flex flex-row justify-center items-center gap-2">
                  <Image 
                    source ={icons.arrow}
                    resizeMode='contain'
                  />
              </View>
            </TouchableOpacity>

            <View className="w-full h-[1px] bg-lightgray" />

            <TouchableOpacity className="w-full flex flex-row justify-between items-center py-3"
              // onPress={()=> {
              //   router.replace({ pathname: "/", params: {  } })
              // }}
            >
              <Text className="font-outfitsemibold text-sm">
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

          <View className="w-full h-[1px] bg-lightgray" />

          <View className ="flex flex-row justify-between items-center my-11 w-full px-4 flex-wrap">
            <SettingsButton 
              title={"Log Out"}
              handlePress={() => setShowLogout(true)}
              extraProps={"bg-turquoise"}
            />
            <SettingsButton 
              title={"Delete account"}
              handlePress={() => setShowDelete(true)}
              extraProps={"bg-transparent border-[1px] border-black"}
            />
          </View>

          <SettingsAlert
            alert={showLogout}
            setShowAlert={setShowLogout}
            header={"Are you sure you want to log out? You'll still be visible to compatible users at your last known location."}
            headerProps={"text-sm leading-5 tracking-tighter"}
            subheader={"Choose 'REMEMBER ME ON THIS DEVICE' for a quick and effortless login next time. "}
            subheaderProps={"text-xs tracking-tighter"}
            positiveButtonText={"Forget me on this Device"}
            negativeButtonText={"Remember me on this Device"}
          />
          <SettingsAlert
            alert={showDelete}
            setShowAlert={setShowDelete}
            header={"Confirm"}
            headerProps={"text-xl"}
            subheader={"Are you sure you want to delete your account? This action cannot be undone."}
            subheaderProps={"text-sm tracking-tighter leading-4"}
            positiveButtonText={"Hide Profile"}
            negativeButtonText={"Delete Account"}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default settings