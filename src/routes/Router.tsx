import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Channel from '../screens/Channel'
import { NavigationContainer } from '@react-navigation/native'
import Notification from '../screens/Notification'
import VideoPlayer from '../screens/VideoPlayer'


export type RootStackParamsList = {
  Home: undefined,
  Channel: undefined,
  Notification: undefined,
  VideoPlayer: {video: any}
}

const Stack = createNativeStackNavigator<RootStackParamsList>();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{ headerTitle: 'VidTube' }} />
        <Stack.Screen name='Channel' component={Channel} options={{ headerTitle: 'Channel' }} />
        <Stack.Screen name='Notification' component={Notification} options={{ headerTitle: 'Notification' }} />
        <Stack.Screen name='VideoPlayer' component={VideoPlayer} options={{ headerShown:false }} />
      </Stack.Navigator>
      
    </NavigationContainer>
  )
}
