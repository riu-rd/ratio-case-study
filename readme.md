# Ratio Case Study

## **_Task_**: Exactly replicate the Figma wireframe into full-stack code

### Frameworks Used for FRONTEND

- React Native
- Tailwind CSS (NativeWind)
- Expo (Framework to build and test react native apps)

### Frameworks Used for BACKEND

- Node.js
- Express.js

### Libraries and Tools Used

- expo-router - for routing and opening a blank page on notification click
- react-native-safe-area-context - to make sure that the full screen will be shown on any device
- react-native-screens
- expo-linking
- expo-constants - to connect expo app with the local machine
- expo-status-bar - to ensure that the device's status bar is appropriate
- axios - for performing fetch calls to the backend server
- nodemon - for easy express app configuration

### Folder Definitions for FRONTEND

- app - where the pages of the app are stored, in this case, Notification
- assets - contains the fonts and icons exported from the Figma wireframe
- components - Reusable react components
- constants - constant values such as exported icons

## How to Run the Full-Stack App

### Running the Backend Server FIRST

- go to the directory of the backend `/backend`
- Install Dependencies

```bash
npm install
```

- Start the Express App Server listening to port 5555

```bash
npm run dev
```

### Running the Frontend

- Install `Expo Go` from the Play Store or App Store
- Install dependencies

```bash
npm install
```

- Start the Application with Expo

```bash
npx expo start -c
```

- Scan the QR code provided using `Expo Go`
- The app should launch in your mobile device
