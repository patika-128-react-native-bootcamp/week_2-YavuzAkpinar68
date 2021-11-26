import React, { useEffect, useState } from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import Sbutton from './Components/Buttons/SButton';
import ProductCard from './Components/ProductCard/ProductCard';
import AddInput from './Components/Input/AddInput';
import styles from './AppStyle';

const App = () => {
  const [data, setData] = useState([])
  //There is a render state for re-render to flatlist which is going to trigger when touched to alingment buttons
  //It used at flatslist's extraData prop
  //without this state i had a problem.My flatlist was coming one button touch behind.
  const [renderFlatlist, setRenderFlatlist] = useState(0)
  
  const handleDecreasing = () => {
    data.sort((a,b) => a.price - b.price).reverse()
    setRenderFlatlist(1)
  }
  const handleGrowing = () => {
    data.sort((a,b) => a.price - b.price)
    setRenderFlatlist(2)
  }
  const handleHistory = () => {
    data.sort((a,b) => a.date.localeCompare(b.date))
    setRenderFlatlist(3)
  }
  const handleData = (product, price, date) => {
    setData([{product:product, date:date, price:price}, ...data])
  }
  //With this useEffect render going to zero point after touched the button
  //With that when we have growing or decreasing type list in front of us we can manage to listing the list with the same type
  //after we added a product
  useEffect(() => {setRenderFlatlist(0)}, [renderFlatlist])

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.sButtonView}>
        <Sbutton title="Artan" onPress={handleGrowing}/>
        <Sbutton title="Azalan" onPress={handleDecreasing}/>
        <Sbutton title="Tarih" onPress={handleHistory}/>
      </View>
      <View style={styles.flatListView}>
        <FlatList
          extraData={renderFlatlist} 
          data={data} 
          renderItem={({item}) => <ProductCard item={item}/>}/>
      </View>
      <View style={styles.inputView}>
        <AddInput sendData={handleData}></AddInput>
      </View>
    </SafeAreaView>
  )
}

export default App;


