import React, { useEffect } from 'react';
import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from "expo-font";
import { StatusBar } from 'expo-status-bar';

/*************************************************************** 
Prevent splash screen from auto hiding before asset 
loading is complete
***************************************************************/
SplashScreen.preventAutoHideAsync(); 

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    // @ts-ignore
    "Outfit-Bold": require("../assets/fonts/Outfit-Bold.ttf"),
    // @ts-ignore
    "Outfit-Regular": require("../assets/fonts/Outfit-Regular.ttf"),
    // @ts-ignore
    "ZillaSlab-Regular": require("../assets/fonts/ZillaSlab-Regular.ttf")
  });

  /*************************************************************** 
              useEffect to make sure fonts are loaded
  ***************************************************************/
  useEffect(() => {
    if (error) {
      throw error;
    }
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
    if (!fontsLoaded && !error) {
      return
    }
  }, [fontsLoaded, error])

  return (
    <>
      <StatusBar
        backgroundColor='#FFFFFF'
        style="dark"
      />
      <Stack>
        <Stack.Screen name="index" options={
          {headerShown: false}} />
        <Stack.Screen name="notificationview" options={
        {title: 'View Notification'}} />
      </Stack>
    </>
  )
}

export default RootLayout