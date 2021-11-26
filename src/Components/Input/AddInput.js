import React, {useState, useEffect} from "react";
import { View } from "react-native";
import AddButton from "../Buttons/AddButton";
import Input from "./Input";

const AddInput = ({sendData}) => {
  const [product, setProduct] = useState("")
  const [price, setPrice] = useState()
  const [date, setDate] = useState()
  

  const addProduct = () => {
    product ? price ? sendData(product, price, date) :
    alert("Ürün adı veya Fiyat bölümleri boş bırakılamaz"):
    alert("Ürün adı veya Fiyat bölümleri boş bırakılamaz")
    handleState()
  }
  const handleState = () => {
    setPrice()
    setProduct("")
    setDate(new Date().toLocaleString())
  }
  //With this use useEffect we have a start time data.This data is replace the first products date.
  //I used it otherwise the first product's date info returns undefined
  useEffect(() => (setDate(new Date().toLocaleString())) ,[])

  return(
    <View>
      <Input 
        placeholder="Ürün Adı..." 
        title="Ürün Adı" 
        value={product} 
        onChangeText={setProduct}
        keyboard="default"/>
      <Input 
        placeholder="Fiyat..." 
        title="Fiyat" 
        value={price} 
        onChangeText={setPrice}
        keyboard="numeric"/>
      <AddButton onPress={addProduct}/>
    </View>
  )
}
export default AddInput