import React from 'react'
import { View, Text, Button } from 'react-native'

const Home = ({ navigation }) => {
    return (
        <View>
            <Button onPress={() => navigation.navigate('HomeTwo')} title="HomeTwo" />
        </View>
    )
}

export { Home }