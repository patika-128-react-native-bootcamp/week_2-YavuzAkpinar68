import React, { useEffect, useState } from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Input from './Components/Input/Input';
import Sbutton from './Components/Buttons/SButton';
import ProductCard from './Components/ProductCard/ProductCard';



const App = () => {
  const [product, setProduct] = useState("")
  const [price, setPrice] = useState()
  const [data, setData] = useState([])
  const [click, setClick] = useState(true)
  const [date, setDate] = useState()
  /*const [dateClick, setDateClick] = useState(false)*/

  
  const addProduct = () => {
    product ? price ?
    setData([{product:product, price:price, date:date},...data]):
    alert("Urun veya Fiyat özellikleri boş bırakılamaz"):
    alert("Urun veya Fiyat özellikleri boş bırakılamaz")
    setPrice()
    setProduct("")
    setDate(new Date().toLocaleString())
  }

  /*if (click && dateClick == false) {
    data.sort((a,b) => a.price - b.price)
  }else if (click && dateClick) {
    data.sort((a,b) => a.date.localeCompare(b.date))
  }else if (click == false && dateClick) {
    data.sort((a,b) => a.date.localeCompare(b.date))
  }
  else if (click == false && dateClick == false) {
    data.sort((a,b) => a.price - b.price)
  }*/

  const decreasing = () => {
    /*setClick(true)
    setDateClick(false)*/
    data.sort((a,b) => a.price - b.price)

  }
  const growing = () => {
    /*setClick(false)*/
    /*setDateClick(false)*/
    data.sort((a,b) => a.price - b.price).reverse
 }
 const history = () => {
    /*setClick(true)
    setDateClick(true)*/
    data.sort((a,b) => a.date.localeCompare(b.date))

 }
 useEffect(() => (setDate(new Date().toLocaleString())) ,[])

 
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.sButtonView}>
        <Sbutton title="Artan" onPress={growing}/>
        <Sbutton title="Azalan" onPress={decreasing}/>
        <Sbutton title="Tarih" onPress={history}/>
      </View>
      <View style={styles.flatListView}>
        <FlatList 
          data={data} 
          renderItem={({item}) => <ProductCard item={item}/>}
          contentContainerStyle={click?{flexDirection:"column"}:{flexDirection:"column-reverse"}}/>
      </View>
      <View style={styles.inputView}>
        <Input 
          placeholder="Urun..." 
          title="Urun Adı" 
          value={product} 
          onChangeText={setProduct}></Input>
        <Input 
          placeholder="Fiyat..." 
          title="Fiyat" 
          value={price} 
          onChangeText={setPrice}></Input>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={addProduct}> 
          <Text style={styles.buttonText}>Ekle</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
  buttonContainer:{
    borderRadius:10, 
    margin:5, 
    backgroundColor:"teal",
    padding:10,
    alignItems:"center"
  },
  buttonText:{
    fontSize:15
  },
  sButtonView:{
    flexDirection:"row",
    justifyContent:"space-between",
    flex:1
  },
  flatListView:{
    flex:6
  },
  container:{
    flex:1
  },
  inputView:{
    flex:3,
  }
})
