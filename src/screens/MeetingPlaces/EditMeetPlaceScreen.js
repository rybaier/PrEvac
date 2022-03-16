import React, { useContext } from 'react'
import {Text, View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MeetingPlaceForm from '../../components/MeetingPlaceForm'
import { Context as MeetingPlaceContext } from '../../context/MeetingPlaceContext'

const EditMeetPlaceScreen = ({ navigation, route }) => {
    const { state, editPlaces } = useContext(MeetingPlaceContext)
    const place = route.params.place
    const id = place._id
   
    
    return (
        <SafeAreaView>
            <MeetingPlaceForm formTitle={'Edit a Meeting Place'} errorMessage={null} 
            initialValues={{name: place.name, compass_direction: place.compass_direction, address: place.address}}
            onSubmit={({name, compassD, address })=> editPlaces({id, name, compassD, address })} buttonText={'Save Meeting Place'}/>
         </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

export default EditMeetPlaceScreen