import React from "react";
import { View, Text } from "react-native";

const UrunCard = ({item}) => {
  return(
    <View>
      <Text>{item.urun}</Text>
      <Text>{item.fiyat}</Text>
    </View>
    
  )
}
export default UrunCard