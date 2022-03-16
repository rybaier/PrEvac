import React, { useContext, useEffect, useState } from 'react'
import {Text, View, StyleSheet, FlatList, TouchableOpacity, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Context as ItemContext } from '../../context/GrabItemContext'
import { FontAwesome } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'; 


const EvacGrabItemScreen = ({ navigation }) => {
    const { state, getItems } = useContext(ItemContext)
  const [loading, setLoading] = useState(false)
  const [checked, setChecked] = useState(null)

    
  useEffect(() => {
      setLoading(true)
      getItems()
      setLoading(false)
    }, [])
 
    return (
      <View style={styles.bg}>
          <Text style={ styles.title }> One tap to check off, long tap to uncheck</Text>
          {loading === false && state.length > 0 ?
          <FlatList style={styles.list} data = { state.sort((a,b) => a.priority.localeCompare(b.priority) ) } keyExtractor = { (item) => item._id}  renderItem ={ ({item}) => {
                        return(
                                <Pressable style ={[styles.row, {backgroundColor: checked === item._id ? 'yellow' : null }]}
                                 onPress = {() => setChecked(item._id)} 
                                onLongPress = {() => setChecked(null)}>
                                    <Text style= {styles.text}> { item.priority }</Text>
                                    <Text style= {styles.text}> { item.name }</Text>
                                    <TouchableOpacity onPress={ () => navigation.navigate('ItemDetail', { id: item._id, item: item}) }>
                                        <Ionicons name= 'information-circle-outline' style={ styles.icon } />
                                    </TouchableOpacity>
                                 
                              </Pressable>
                    
                  )
              }}/> : <Text style={ styles.text }> Add Items...For list access</Text>}
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
        flexWrap:'wrap',
        
    },
    icon: {
        fontSize: 30
    },
    checked:{
        backgroundColor: 'yellow'

    },
    text:{
      fontSize: 18,
      color: 'red'
    },
    title:{
        alignSelf:'center',
        fontSize: 18,
        
    },
    list:{
        backgroundColor: '#deb887'
    },
    bg:{
        backgroundColor: '#deb887'
    }


})

export default EvacGrabItemScreen