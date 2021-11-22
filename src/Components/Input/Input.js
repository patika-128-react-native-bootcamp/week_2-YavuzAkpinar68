import React, { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import styles from "./InputStyles";

const Input = ({placeholder, title, onChangeText, value}) => {

  return(
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}></TextInput>
    </View>
  )
}
export default Input