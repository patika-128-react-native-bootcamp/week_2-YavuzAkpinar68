import React ,{useState} from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./AddButtonStyle"

const AddButton = ({onPress}) => {
 


  return(
    <TouchableOpacity
          style={styles.buttonContainer}
          onPress={onPress}> 
          <Text style={styles.buttonText}>Ekle</Text>
        </TouchableOpacity>

  )
}
export default AddButton