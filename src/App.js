import React, { useEffect, useState } from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import Sbutton from './Components/Buttons/SButton';
import ProductCard from './Components/ProductCard/ProductCard';
import AddInput from './Components/Input/AddInput';

const App = () => {
  const [products, setProducts] = useState([])
  const [render, setRender] = useState(0)
  
  const decreasing = () => {
    setProducts(products.sort((a,b) => a.price - b.price).reverse())
    setRender(1)
  }
  const growing = () => {
    products.sort((a,b) => a.price - b.price)
    setRender(2)
  }
  const history = () => {
    products.sort((a,b) => a.date.localeCompare(b.date))
    setRender(3)
    console.log(products)
  }
  const handleData = (product, price, date) => {
    setProducts([{product:product, date:date, price:price}, ...products])
  }
  
  useEffect(() => {setRender(0)}, [render])

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
          renderItem={({item}) => <ProductCard item={item}/>}/>
      </View>
      <View style={styles.inputView}>
        <AddInput sendData={handleData}></AddInput>
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
