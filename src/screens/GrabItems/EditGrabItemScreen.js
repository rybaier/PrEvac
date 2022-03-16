import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import ItemForm from "../../components/ItemForm";
import { Context as ItemContext } from "../../context/GrabItemContext";

const EditGrabItemScreen = ({ navigation, route }) => {
  const { editItems } = useContext(ItemContext)
    const item = route.params.item
    const id = item._id
    
  return (
    <View>
      <ItemForm 
        formTitle={"Update Item"}
        errorMessage={null}
        initialValues= {{priority: item.priority, name: item.name, location: item.location, instructions: item.instructions}}
        onSubmit={( {priority, name, location, instructions }) =>
          editItems({id, priority, name, location, instructions })
        }
        buttonText={'Save Grab Item'}/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default EditGrabItemScreen;