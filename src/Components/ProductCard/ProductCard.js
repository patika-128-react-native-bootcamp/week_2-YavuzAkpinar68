import React from "react";
import { View, Text } from "react-native";
import styles from "./ProductCardstyles";

const ProductCard = ({item}) => {
  return(
    <View style={styles.cardContainer}>
      <Text style={styles.text}>{item.product}</Text>
      <Text style={styles.text}>{item.price}  TL</Text>
    </View>
    
  )
}
export default ProductCard