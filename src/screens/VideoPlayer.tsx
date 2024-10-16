import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Video from 'react-native-video'
import Layout from '../layouts/Layout'
import { RootStackParamsList } from '../routes/Router'
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types'

type VideoPlayerScreenProps = NativeStackScreenProps<RootStackParamsList, 'VideoPlayer'>

export default function VideoPlayer({ navigation, route }: VideoPlayerScreenProps) {

    return (
        <Layout navigation={navigation} >
            <View style={styles.container}>
                <Video
                    source={{ uri: route.params.video.videoUrl }}
                    style={styles.video}
                    controls
                    resizeMode='contain'
                    collapsable={false}
                    fullscreenAutorotate={true}
                />
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    video: {
        width: '100%',
        height: '100%',
    }
})