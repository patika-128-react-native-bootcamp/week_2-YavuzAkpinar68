import React, { useState } from 'react';
import { Button, FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Input from './Components/Input/Input';
import UrunCard from './Components/UrunCard/UrunCard';



const App = () => {
  const [urun, setUrun] = useState("")
  const [fiyat, setFiyat] = useState()
  const [satıs, setSatıs] = useState([])

  
  const addUrun = () => {
    urun ? fiyat ?
    setSatıs([{urun:urun, fiyat:fiyat},...satıs]):
    alert("Urun veya Fiyat özellikleri boş bırakılamaz"):
    alert("Urun veya Fiyat özellikleri boş bırakılamaz")
  }
 
  return(
    <SafeAreaView>
      <FlatList 
        data={satıs} 
        renderItem={({item}) => <UrunCard item={item}/>}/>
      <Input 
        placeholder="Urun..." 
        title="Urun Adı" 
        value={urun} 
        onChangeText={setUrun}></Input>
      <Input 
        placeholder="Fiyat..." 
        title="Fiyat" 
        value={fiyat} 
        onChangeText={setFiyat}></Input>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={addUrun}> 
        <Text style={styles.buttonText}>Ekle</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
  buttonContainer:{
    borderRadius:10, 
    margin:5, 
    backgroundColor:"aqua",
    padding:10,
    alignItems:"center"
  },
  buttonText:{
    fontSize:15
  }
})
