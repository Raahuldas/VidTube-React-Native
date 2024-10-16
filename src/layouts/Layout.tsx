import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import Icons from "react-native-vector-icons/FontAwesome5";


export default function Layout({children, navigation}: {children: React.ReactNode, navigation:any}) {
    return (
        <View style={styles.container}>

            <View style={styles.content}>
        {children}
            </View>

        <View style={styles.navbar}>
            <Pressable style={styles.navbarButton} onPress={()=>navigation.navigate('Home')}>
                <Text> <Icons name='home' size={15} /> </Text>
            </Pressable>
            <Pressable style={styles.navbarButton} onPress={()=>navigation.navigate('Channel')} >
                <Text> <Icons name='stream' size={15} /> </Text>
            </Pressable>
            <Pressable style={styles.navbarButton} onPress={()=>navigation.navigate('Notification')} >
                <Text> <Icons name='heart' size={15} /> </Text>
            </Pressable >
            <Pressable style={styles.navbarButton}>
                <Text> <Icons name='user-alt' size={15} /> </Text>
            </Pressable>
        </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    content:{
        flex:1
    }
    ,navbar: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row',

    },
    navbarButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})