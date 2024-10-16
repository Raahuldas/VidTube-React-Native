import { Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Router from './routes/Router'


export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Router />
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'red'
  },
})