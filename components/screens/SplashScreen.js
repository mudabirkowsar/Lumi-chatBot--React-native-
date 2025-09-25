import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

export default function SplashScreen({ navigation }) {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("DrawerScreen");
        }, 2000);
    }, [])

    return (
        <View>
            <Text>SplashScreen</Text>
        </View>
    )
}