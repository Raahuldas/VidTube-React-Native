import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Layout from '../layouts/Layout'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'
import { RootStackParamsList } from '../routes/Router'

type ChannelScreenProps = NativeStackScreenProps<RootStackParamsList,'Channel'>

export default function Channel({navigation}:ChannelScreenProps) {
  
  return (
    <Layout navigation={navigation}>
    <View>
      <Text>Channel</Text>
    </View>
    </Layout>
  )
}

const styles = StyleSheet.create({})