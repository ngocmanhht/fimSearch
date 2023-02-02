import { Alert, Image, StyleSheet, Text, TouchableOpacity, View, TextInput, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';





export const Home = ({ navigation }) => {
  const [filmName, setFilmName] = useState('')

const handleSearch=(()=>
{
  filmName==''
  ? Alert.alert("Film name can't be empty!")
  :navigation.navigate('Result', {filmName:filmName})
  setFilmName('')
 
  
}

)
const handleInput=((filmName)=>
{
  setFilmName(filmName)
  
}
)


  return (

    <View style={styles.backGround}>
      <View style={styles.firstPart}>
        <Image style={{ height: 160, width: '85%' }}
          source={require('../Img/Search.png')}
        />
        <Text style={styles.titleTimkiem} >FILM SEARCH</Text>
      </View  >
      <View style={styles.secondPart}>
        <TextInput style={styles.searchInput}
          cursorColor='black'
          onChangeText={handleInput}
          value={filmName}
          placeholder='Write film which you want to search'
      
          
        ></TextInput>
        <TouchableOpacity style={styles.btnSearch}
        onPress={handleSearch}>
          <Image
            style={{ width: 25, height: 25 }}
            source={require('../Img/miniSearch.png')}
          />
          <Text style={{ fontSize: 20 }}>SEARCH </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home
const styles = StyleSheet.create({
  backGround:
  {
    flex: 1,
    backgroundColor: '#BDBFC0'
  },
  firstPart:
  {
    width: '50%', height: 200, alignSelf: 'center', top: 80,


  },
  titleTimkiem:
  {
    color: '#18535F',
    fontSize: 20,
    alignSelf: 'center'

  },
  secondPart:
  {
    width: '95%',
    height: 200,
    borderRadius: 5,
    alignSelf: 'center',
    top: 100,
    alignItems: 'center',
    backgroundColor: 'white',

  },
  searchInput:
  {
    width: '90%',
    height: 50,
    borderWidth: 1,
    top: 10,
    borderRadius: 20
  },
  btnSearch:
  {

    width: '80%',
    height: 50,
    borderWidth: 1,
    top: 35,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DE5474'
  }
})