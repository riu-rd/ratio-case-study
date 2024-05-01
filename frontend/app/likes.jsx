import { View, ScrollView, Text, Button, Dimensions } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useRef, useState } from 'react';
import LikesModal from '../components/likesModal';
import BottomSheet from 'react-native-simple-bottom-sheet';

const likes = () => {
  const panelRef = useRef(null);

  return (
    <SafeAreaView className="bg-primary w-full h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="justify-start items-center h-full w-full px-5">

        <Button
          onPress={() => panelRef.current.togglePanel()}
          title="Open Modal"
          color="#0883AA"
          accessibilityLabel="Open Modal"
        />

        <BottomSheet 
          ref={ref => panelRef.current = ref}
          sliderMinHeight={0}
          sliderMaxHeight={Dimensions.get('window').height * 0.75}
        >
          <LikesModal
          />
        </BottomSheet>

        

        </View>
      </ScrollView>
    </SafeAreaView>
      
  )
}

export default likes;