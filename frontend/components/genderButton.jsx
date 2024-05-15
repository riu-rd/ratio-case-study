import { Text, Image, View, TouchableHighlight } from 'react-native';
import React from 'react';

const GenderButton = ({icon, name, color, handleGender, gender}) => { 
  return (
    <TouchableHighlight 
      key={name}
      activeOpacity={0.9}
      underlayColor={color}
      onPress={() => handleGender(name)}
      className={`items-center justify-center w-full border-gray border-[1px] rounded-xl h-16 m-2 overflow-hidden`}
      >

      <View className={`flex flex-row items-center justify-center w-full h-full bg-transparent`}>
        <Image source ={icon} resizeMode='contain' className="mr-1"/>
        <Text className={` font-outfitmedium text-base ${gender === name ? "text-black" : "text-gray"}`}> {name}</Text>
      </View>

    </TouchableHighlight>
  )
}

export default GenderButton;