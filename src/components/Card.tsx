import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Card({video}:any) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image
                    style={styles.img}
                    source={{
                        uri: video.image,
                    }} />
                <View style={styles.textContainer}>
                    <Text
                        style={styles.title}
                        numberOfLines={1}
                    >
                        {video?.title}
                    </Text>
                    {/* <Text
                        style={styles.desc}
                        numberOfLines={1}
                    >
                        Video Description
                    </Text> */}
                    <View style={styles.details}>
                        <Text style={styles.channelName}>{video.channel}</Text>
                        <Text style={styles.views}>{video.views}</Text>
                        <Text style={styles.createdAt}>{video.createdAt}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 1
    },
    content: {
        width: '100%',
        // backgroundColor: 'yellow',
        padding: 5,
        backgroundColor: '#EAF0F1',
        borderRadius: 3,
        // elevation: 3,
    },
    img: {
        height: 200,
    },
    textContainer: {
        // backgroundColor: 'green',
        marginTop: 2
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        marginVertical: 2
    },
    desc: {
        fontWeight: '400',
        paddingBottom: 6
    },
    details: {
        flexDirection: 'row'
    },
    channelName: {
        flex: 2,
        fontSize: 13
    },
    views: {
        flex: 1,
        fontSize: 13
    },
    createdAt: {
        flex: 1,
        fontSize: 13

    }
})