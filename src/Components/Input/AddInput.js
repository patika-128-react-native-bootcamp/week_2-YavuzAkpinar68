import React, {useState, useEffect} from "react";
import { View } from "react-native";
import AddButton from "../Buttons/AddButton";
import Input from "./Input";

const AddInput = ({sendData}) => {
  const [product, setProduct] = useState("")
  const [price, setPrice] = useState()
  const [data, setData] = useState([])
  const [date, setDate] = useState()
  sendData(data)

  const addProduct = () => {
    product ? price ?
    setData([{product:product, price:price, date:date},...data]):
    alert("Ürün adı veya Fiyat bölümleri boş bırakılamaz"):
    alert("Ürün adı veya Fiyat bölümleri boş bırakılamaz")
    setPrice()
    setProduct("")
    setDate(new Date().toLocaleString())
  }
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