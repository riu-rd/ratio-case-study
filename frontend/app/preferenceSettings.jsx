import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Switch, Image, SafeAreaView, Dimensions } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import icons from '../constants/icons';
import { useRouter, useLocalSearchParams } from 'expo-router';

const sliderLabel = (props, isMulti) => (
  <>
    <View style={{
      height: 20,
      width: 20,
      position: 'absolute',
      left: props.oneMarkerLeftPosition - 7.5,
      bottom: -8
    }}>
      <Text className="text-xs text-gray font-sfpromedium">
        {props.oneMarkerValue}
      </Text> 
    </View>
    {
      isMulti ?
      <View style={{
      height: 20,
      width: 20,
      position: 'absolute',
      left: props.twoMarkerLeftPosition - 7.5,
      bottom: -10
    }}>
      <Text className="text-xs text-gray font-sfpromedium">
        {props.twoMarkerValue}
      </Text> 
    </View>
    :
    null
    }
  </>
)

const preferenceSettings = () => {
  const router = useRouter();

  const [distance, setDistance] = useState([50]);
  const [enabledDistance, setEnabledDistance] = useState(false);
  const { gender } = useLocalSearchParams();
  const [displayGender, setDisplayGender] = useState("Not Specified");
  const [age, setAge] = useState([18, 25]);
  const [enabledAge, setEnabledAge] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    if (gender){
      setDisplayGender(gender);
    }
  }, [gender]);
  
  return (
    <SafeAreaView className="bg-primary w-full h-full justify-start">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="justify-start items-center h-full w-full">

          <View className="pl-6 pr-4 py-1 mt-4 w-full">
            <Text className="font-outfitbold text-base text-black">
              Distance Preference
            </Text>
            <View className="w-full h-fit items-start justify-center pl-1">

              <View className="h-2 w-2 rounded-full bg-ceruleanblue absolute left-0"></View>
              <View className="h-2 w-2 rounded-full bg-gray absolute right-6"></View>

              <MultiSlider 
                values={distance}
                min={0}
                max={99}
                step={1}
                sliderLength={Dimensions.get('window').width / 1.25}
                allowOverlap={true}
                snapped={true}
                markerStyle={{ 
                  height:20, width: 20, borderRadius: 10, backgroundColor:'#0883AA', borderWidth: 0,
                }}
                trackStyle={{ borderRadius: 5, height: 1.5 }}
                selectedStyle={{backgroundColor:'#0883AA'}}
                unselectedStyle={{backgroundColor:'#919191'}}
                onValuesChange={(value) => setDistance(value)}
                enableLabel={true}
                customLabel={(props) => sliderLabel(props, false)}
              />
            </View>

            <View className="flex flex-row justify-between items-center w-full mt-2">
              <Text className="font-outfitsemibold text-halftransparent text-xs">
                Only show People in this range
              </Text>
              <Switch 
                trackColor={{false: '#919191', true: '#2EA7D3'}}
                thumbColor={enabledDistance ? '#ffffff' : '#ffffff'}
                ios_backgroundColor="#919191"
                onValueChange={() => setEnabledDistance(previousState => !previousState)}
                value={enabledDistance}
                style={{ transform: [{ scaleX: 1.6 }, { scaleY: 1.6 }] }}
              />
            </View>
          </View>

          <View className="w-full h-[1px] bg-lightgray" />

          <TouchableOpacity className=" px-6 py-3 w-full flex flex-row justify-between items-center"
          onPress={()=> {
            router.replace({ pathname: "/gender", params: { displayGender } })
          }}
          >
            <Text className="font-outfitsemibold text-sm">
              Gender
            </Text>
            <View className="flex flex-row justify-center items-center gap-2">
                <Text className="font-outfitsemibold text-sm">
                  {displayGender}
                </Text>
                <Image 
                  source ={icons.arrow}
                  resizeMode='contain'
                />
            </View>
          </TouchableOpacity>

          <View className="w-full h-[1px] bg-lightgray" />

          <View className="w-full px-6 py-1 mt-4">
            <View className="flex flex-row items-center justify-between w-full pr-1">
              <Text className="font-outfitbold text-sm">
                Age Preference
              </Text>
              <Text className="font-sfpromedium text-halftransparent text-xs">
                {age[0]}-{age[1]}
              </Text>
            </View>
            <View className="w-full h-fit items-start justify-center pl-2">

              <View className="h-2 w-2 rounded-full absolute left-1 bg-gray"></View>
              <View className="h-2 w-2 rounded-full absolute right-1 bg-gray"></View>

              <MultiSlider 
                  values={age}
                  min={18}
                  max={50}
                  step={1}
                  sliderLength={Dimensions.get('window').width / 1.22}
                  allowOverlap={false}
                  snapped={true}
                  trackStyle={{ borderRadius: 5, height: 1.5 }}
                  selectedStyle={{backgroundColor:'#0883AA'}}
                  unselectedStyle={{backgroundColor:'#919191'}}
                  onValuesChange={(value) => setAge(value)}
                  markerStyle={{ 
                    height:20, width: 20, borderRadius: 10, backgroundColor:'#0883AA', borderWidth: 0,
                  }}
                  enableLabel={true}
                  customLabel={(props) => sliderLabel(props, true)}
                />
              </View>
              <View className="flex flex-row justify-between items-center w-full mt-2">
                <Text className="font-outfitsemibold text-gray text-xs">
                  Only show People in this range
                </Text>
                <Switch 
                  trackColor={{false: '#919191', true: '#2EA7D3'}}
                  thumbColor={enabledDistance ? '#ffffff' : '#ffffff'}
                  ios_backgroundColor="#919191"
                  onValueChange={() => setEnabledAge(previousState => !previousState)}
                  value={enabledAge}
                  style={{ transform: [{ scaleX: 1.6 }, { scaleY: 1.6 }] }}
                />
              </View>
          </View>

          <View className="w-full h-[1px] bg-lightgray" />

          <View className="flex flex-row justify-between items-center w-full px-6 py-0">
            <Text className="font-outfitsemibold text-black text-sm">
              Verified
            </Text>
            <Switch 
              trackColor={{false: '#919191', true: '#2EA7D3'}}
              thumbColor={isVerified ? '#ffffff' : '#ffffff'}
              ios_backgroundColor="#919191"
              onValueChange={() => setIsVerified(previousState => !previousState)}
              value={isVerified}
              style={{ transform: [{ scaleX: 1.6 }, { scaleY: 1.6 }] }}
            />
          </View>

          <View className="w-full h-[1px] bg-lightgray" />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default preferenceSettings;