import React from "react";
import { View, Text } from "react-native";
import styles from "./UrunCardstyles";

const UrunCard = ({item}) => {
  return(
    <View style={styles.cardContainer}>
      <Text style={styles.text}>{item.urun}</Text>
      <Text style={styles.text}>{item.fiyat}</Text>
    </View>
    
  )
}
export default UrunCard