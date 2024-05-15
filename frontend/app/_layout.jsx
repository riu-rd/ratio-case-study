import React, { useCallback } from 'react';
import { Stack } from 'expo-router';
import { useFonts } from "expo-font";
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

/*************************************************************** 
Prevent splash screen from auto hiding before asset 
loading is complete
***************************************************************/
SplashScreen.preventAutoHideAsync(); 

const RootLayout = () => {
  const router = useRouter();

  const [fontsLoaded, fontError] = useFonts({
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
    "ZillaSlab-Bold": require("../assets/fonts/ZillaSlab-Bold.ttf"),

    // @ts-ignore
    "SFProText-Light": require("../assets/fonts/SFProText-Light.ttf"),
    // @ts-ignore
    "SFProText-Normal": require("../assets/fonts/SFProText-Regular.ttf"),
    // @ts-ignore
    "SFProText-Medium": require("../assets/fonts/SFProText-Medium.ttf"),
    // @ts-ignore
    "SFProText-SemiBold": require("../assets/fonts/SFProText-SemiBold.ttf"),
    // @ts-ignore
    "SFProText-Bold": require("../assets/fonts/SFProText-Bold.ttf"),

    // @ts-ignore
    "Inter-Light": require("../assets/fonts/Inter-Light.ttf"),
    // @ts-ignore
    "Inter-Normal": require("../assets/fonts/Inter-Regular.ttf"),
    // @ts-ignore
    "Inter-Medium": require("../assets/fonts/Inter-Medium.ttf"),
    // @ts-ignore
    "Inter-SemiBold": require("../assets/fonts/Inter-SemiBold.ttf"),
    // @ts-ignore
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),

    // @ts-ignore
    "Inter-Light": require("../assets/fonts/Inter-Light.ttf"),
    // @ts-ignore
    "Inter-Normal": require("../assets/fonts/Inter-Regular.ttf"),
    // @ts-ignore
    "Inter-Medium": require("../assets/fonts/Inter-Medium.ttf"),
    // @ts-ignore
    "Inter-SemiBold": require("../assets/fonts/Inter-SemiBold.ttf"),
    // @ts-ignore
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),

    // @ts-ignore
    "SFProDisplay-Light": require("../assets/fonts/SFProDisplay-Light.ttf"),
    // @ts-ignore
    "SFProDisplay-Normal": require("../assets/fonts/SFProDisplay-Regular.ttf"),
    // @ts-ignore
    "SFProDisplay-Medium": require("../assets/fonts/SFProDisplay-Medium.ttf"),
    // @ts-ignore
    "SFProDisplay-SemiBold": require("../assets/fonts/SFProDisplay-SemiBold.ttf"),
    // @ts-ignore
    "SFProDisplay-Bold": require("../assets/fonts/SFProDisplay-Bold.ttf"),
  });

  /*************************************************************** 
              useEffect to make sure fonts are loaded
  ***************************************************************/
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View className="w-full h-full" onLayout={onLayoutRootView}>
      <StatusBar
        backgroundColor='#FFFFFF'
        style="dark"
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
                className="font-outfitsemibold text-base text-cerulean underline">
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
                className="font-outfitsemibold text-base text-cerulean underline">
                  Done
                </Text>
              </TouchableOpacity>
              )
          }} />
        <Stack.Screen 
          name="pushNotificationSettings" 
          options={{
            title: 'Push Notification',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
              color: 'black',
              fontFamily: "Outfit-Bold"
            }
          }} />
        <Stack.Screen 
          name="emailSettings" 
          options={{
            title: 'Email',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 20,
              color: 'black',
              fontFamily: "Outfit-Bold"
            }
          }} />
        </Stack>
    </View>
  )
}

export default RootLayout;