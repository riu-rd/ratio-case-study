import { View, Text, SafeAreaView, Switch, ScrollView } from 'react-native'
import React, { useState } from 'react'

const PushNotificationSettings = () => {
  const [allNotifications, setAllNotifications] = useState(false);
  const [newMatches, setNewMatches] = useState(false);
  const [newMessages, setNewMessages] = useState(false);
  const [newLikes, setNewLikes] = useState(false);
  const [announcements, setAnnouncements] = useState(false);

  return (
    <SafeAreaView className="bg-primary w-full h-full justify-start">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="w-full justify-start items-center">

        <View className="w-full flex flex-row justify-between items-center py-1 px-5">
          <Text className="font-outfitbold text-sm">
            All Notifications
          </Text>
          <View className="flex flex-row justify-center items-center gap-2">
            <Switch 
              trackColor={{false: '#919191', true: '#2EA7D3'}}
              thumbColor={allNotifications ? '#ffffff' : '#ffffff'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setAllNotifications(previousState => !previousState)}
              value={allNotifications}
              style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
            />
          </View>
        </View>

        <View className="w-full h-[1px] bg-colorline" />

        <View className="w-full flex flex-row justify-between items-center py-1 px-5">
          <Text className="font-outfitbold text-sm">
            New Matches
          </Text>
          <View className="flex flex-row justify-center items-center gap-2">
            <Switch 
              trackColor={{false: '#919191', true: '#2EA7D3'}}
              thumbColor={newMatches ? '#ffffff' : '#ffffff'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setNewMatches(previousState => !previousState)}
              value={newMatches}
              style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
            />
          </View>
        </View>

        <View className="w-full h-[1px] bg-colorline" />

        <View className="w-full flex flex-row justify-between items-center py-1 px-5">
          <Text className="font-outfitbold text-sm">
            New Messages
          </Text>
          <View className="flex flex-row justify-center items-center gap-2">
            <Switch 
              trackColor={{false: '#919191', true: '#2EA7D3'}}
              thumbColor={newMessages ? '#ffffff' : '#ffffff'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setNewMessages(previousState => !previousState)}
              value={newMessages}
              style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
            />
          </View>
        </View>

        <View className="w-full h-[1px] bg-colorline" />

        <View className="w-full flex flex-row justify-between items-center py-1 px-5">
          <Text className="font-outfitbold text-sm">
            New Likes
          </Text>
          <View className="flex flex-row justify-center items-center gap-2">
            <Switch 
              trackColor={{false: '#919191', true: '#2EA7D3'}}
              thumbColor={newLikes ? '#ffffff' : '#ffffff'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setNewLikes(previousState => !previousState)}
              value={newLikes}
              style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
            />
          </View>
        </View>

        <View className="w-full h-[1px] bg-colorline" />

        <View className="w-full flex flex-row justify-between items-center py-1 px-5">
          <Text className="font-outfitbold text-sm">
            Announcements on Ratio
          </Text>
          <View className="flex flex-row justify-center items-center gap-2">
            <Switch 
              trackColor={{false: '#919191', true: '#2EA7D3'}}
              thumbColor={announcements ? '#ffffff' : '#ffffff'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setAnnouncements(previousState => !previousState)}
              value={announcements}
              style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
            />
          </View>
        </View>

        <View className="w-full h-[1px] bg-colorline" />

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default PushNotificationSettings