import React, { useContext, useEffect } from 'react'
import {Text, View, StyleSheet, Button } from 'react-native'
import { Context as AuthorizationContext } from '../../context/AuthContext'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Context as ItemContext } from '../../context/GrabItemContext'

const WelcomeLoginCredCheckScreen = ({ navigation }) => {
    const { stillLoggedIn } = useContext(AuthorizationContext)

    useEffect(()=>{
        stillLoggedIn()
    }, [])
    return (
        null
    )
}

const styles = StyleSheet.create({

})

export default WelcomeLoginCredCheckScreen