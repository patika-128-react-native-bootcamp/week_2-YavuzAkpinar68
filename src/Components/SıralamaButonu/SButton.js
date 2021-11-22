import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./SButtonStyles";

const Sbutton = ({title, onPress}) => {
  return(
    <TouchableOpacity 
      onPress={onPress}
      style={styles.sButton}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}
export default Sbutton