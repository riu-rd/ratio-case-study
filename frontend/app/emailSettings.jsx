import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

const EmailSettings = () => {
  return (
    <SafeAreaView className="bg-primary w-full h-full justify-start">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="justify-start items-center h-full w-full">

        <View className="w-full justify-start items-center px-6">
          <Text className="font-outfitbold text-sm text-darkgray py-3 w-full text-start">
            Email
          </Text>
        </View>

        <View className="w-full h-[1px] bg-lightgray" />

        <TouchableOpacity className="w-full justify-start items-center px-6">
          <Text className="font-outfitsemibold text-sm text-black py-3 w-full text-start">
            camilo.siabato.1@gmail.com
          </Text>
        </TouchableOpacity>

        <View className="w-full h-[1px] bg-lightgray" />

        <View className="w-full justify-start items-center px-6">
          <Text className="font-outfitsemibold text-sm text-[#14B7EA] py-3 w-full text-start tracking-tight">
            Check your email! We sent you a verification link.
          </Text>
        </View>

        <View className="w-full h-[1px] bg-lightgray" />

        <TouchableOpacity className="w-full justify-center items-center px-6">
          <Text className="font-outfitsemibold text-sm text-black py-3 w-full text-center">
          Resend Verification Email
          </Text>
        </TouchableOpacity>

        <View className="w-full h-[1px] bg-lightgray" />
          
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default EmailSettings;