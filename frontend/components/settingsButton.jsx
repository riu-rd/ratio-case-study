import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const SettingsButton = ({title, handlePress, extraProps}) => {
  return (
    <TouchableOpacity
      key={title}
      onPress={() => handlePress()}
      className={`items-center justify-center w-[47%] rounded-2xl h-11 my-2 mx-0 overflow-hidden ${extraProps}`}
      >
      <View className={`flex flex-row items-center justify-center w-full h-full`}>
        <Text className="font-outfitbold text-sm text-black">{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default SettingsButton;