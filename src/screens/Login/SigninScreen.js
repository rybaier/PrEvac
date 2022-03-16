import React, { useContext } from 'react'
import {Text, View, StyleSheet, } from 'react-native'
import LoginForm from '../../components/LogInForm'
import { Context as AuthorizationContext } from '../../context/AuthContext'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler'

const SigninScreen = ({ navigation }) => {
    const { state, signin, resetPassword } = useContext(AuthorizationContext)
    const { errorMessage } = state
    return (
        <SafeAreaView>
         <LoginForm 
         formTitle={'Welcome to PrEvac Sign In to continue'}
         errorMessage={ errorMessage } 
         onSubmit={({ email, password })=> signin({ email, password }) } 
         buttonText= {'Sign In' }
         />
         <TouchableOpacity onPress={()=> navigation.navigate('Signup')}>
         <Text style={ styles.text } > Need An Account? Click here for Sign Up</Text>
         </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        color: '#0000ff',
        marginTop: 15
    }
})

export default SigninScreen