import React, { useContext, useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MeetingPlaceForm from "../../components/MeetingPlaceForm";
import { Context as MeetingPlaceContext } from "../../context/MeetingPlaceContext";
import { Ionicons, FontAwesome } from '@expo/vector-icons'
const MeetingPlacesScreen = ({ navigation }) => {
  const { state, deletePlaces, getPlaces } = useContext(MeetingPlaceContext)
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
      setLoading(true)
      getPlaces()
      setLoading(false)
    }, [])
 
    return (
      <View>
          {loading === false && state.length > 0 ?
          <FlatList  data = { state } keyExtractor = { (item) => item._id}  renderItem ={ ({item}) => {
                        return(
                          <View style={ styles.row }>
                              <Text style= {styles.text}> { item.priority }</Text>
                              <Text style= {styles.text}> { item.name }</Text>
                              <TouchableOpacity onPress={ () => navigation.navigate('PlaceDetail', { id: item._id, place: item}) }>
                                  <Ionicons name= 'information-circle-outline' style={ styles.icon } />
                              </TouchableOpacity>
                          
                          </View>
                    
                  )
              }}/> : <Text style={ styles.text }> Add Places...For list access</Text>}
    </View>   
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'grey',
        
    },
    icon: {
        fontSize: 30
    },
    checked:{
        textDecorationLine: 'line-through', 
        textDecorationStyle: 'solid'
    },
    text:{
      fontSize: 25,
      color: 'red'
    }
})
export default MeetingPlacesScreen;
