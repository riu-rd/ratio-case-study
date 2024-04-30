import { Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const GenderButton = ({icon, name, color, handleGender, gender}) => {
  return (
    <TouchableOpacity 
      onPress={() => handleGender(name)}
      className={`flex flex-row items-center justify-center gap-2 w-full border-gray border-[1px] rounded-xl h-16 m-2 
      bg-${gender === name ? color : null}-50`}>
        <Image source ={icon} resizeMode='contain'/>
        <Text className="text-gray font-outfitmedium text-base"> {name}</Text>
    </TouchableOpacity>
  )
}

export default GenderButton