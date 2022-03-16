import React, { useContext } from 'react'
import {Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import {Context as AuthorizationContext} from '../../context/AuthContext'
import LoginForm from '../../components/LogInForm'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignupScreen = ({ navigation }) => {
    const {state, signup } = useContext(AuthorizationContext)
    const { errorMessage } = state
    return (
        <SafeAreaView>
            <LoginForm 
            formTitle={'Welcome to PrEvac Sign Up to continue'}
            errorMessage={ errorMessage } 
            onSubmit={({ email, password })=> signup({ email, password }) } 
            buttonText= {'Sign Up' }
            />
        <TouchableOpacity onPress={()=> navigation.navigate('Signin')}>
         <Text style={ styles.text } > Already Have An Account? Click here for Sign Up</Text>
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

export default SignupScreen