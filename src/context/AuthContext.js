import React from 'react'
import createDataContext from './createDataContext'
import evacAPI from '../api/evacAPI'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RootNavigation from '../RootNavigation'

const navigate = RootNavigation.navigate

const AuthorizationReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload}
        case 'signin':
            return {errorMessage:'', token: action.payload}
        case 'clear_error_message':
            return {...state, errorMessage: '' }
            case 'signout':
                return {token: null, errorMessage: ''}
        case 'reset_password':
            return{...state, password: action.payload}
        default:
            return state
    }
}

const stillLoggedIn = dispatch => async () => {
    const token = await AsyncStorage.getItem('token')
    if (token){
        dispatch ({type:'signin', payload: token })
        navigate('LoggedIn')
    } else{
        navigate('About')
    }
}
const clearErrorMessage = (dispatch) => () => {
    dispatch({type: 'clear_error_message'})
}

const signup = (dispatch) => async ({ email, password }) => {
        try {
            const response = await evacAPI.post('/signup', {email, password})
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({ type: 'signin', payload: response.data.token})
            navigate('LoggedIn', )
        } catch (err) {
            console.log(err)
            dispatch({type:'add_error', payload: 'Already have email in database use Sign In instead'})
        }
    }


const signin = (dispatch)  => async ({ email, password }) => {
    try {
        const response = await evacAPI.post('/signin', {email, password})
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({ type: 'signin', payload: response.data.token})
        navigate('LoggedIn')
    } catch (err) {
        console.log(err)
        dispatch({type:'add_error', payload: 'invalid email or password'})
    }
}

const signout = (dispatch) => async () => {
    await AsyncStorage.removeItem('token')
    dispatch({type: 'signout' })
    navigate('About')
        //sign out
    }
const resetPassword = (dispatch)  => async ({ email, password }) => {
    try {
        const response = await evacAPI.put('/signin', {email, password})
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({ type: 'signin', payload: response.data.token})
        navigate('LoggedIn')
    } catch (err) {
        console.log(err)
        dispatch({type:'add_error', payload: 'invalid email'})
    }
}
export const { Provider, Context } = createDataContext(AuthorizationReducer, 
    {signin, signout, stillLoggedIn, signup, clearErrorMessage, resetPassword}, {isSignedIn: false})