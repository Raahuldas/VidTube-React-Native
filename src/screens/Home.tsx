import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import Card from '../components/Card'
import Separator from '../components/Separator'
import allVideos from '../constants/allVideos';
import Layout from '../layouts/Layout';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../routes/Router';

type HomeScreenProps = NativeStackScreenProps<RootStackParamsList, 'Home'>

export default function Home({ navigation }: HomeScreenProps) {

  const handlePlayVideo = () => {
    // navigation.navigate('VideoPlayer')
  }
  return (
    <Layout navigation={navigation}>
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <Separator />}
          data={allVideos}
          renderItem={({ item }) => (
            <Pressable onPress={
              ()=>navigation.navigate('VideoPlayer',{video: item})
            }>
            <Card video={item} />
            </Pressable>
          )}
        />
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'red'
  }
})