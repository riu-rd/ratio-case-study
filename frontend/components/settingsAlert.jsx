import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal
} from 'react-native';

const SettingsAlert = ({alert, setShowAlert , header, headerProps, subheader, subheaderProps, positiveButtonText, negativeButtonText}) => {
  return (
    <Modal
      visible={alert}
      transparent
      onRequestClose={() =>
        setShowAlert(false)
      }
      animationType='fade'
      hardwareAccelerated
    >
      <View className="justify-center items-center flex-1 bg-[#00000099]">
        <View className="w-[90%] rounded-2xl top-1/4 bg-alertbackground">

          <View className="items-center justify-center border-b-[1px] border-neutral-300 py-5 px-8">
            <Text className={`font-outfitsemibold text-center text-black ${headerProps}`}>
              {header}
            </Text>
            <Text className={`font-outfitnormal text-center text-black ${subheaderProps}`}>
              {subheader}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => setShowAlert(false)}
            className="items-center justify-center w-full border-b-[1px] border-neutral-300 py-3"
          >
            <Text className="text-black font-outfitmedium text-base">
              {positiveButtonText}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setShowAlert(false)}
            className="items-center justify-center w-full border-b-[1px] border-neutral-300 py-3"
          >
            <Text className="text-[#FF3B30] font-outfitnormal text-base">
              {negativeButtonText}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setShowAlert(false)}
            className="items-center justify-center w-full py-3"
          >
            <Text className="text-[#007AFF] font-outfitnormal text-base">
              Cancel
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  )
}

export default SettingsAlert