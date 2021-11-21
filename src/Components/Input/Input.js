import React, { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import styles from "./InputStyles";

const Input = ({placeholder, title}) => {
  const [input, setInput] = useState()

  return(
    <View style={styles.container}>
      <Text>{title}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={input}
        onChangeText={setInput}></TextInput>
    </View>
  )
}
export default Input