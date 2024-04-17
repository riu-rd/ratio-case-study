# Ratio Case Study

## **_Task_**: Exactly replicate the Figma wireframe into front-end code

### Frameworks Used

- React Native
- Tailwind CSS (NativeWind)
- Expo (Framework to build and test react native apps)

### Libraries Used

- expo-router - for routing and opening a blank page on notification click
- react-native-safe-area-context - to make sure that the full screen will be shown on any device
- react-native-screens
- expo-linking
- expo-constants
- expo-status-bar - to ensure that the device's status bar is

### Folder Definitions

- app - where the pages of the app are stored, in this case, Notification
- assets - contains the fonts and icons exported from the Figma wireframe
- components - Reusable react components
- constants - constant values such as exported icons and the data in the Figma wireframe

## Short Overview on How it was built

- Most of the elements are positioned using flexbox
- Uses Safe Area to cater to many devices
- Uses ScrollView for scalability and to ensure that all notifications will fit

#### In \_layout.jsx

- Before loading the view, all static fonts should be loaded first
- StatusBar is used to ensure that the status bar of the mobile device is visible
- Each Page or View is initialized using Stack

#### In index.jsx

- In the Figma Wireframe, there are different instances of notifications. All of them are stored in an array in the constants folder. The array is then mapped so that each element would return a NotificationItem component
- This is for scalability as only the constant array need to be modified to render more NotificationItem components

#### In components/NotificationItem.js

- accepts title, description, icon, and date, which are distinct notification item props as can be seen in the Figma wireframe

## How to Run
