import React, { useState } from "react";
import { Text, Button, Input } from "react-native-elements";
import { View, StyleSheet } from "react-native";
import BasicStyledSpace from "./BasicStyleSpace";

const MeetingPlaceForm = ({ formTitle, errorMessage, onSubmit, buttonText, initialValues }) => {
const [name, setName] =useState(initialValues.name)
const [compass_direction, setCompass_Direction] = useState(initialValues.compass_direction)
const [address, setAddress] = useState(initialValues.address)

  return (
    <View>
      <BasicStyledSpace>
        <Text h2> { formTitle } </Text>
      </BasicStyledSpace>
      <Input
        label="Name"
        value={ name }
        onChangeText={ setName }
        autoCapitalize="none"
        autoCorrect={ false }
      />
        <BasicStyledSpace />
         <Input
        label="Compass Direction"
        placeholder="North South East or West"
        value={ compass_direction }
        onChangeText={ setCompass_Direction }
        autoCapitalize="none"
        autoCorrect={false}
      />
        <BasicStyledSpace />
         <Input
        label="Address"
        value={ address }
        onChangeText={setAddress}
        autoCapitalize="none"
        autoCorrect={false}
      />
        <BasicStyledSpace />
      <BasicStyledSpace>
        { errorMessage ? (
          <Text style={styles.error}> { errorMessage }</Text>
        ) : null }
          <Button title={ buttonText } onPress={() => 
            onSubmit({ name, compass_direction, address })} />
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

export default MeetingPlaceForm;
