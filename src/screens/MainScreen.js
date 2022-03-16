import React, {useContext} from 'react'
import {Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Button } from 'react-native-elements'
import { Context as AuthorizationContext } from '../context/AuthContext'
import { MaterialIcons, FontAwesome5, Ionicons, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'; 
import BasicStyledSpace from '../components/BasicStyleSpace'

const MainScreen = ( { navigation }) => {
    const { state, signout } = useContext(AuthorizationContext)
    
    
    return (
        <ScrollView style={styles.container}>
           <Text style= {styles.title}> Evac-Act</Text>
           <Text style= {styles.tagline}> Stay Calm and Exectute </Text>
            <BasicStyledSpace />
            <BasicStyledSpace />
            <View style={ styles.row }>
                <TouchableOpacity style={ styles.column } onPress={() => navigation.navigate('MeetingPlaces') }>
                    <MaterialIcons name="not-listed-location" size={120} color="black" /> 
                    <Text style={ styles.text }>Meeting Places</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ styles.column }onPress={() => navigation.navigate('EvacGrabItem') }>
                    <FontAwesome5 name="clipboard-list" size={120} color="black" />
                    <Text style={ styles.text }>Grab Items</Text>
                </TouchableOpacity>
            </View>
            <BasicStyledSpace />
            <BasicStyledSpace />
            <View style={ styles.row }>
                <TouchableOpacity style={ styles.column } onPress={() => navigation.navigate('About') }>
                    <Ionicons name="md-information-circle" size={120} color="black" />
                    <Text style={ styles.text }>About</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ styles.column }onPress={() => navigation.navigate('HowToGuide') }>
                    <AntDesign name="exclamationcircle" size={120} color="black" /> 
                    <Text style={ styles.text }>Walkthrough</Text>
                </TouchableOpacity>
            </View>
            <Button title={'Sign Out'} onPress={signout} style={ styles.button }/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#6495ed',
        
    },  
    row:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        alignContent: 'center',
        fontSize: 52       
    },
    column:{
        flexDirection: 'column',
        alignItems:'center'
    },
    text: {
        fontSize: 18,
        color: '#0000ff',
        marginTop: 15
    },
    button: {
        alignSelf: 'center',
        marginTop: 75,
    },
    title: {
        fontSize: 44, 
        alignSelf: 'center',
        color: '#dc143c'
    },
    tagline: {
        fontSize: 24, 
        alignSelf: 'center',
        color: '#dc143c'
    }
})

export default MainScreen

{/* <MaterialIcons name="not-listed-location" size={24} color="black" /> 
<FontAwesome5 name="clipboard-list" size={24} color="black" />
<Ionicons name="md-information-circle" size={24} color="black" />
<AntDesign name="exclamationcircle" size={24} color="black" /> 
<MaterialCommunityIcons name="map-marker-question-outline" size={24} color="black" /> */}