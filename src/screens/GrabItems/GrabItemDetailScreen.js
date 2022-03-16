import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Context as ItemContext } from "../../context/GrabItemContext";
import BasicStyledSpace from "../../components/BasicStyleSpace";
import { FontAwesome, EvilIcons } from '@expo/vector-icons'

const GrabItemDetailScreen = ({ navigation, route }) => {
  const { state, deleteItems, getItems } = useContext(ItemContext);
  const id = route.params.id;
  const item = route.params.item;
  return (
    <ScrollView style={styles.container}>
      <BasicStyledSpace />
      <Text style={styles.priority}> Priority: {item.priority}</Text>
      <BasicStyledSpace />
      <Text style={styles.name}> {item.name}</Text>
      <BasicStyledSpace />
      <Text style={styles.location}> Where to Find:</Text>
      <Text style={styles.location}>{item.location}</Text>
      <BasicStyledSpace />
      <Text style={styles.instruction}> How to get to it: </Text>
      <Text style={styles.instruction}> {item.instructions}</Text>
      <BasicStyledSpace />
      <View style={styles.row}>
        <TouchableOpacity onPress={() => {deleteItems(item._id), getItems()}}>
          <FontAwesome name="trash-o" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('EditItem', {item: item})}>
            <EvilIcons name="pencil" style={styles.icon} />
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#008000",
  },
  priority: {
    fontSize: 50,
    color: "#ffffff",
    alignSelf: "center",
  },
  location: {
    fontSize: 50,
    alignSelf: "center",
    color: "#ffffff",
  },
  name: {
    fontSize: 40,
    alignSelf: "center",
    color: "#ffffff",
  },
  instruction: {
    fontSize: 35,
    alignSelf: "center",
    color: "#ffffff",
  },
  icon: {
    fontSize: 50,
    color: '#ffffff'
  },
  row: {
    flexDirection: 'row',
    justifyContent: "space-evenly"
  }
});

export default GrabItemDetailScreen;
