import React, { useEffect } from 'react';
import { SplashScreen, Stack } from 'expo-router';
import { useFonts } from "expo-font";
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';

/*************************************************************** 
Prevent splash screen from auto hiding before asset 
loading is complete
***************************************************************/
SplashScreen.preventAutoHideAsync(); 

const RootLayout = () => {
  const router = useRouter();

  const [fontsLoaded, error] = useFonts({
    // @ts-ignore
    "Outfit-Thin": require("../assets/fonts/Outfit-Thin.ttf"),
    // @ts-ignore
    "Outfit-ExtraLight": require("../assets/fonts/Outfit-ExtraLight.ttf"),
    // @ts-ignore
    "Outfit-Light": require("../assets/fonts/Outfit-Light.ttf"),
    // @ts-ignore
    "Outfit-Normal": require("../assets/fonts/Outfit-Regular.ttf"),
    // @ts-ignore
    "Outfit-Medium": require("../assets/fonts/Outfit-Medium.ttf"),
    // @ts-ignore
    "Outfit-SemiBold": require("../assets/fonts/Outfit-SemiBold.ttf"),
    // @ts-ignore
    "Outfit-Bold": require("../assets/fonts/Outfit-Bold.ttf"),
    // @ts-ignore
    "Outfit-ExtraBold": require("../assets/fonts/Outfit-ExtraBold.ttf"),
    // @ts-ignore
    "Outfit-Black": require("../assets/fonts/Outfit-Black.ttf"),
    
    // @ts-ignore
    "ZillaSlab-Light": require("../assets/fonts/ZillaSlab-Light.ttf"),
    // @ts-ignore
    "ZillaSlab-Normal": require("../assets/fonts/ZillaSlab-Regular.ttf"),
    // @ts-ignore
    "ZillaSlab-Medium": require("../assets/fonts/ZillaSlab-Medium.ttf"),
    // @ts-ignore
    "ZillaSlab-SemiBold": require("../assets/fonts/ZillaSlab-SemiBold.ttf"),
    // @ts-ignore
    "ZillaSlab-Bold": require("../assets/fonts/ZillaSlab-Bold.ttf")
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
        style="light"
      />
      
      <Stack>
        <Stack.Screen 
          name="index" 
          options={{
            headerShown: false
          }} />
        <Stack.Screen 
          name="notificationview" 
          options={{
            title: 'View Notification'
          }} />
        <Stack.Screen 
          name="likes" 
          options={{
            headerShown: false
          }} />
        <Stack.Screen 
          name="preferenceSettings" 
          options={{
          title: "Preference Settings",
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontSize: 20,
            color: 'black',
            fontFamily: 'Outfit-Bold'
          },
          headerBackVisible: false,
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 5 }}
              onPress={() => {
                router.replace('/');
              }}
            >
              <Text 
              className="font-outfitsemibold text-base text-colorlink underline">
                Done
              </Text>
            </TouchableOpacity>
            )
          }} />
        <Stack.Screen 
          name="gender" 
          options={{
            title: 'Gender',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 28,
              color: 'black',
              fontFamily: "Outfit-Bold"
            }
          }} />
        <Stack.Screen
        name="settings"
        
        options={{
          title: "Settings",
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 24,
            color: 'black',
            fontFamily: 'Outfit-Bold'
          },
          headerBackVisible: false,
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 5 }}
              onPress={() => {
                router.replace('/');
              }}
            >
              <Text 
              className="font-outfitsemibold text-base text-colorlink underline">
                Done
              </Text>
            </TouchableOpacity>
            )
          }} />
      </Stack>
      
    </>
  )
}

export default RootLayout