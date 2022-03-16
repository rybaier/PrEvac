
import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import BasicStyledSpace from "../../components/BasicStyleSpace";
import { Context as MeetingPlaceContext } from "../../context/MeetingPlaceContext";
import { EvilIcons, FontAwesome } from '@expo/vector-icons'

const MeetingPlaceDetailScreen = ({ navigation, route }) => {
  const { deletePlaces, getPlaces } = useContext(MeetingPlaceContext)
  const id = route.params.id
  const place = route.params.place
 
  return (
    <View style={ styles.container }>
        <BasicStyledSpace />
             <Text style={ styles.name }>{ place.name }</Text>
            <BasicStyledSpace />
           <Text style={ styles.direction }> { place.compass_direction }</Text>
            <BasicStyledSpace />
            <Text style={styles.address }> { place.address }</Text>
            <BasicStyledSpace />
            <View style={styles.row}>
        <TouchableOpacity onPress={() => {deletePlaces(place._id), getPlaces()}}>
          <FontAwesome name="trash-o" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('EditPlace', {place: place})}>
            <EvilIcons name="pencil" style={styles.icon} />
          </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#008000',
  },
  direction:{
    fontSize: 50,
    alignSelf: "center",
    color: '#ffffff'
  },
  name:{
    fontSize: 40,
    alignSelf: "center",
    color: '#ffffff'

  },
  address: {
    fontSize: 35,
    alignSelf: "center",
    color: '#ffffff'

  },  icon: {
    fontSize: 50,
    color: '#ffffff'
  },
  row: {
    flexDirection: 'row',
    justifyContent: "space-between",
    margin: 100
  }

});

export default MeetingPlaceDetailScreen;