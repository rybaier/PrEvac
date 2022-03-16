import React from 'react'
import {Text, View, StyleSheet, Button } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import BasicStyledSpace from '../components/BasicStyleSpace'
import { FontAwesome } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const AboutScreen = ({ navigation }) => {
    return (
        
        <ScrollView >
            <BasicStyledSpace />
            <BasicStyledSpace />
            <Text style={ styles.about }>Welcome to PrEvac this app is designed to help ease some of the 
                stress that is involved when the call to evacuate your home is made. </Text>
                <Text style={ styles.about }>There are 2 main parts to this app</Text>
                <BasicStyledSpace />
                <Text style={ styles.about }>1. Create a list of Items that you would want to grab if evacuation was called. </Text>
                <Text style={ styles.about }>  - You will give each item a priority number 1 - 5 with 1 being ABSOLUTE MUST GRAB. </Text>
                <Text style={ styles.about }>  - Along with priority you will give a name, location in your house, and any instructions
                        that go along with that item.
                </Text>
                <BasicStyledSpace />
                <Text style={ styles.about }>2. Create a List of Meeting places. Places where you can gather with friends or other family
                    when evacuation is called. It is HIGHLY recommended that you choose at least one for each compass direction.
                    North, South, East and West. 
                </Text >
                <BasicStyledSpace />
                <Text style={ styles.about }> By using this app, and it allows you to take time and consider what you really want to Save
                    Before the stress of Evacuation happens. This stress is natural, so rather than trying to decide 
                    what to grab you can open this app and go down your checklist. Grabbing what you can by priority order
                    based on the amount of time you have. 
                </Text>
                <View style={ styles.row }>
                <TouchableOpacity style={ styles.column } onPress={() => navigation.navigate('Signin') }>
                <MaterialIcons name="account-circle" size={50} color="black" />                     
                <Text style={ styles.text }>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={ styles.column }onPress={() => navigation.navigate('Signup') }>
                <MaterialCommunityIcons name="account-plus" size={50} color="black" /> 
                <Text style={ styles.text }>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    about:{
        fontSize: 18,
    },
    bg:{ 
        backgroundColor: '#808080'
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
})

export default AboutScreen