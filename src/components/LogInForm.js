import React, { useState } from "react";
import { Text, Button, Input } from "react-native-elements";
import { View, StyleSheet } from "react-native";
import BasicStyledSpace from "./BasicStyleSpace";

const LoginForm = ({ formTitle, errorMessage, onSubmit, buttonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <BasicStyledSpace>
        <Text h2> { formTitle } </Text>
      </BasicStyledSpace>
      <Input
        label="Email"
        value={ email }
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <BasicStyledSpace />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      <BasicStyledSpace>
        { errorMessage ? (
          <Text style={styles.error}> { errorMessage }</Text>
        ) : null }
          <Button title={ buttonText } onPress={() => onSubmit({ email, password })} />
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

export default LoginForm;
