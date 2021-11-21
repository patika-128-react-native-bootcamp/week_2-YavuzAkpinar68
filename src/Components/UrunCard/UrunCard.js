import React from "react";
import { View, Text } from "react-native";

const UrunCard = ({urun, fiyat}) => {
  return(
    <View>
      <Text>{urun}</Text>
      <Text>{fiyat}</Text>
    </View>
    
  )
}
export default UrunCard