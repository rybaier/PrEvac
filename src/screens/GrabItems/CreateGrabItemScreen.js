import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import ItemForm from "../../components/ItemForm";
import { Context as ItemContext } from "../../context/GrabItemContext";

const CreateGrabItemScreen = () => {
  const { state, createItems } = useContext(ItemContext)

  return (
    <View>
      <ItemForm
        formTitle={"Add Item to Grab List"}
        errorMessage={null}
        initialValues= {{priority: '', name: '', location: '', instructions:''}}
        onSubmit={( priority, name, location, instructions ) =>
          createItems( priority, name, location, instructions )
        }
        buttonText={'Save Grab Item'}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateGrabItemScreen;
