import React, { useState } from 'react';
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
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
    setSatıs([{urun:urun, fiyat:fiyat},...satıs])
  }
 
  return(
    <View>
      <FlatList 
        data={satıs} renderItem={({item}) => <UrunCard item={item}/>}/>
      <Input placeholder="Urun" title="urun" value={urun} onChangeText={setUrun}></Input>
      <Input placeholder="Fiyat" title="Fiyat" value={fiyat} onChangeText={setFiyat}></Input>
      <Button title="Ekle" onPress={addUrun}></Button>
    </View>
  )
}

export default App;
