import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Sbutton = ({title}) => {
  return(
    <TouchableOpacity>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}
export default Sbutton