import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native/Libraries/Alert/Alert';

 
  
 const ContentButons = (props) => {
  return (
    <View style={{ alignItems: 'center' }}>
      <View style={{flexDirection: 'row', height: 150, width: '95%', backgroundColor: 'white', marginTop: 10 }}>
        <View>
        <Image
          source={props.data} style={{ width: 120, height: 100 }}></Image>
        </View>
        <View style={{left:5}}>
          <Text style={{ fontSize: 20, color: '#3AE221' }}>Film Name: {props.title}</Text>
          <Text style={styles.secondContent}>Realease Year: {props.year}</Text>
          <Text style={styles.secondContent}>Cost to rent: {props.cost}</Text>
          <View style={{width:'100%', backgroundColor:'#FF99CC', borderRadius:5, alignItems:'center'}}>
          <TouchableOpacity onPress={props.navigation}>
            <Text>MORE INFOR </Text>
          </TouchableOpacity>
          </View>
         
        </View>
      </View>
    </View>
    
  )
}

export const Result = ({route, navigation}) => {

  const data = [
    { "id": "1", "title": "Star Wars", "releaseYear": "1977", "img": require('../Img/starwar.png'), "cost": '100$'},
    { "id": "2", "title": "Back to the Future", "releaseYear": "1985", "img": require("../Img/backtoft.png"), "cost": "150$" },
    { "id": "3", "title": "The Matrix", "releaseYear": "1999", "img": require("../Img/thematrix.png"), "cost": "170$" },
    { "id": "4", "title": "Inception", "releaseYear": "2010", "img": require("../Img/inception.png"), "cost": '250$' },
    { "id": "5", "title": "Interstellar", "releaseYear": "2014", "img": require("../Img/intersaller.png") , "cost": '190$'}

  ]
  const movieFinded=(()=>
  data.filter(movie =>movie.title.toLowerCase().includes(route.params.filmName.toLowerCase()))
 
  )
  const [title, setTitle] = useState([]);
  return (
    <View>
    
     <View>
     {
      movieFinded().length>0
      ?(
        <FlatList
        data={movieFinded()}
        renderItem={({ item }) => (
          <ContentButons title={item.title} data= {item.img} cost={item.cost} year={item.releaseYear}
          navigation={()=> navigation.navigate('Infor',{datas:item})}
          />
        )}
      />
      )
      :(<Text>OOPS THE FILM YOU FIND DONT EXIT</Text>)
     }
    
   
     </View>
        
    
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
  secondContent:
  {
    fontSize:17,
   

  }

})