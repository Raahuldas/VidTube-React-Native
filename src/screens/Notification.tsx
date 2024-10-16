import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from '../layouts/Layout'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamsList } from '../routes/Router'


type NotificationScreenProps = NativeStackScreenProps<RootStackParamsList,'Notification'>

export default function Notification({navigation}:NotificationScreenProps) {
  return (
    <Layout navigation={navigation} >
    <View>
        <Text>Notification</Text>
    </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
     
})