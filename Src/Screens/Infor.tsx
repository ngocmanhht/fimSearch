import { Alert, Image, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import Video from 'react-native-video';

export const Content = props =>
{
  return(
    <View>
      <Text style={{fontSize:25}}>This is trailer of {props.name} </Text>
     
      <Video
          source={require('../video/vid.mp4')}
          controls={true}
          resizeMode="cover"
          hideShutterView={true}
          paused={false}
          onError={() => Alert.alert('error')}
          style={{ width: '100%',height: 300,}}
          volume={100}
          repeat={true}
        />

    </View>
  )
}
export const Infor = ({route}) => {
  return (
    <View>
      <Content name={route.params.datas.title}
      source={route.params.datas.img}
      />
      
    </View>
  )
}

export default Infor

const styles = StyleSheet.create({})