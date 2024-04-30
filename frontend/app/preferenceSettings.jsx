import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch, Image } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from 'expo-router';
import Slider from '@react-native-community/slider';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import icons from '../constants/icons';

const preferenceSettings = () => {
  const [distance, setDistance] = useState([0]);
  const [enabledDistance, setEnabledDistance] = useState(false);
  const [age, setAge] = useState([18, 25]);
  const [enabledAge, setEnabledAge] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  
  return (
    <SafeAreaView className="bg-primary w-full h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="justify-start items-center h-full w-full">

          <View className="w-full h-[1px] bg-colorline" />

          <View className="flex flex-row justify-between items-center w-full px-5 py-3">
            <Text className="font-outfitbold text-xl text-black">
              Preference Settings
            </Text>
            <TouchableOpacity
            className="justify-center items-center">
              <Text className="font-outfitsemibold text-base text-colorlink underline">
                Done
              </Text>
            </TouchableOpacity>
          </View>

          <View className="w-full h-[1px] bg-colorline" />

          <View className="px-5 py-3 w-full">
            <Text className="font-outfitbold text-base text-black">
              Distance Preference
            </Text>
            <View className="w-full h-fit items-center justify-center">
              <MultiSlider 
                values={distance}
                min={0}
                max={101}
                step={1}
                sliderLength={300}
                allowOverlap={false}
                snapped={true}
                markerStyle={{ 
                  height:20, width: 20, borderRadius: 10, backgroundColor:'#0883AA', borderWidth: 0,
                }}
                trackStyle={{ borderRadius: 5, height: 1.5 }}
                selectedStyle={{backgroundColor:'#0883AA'}}
                unselectedStyle={{backgroundColor:'#919191'}}
                onValuesChange={(value) => setDistance(value)}
              />
              <Text className="text-xs text-gray font-outfitnormal">
                {distance[0]}
              </Text>
            </View>

            <View className="flex flex-row justify-between items-center w-full">
              <Text className="font-outfitsemibold text-gray text-xs">
                Only show People in this range
              </Text>
              <Switch 
                trackColor={{false: '#919191', true: '#2EA7D3'}}
                thumbColor={enabledDistance ? '#ffffff' : '#ffffff'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => setEnabledDistance(previousState => !previousState)}
                value={enabledDistance}
                style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
              />
            </View>
          </View>

          <View className="w-full h-[1px] bg-colorline" />

          <TouchableOpacity className="w-full flex flex-row justify-between items-center px-5 py-3">
            <Text className="font-outfitsemibold text-sm">
              Gender
            </Text>
            <View className="flex flex-row justify-center items-center gap-2">
                <Text className="font-outfitsemibold text-sm">
                  Male
                </Text>
                <Image 
                  source ={icons.arrow}
                  resizeMode='contain'
                />
            </View>
          </TouchableOpacity>

          <View className="w-full h-[1px] bg-colorline" />

          <View className="w-full px-5 py-3">
            <View className="flex flex-row items-center justify-between w-full">
              <Text className="font-outfitbold text-sm">
                Age Preference
              </Text>
              <Text className="font-outfitsemibold text-gray text-xs">
                {age[0]}-{age[1]}
              </Text>
            </View>
            <MultiSlider 
                values={age}
                min={18}
                max={51}
                step={1}
                sliderLength={300}
                allowOverlap={false}
                snapped={true}
                markerStyle={{ 
                  height:20, width: 20, borderRadius: 10, backgroundColor:'#0883AA', borderWidth: 0,
                }}
                trackStyle={{ borderRadius: 5, height: 1.5 }}
                selectedStyle={{backgroundColor:'#0883AA'}}
                unselectedStyle={{backgroundColor:'#919191'}}
                onValuesChange={(value) => setAge(value)}
              />
              <View className="flex flex-row justify-between items-center w-full">
                <Text className="font-outfitsemibold text-gray text-xs">
                  Only show People in this range
                </Text>
                <Switch 
                  trackColor={{false: '#919191', true: '#2EA7D3'}}
                  thumbColor={enabledDistance ? '#ffffff' : '#ffffff'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={() => setEnabledAge(previousState => !previousState)}
                  value={enabledAge}
                  style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                />
              </View>
          </View>

          <View className="w-full h-[1px] bg-colorline" />

          <View className="flex flex-row justify-between items-center w-full px-5 py-3">
            <Text className="font-outfitsemibold text-black text-sm">
              Verified
            </Text>
            <Switch 
              trackColor={{false: '#919191', true: '#2EA7D3'}}
              thumbColor={isVerified ? '#ffffff' : '#ffffff'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setIsVerified(previousState => !previousState)}
              value={isVerified}
              style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default preferenceSettings