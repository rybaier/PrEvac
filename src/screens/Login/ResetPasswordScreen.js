import React, { useContext } from 'react'
import {Text, View, StyleSheet, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LoginForm from '../../components/LogInForm'
import { Context as AuthorizationContext } from '../../context/AuthContext'

const ResetPasswordScreen = ({ navigation }) => {
    const { state, resetPassword } = useContext(AuthorizationContext)
    return (
        <SafeAreaView>
         <LoginForm 
         formTitle={'Reset Your Password'}
         errorMessage={state.errorMessage} 
         onSubmit={({ email, password })=> resetPassword({ email, password }) } 
         buttonText= {'Reset Password' }
         />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

export default ResetPasswordScreen