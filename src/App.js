import React, { useEffect, useState } from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import Sbutton from './Components/Buttons/SButton';
import ProductCard from './Components/ProductCard/ProductCard';
import AddInput from './Components/Input/AddInput';
import styles from './AppStyle';

const App = () => {
  const [products, setProducts] = useState([])
  //There is a render state for re-render to flatlist which is going to trigger when touched to alingment buttons
  //It used at flatslist's extraData prop
  //without this state i had a problem.My flatlist was coming one button touch behind.
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
  //With this useEffect render going to zero point after touched the button
  //With that when we have growing or decreasing type list in front of us we can manage to listing the list with same type
  //after we added a product
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


