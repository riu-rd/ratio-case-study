import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import GenderButton from '../components/genderButton';
import icons from '../constants/icons';
import { useLocalSearchParams, useRouter } from 'expo-router';

const gender = () => {
  const router = useRouter();
  const [gender, setGender] = useState(null);
  const { displayGender } = useLocalSearchParams();

  const handleGender = (selected) => {
    setGender(selected);
  }

  useEffect(() => {
    if (displayGender){
      setGender(displayGender);
    }
  }, [displayGender]);

  return (
    <SafeAreaView className="bg-primary w-full h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="justify-between items-center h-full w-full px-6">
          <View className="justify-between items-center h-fit w-full">
            <Text className="text-black text-xl font-outfitbold text-start w-full">
              I’m looking to connect with... 
            </Text>
            <Text className="text-halftransparent text-xs font-outfitsemibold text-start w-full mb-3">
              Select the options below who you would like to meet
            </Text>

            <GenderButton icon={icons.male} name="Male" color="#ecfeff" handleGender={handleGender} gender={gender}/>
            <GenderButton icon={icons.female} name="Female" color="#fdf4ff" handleGender={handleGender} gender={gender}/>
            <GenderButton icon={icons.both} name="Both" color="#fffbeb" handleGender={handleGender} gender={gender}/>
            
            <View className="w-full items-start justify-start mt-2">
              <Text className="text-gray text-xs font-outfitsemibold text-start pr-6">
                Your matches will reflect the new selected option so that it fits your preference. 
              </Text>
            </View>
          </View>

          <TouchableOpacity className="flex flex-row items-center justify-center gap-2 w-full bg-ceruleanblue rounded-full h-16 m-5"
          onPress={()=> {
            router.replace({ pathname: "/preferenceSettings", params: { gender } })
          }}>
            <Text className="text-white font-outfitbold text-base"> 
              Confirm
            </Text>
          </TouchableOpacity>
          
          

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default gender;