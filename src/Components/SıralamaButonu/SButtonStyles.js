import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  sButton:{
    backgroundColor:"silver",
    width:Dimensions.get("screen").width /4,
    margin:10,
    borderRadius:10,
    padding:10,
    alignItems:"center"
  }
})
export default styles