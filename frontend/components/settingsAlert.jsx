import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';

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
        <View className="w-[90%] rounded-2xl top-1/4 bg-lightbluegray">

          <View className="items-center justify-center py-5 px-9">
            <Text className={`font-sfprodisplaysemibold text-center text-black ${headerProps}`}>
              {header}
            </Text>
            <Text className={`font-sfprodisplaynormal text-center text-black ${subheaderProps} `}>
              {subheader}
            </Text>
          </View>

          <View className="w-full h-[1px] bg-neutral-300" />

          <TouchableOpacity
            onPress={() => setShowAlert(false)}
            className="items-center justify-center w-full py-3"
          >
            <Text className="text-black font-sfprodisplaymedium text-base">
              {positiveButtonText}
            </Text>
          </TouchableOpacity>

          <View className="w-full h-[1px] bg-neutral-300" />

          <TouchableOpacity
            onPress={() => setShowAlert(false)}
            className="items-center justify-center w-full py-3"
          >
            <Text className="text-[#FF3B30] font-sfprodisplaynormal text-base">
              {negativeButtonText}
            </Text>
          </TouchableOpacity>

          <View className="w-full h-[1px] bg-neutral-300" />
          
          <TouchableOpacity
            onPress={() => setShowAlert(false)}
            className="items-center justify-center w-full py-3"
          >
            <Text className="text-[#007AFF] font-sfprodisplaynormal text-base">
              Cancel
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  )
}

export default SettingsAlert;