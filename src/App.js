import React, { useEffect, useState } from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Input from './Components/Input/Input';
import Sbutton from './Components/Buttons/SButton';
import ProductCard from './Components/ProductCard/ProductCard';
import AddButton from './Components/Buttons/AddButton';
import AddInput from './Components/Input/AddInput';



const App = () => {
  const [products, setProducts] = useState([])
  const [render, setRender] = useState(0)

  
  

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
    setProducts(products.sort((a,b) => a.price - b.price).reverse())
    setRender(1)
  }
  const growing = () => {
    console.log("aaaaaaaa")
    /*setClick(false)*/
    /*setDateClick(false)*/
    products.sort((a,b) => a.price - b.price)
    setRender(2)

  }
  const history = () => {
    /*setClick(true)
    setDateClick(true)*/
    products.sort((a,b) => a.date.localeCompare(b.date))
    setRender(3)

  }

 useEffect(() => {}, [])
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.sButtonView}>
        <Sbutton title="Artan" onPress={growing}/>
        <Sbutton title="Azalan" onPress={decreasing}/>
        <Sbutton title="Tarih" onPress={history}/>
      </View>
      <View style={styles.flatListView}>
        <FlatList
          extraData={render} 
          data={products} 
          renderItem={({item}) => <ProductCard item={item}/>}
          /*contentContainerStyle={click?{flexDirection:"column"}:{flexDirection:"column-reverse"}}*//>
      </View>
      <View style={styles.inputView}>
        <AddInput sendData={data => setProducts(data)}></AddInput>
      </View>
    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
  
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
