import React, { useEffect, useState } from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Input from './Components/Input/Input';
import Sbutton from './Components/SıralamaButonu/SButton';
import UrunCard from './Components/UrunCard/UrunCard';



const App = () => {
  const [urun, setUrun] = useState("")
  const [fiyat, setFiyat] = useState()
  const [satıs, setSatıs] = useState([])
  const [click, setClick] = useState(true)

  
  const addUrun = ({flexDirection}) => {
    urun ? fiyat ?
    setSatıs([{urun:urun, fiyat:fiyat},...satıs]):
    alert("Urun veya Fiyat özellikleri boş bırakılamaz"):
    alert("Urun veya Fiyat özellikleri boş bırakılamaz");
    setFiyat()
    setUrun("")
  }
  const satısazalan = satıs.sort((a,b) => a.fiyat - b.fiyat)
  const azalan = () => {
      setClick(true)
  }
 

  const artan = () => {
    setClick(false)
 }

 
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.sButtonView}>
        <Sbutton title="Artan" onPress={artan}/>
        <Sbutton title="Azalan" onPress={azalan}/>
        <Sbutton title="Tarih"/>
      </View>
      <View style={styles.flatListView}>
        <FlatList 
          data={satıs} 
          renderItem={({item}) => <UrunCard item={item}/>}
          contentContainerStyle={click?{flexDirection:"column"}:{flexDirection:"column-reverse"}}/>
      </View>
      <View style={styles.inputView}>
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
      </View>
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
