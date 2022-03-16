import React, { useState } from "react";
import { Text, Button, Input } from "react-native-elements";
import { View, StyleSheet } from "react-native";
import BasicStyledSpace from "./BasicStyleSpace";

const ItemForm = ({ formTitle, errorMessage, onSubmit, buttonText, initialValues }) => {
const [priority, setPriority] = useState(initialValues.priority)
const [name, setName] =useState(initialValues.name)
const [location, setLocation] = useState(initialValues.location)
const [instructions, setInstructions] = useState(initialValues.instructions)

  return (
    <View>
      <BasicStyledSpace>
        <Text h2> { formTitle } </Text>
      </BasicStyledSpace>
      <Input
        label="Item Priority"
        value={ priority }
        placeholder={'1-5'}
        onChangeText={setPriority}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <BasicStyledSpace />
      <Input
        label="Name of Item"
        value={ name }
        onChangeText={ setName }
        autoCapitalize="none"
        autoCorrect={ false }
      />
        <BasicStyledSpace />
         <Input
        label="Location of Item"
        value={ location }
        onChangeText={ setLocation }
        autoCapitalize="none"
        autoCorrect={false}
      />
        <BasicStyledSpace />
         <Input
        label="Instructions for Item"
        value={ instructions }
        onChangeText={setInstructions}
        autoCapitalize="none"
        autoCorrect={false}
      />
        <BasicStyledSpace />
      <BasicStyledSpace>
        { errorMessage ? (
          <Text style={styles.error}> { errorMessage }</Text>
        ) : null }
          <Button title={ buttonText } onPress={() => 
            onSubmit({ priority, name, location, instructions})} />
      </BasicStyledSpace>
    </View>
  );
};

const styles = StyleSheet.create({
    error:{
        fontSize: 16,
        color:'red',
        margin: 15
    }
});

export default ItemForm;
