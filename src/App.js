import React, { useState } from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import Input from './Components/Input/Input';
import UrunCard from './Components/UrunCard/UrunCard';



const App = () => {
  const [urun, setUrun] = useState("")
  const [fiyat, setFiyat] = useState()
  const [satıs, setSatıs] = useState([])

  
  const addUrun = () => {
    urun === true && fiyat === true ?
    setSatıs([{urun:urun, fiyat:fiyat},...satıs]):
    alert("Urun veya Fiyat özellikleri boş bırakılamaz")
  }
 
  return(
    <SafeAreaView>
      <FlatList 
        data={satıs} 
        renderItem={({item}) => <UrunCard item={item}/>}/>
      <Input 
        placeholder="Urun" 
        title="urun" 
        value={urun} 
        onChangeText={setUrun}></Input>
      <Input 
        placeholder="Fiyat" 
        title="Fiyat" 
        value={fiyat} 
        onChangeText={setFiyat}></Input>
      <Button title="Ekle" onPress={addUrun}></Button>
    </SafeAreaView>
  )
}

export default App;
