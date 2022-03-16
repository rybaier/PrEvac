import React from 'react'
import createDataContext from './createDataContext'
import evacAPI from '../api/evacAPI'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RootNavigation from '../RootNavigation'

const navigate = RootNavigation.navigate

const MeetingPlaceReducer = (state, action) => {
    switch (action.type){
        case 'get_places':
            return action.payload
        case 'edit_place':
            return state.map((place) => {
                return place.id === action.payload.id ? action.payload : place
            })
        default:
            return state
    }
}    

const getPlaces = dispatch => async () => {
    console.log('get')
    const response = await evacAPI.get('/meetingplaces')
    dispatch({type: 'get_places', payload: response.data })
}

const createPlaces = dispatch => async ({ name, compass_direction, address}) => {
    console.log( name, compass_direction, address )
    await evacAPI.post('/meetingplaces', { name, compass_direction, address } )
    navigate('MeetingPlaces')
}

const deletePlaces = dispatch => async (id) => {
 console.log('delete')
 await evacAPI.delete(`/meetingplaces/${id}`)
 navigate('Home')
}

const editPlaces = dispatch => async ({id, name, compass_direction, address}) => {
    console.log('edit', {id, name, compass_direction, address})
    await evacAPI.put(`/meetingplaces/${id}`, { name, compass_direction, address })
    dispatch ({type: 'edit_place', payload: {id, name, compass_direction, address}})
    navigate('MeetingPlaces')
}

export const { Provider, Context} = createDataContext(MeetingPlaceReducer, 
    { getPlaces, createPlaces, deletePlaces, editPlaces}, {})