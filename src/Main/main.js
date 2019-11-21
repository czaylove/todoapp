import React from 'react';
import {
  View,
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
const Main = props => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View
        style={{
          width: '90%',
          paddingTop: '10%',
          paddingLeft: '10%',
          opacity: 0.5,
        }}>
        <TextInput
          style={{borderWidth: 0.5, borderRadius: 30, height: 40}}
          onChangeText={todoInput => props.textChange(todoInput)}
          multiline={true}
          placeholder={'ADD TO DO ...'}
          placeholderTextColor="black"
        />
        <TextInput
          style={{borderWidth: 0.5, borderRadius: 30, height: 40}}
          onChangeText={text => props.textSearch(text)}
          multiline={true}
          placeholder={'SEARCH TO DO ...'}
          placeholderTextColor="black"
        />
      </View>
      <View style={{width: '15%', position: 'relative'}}>
        <TouchableOpacity
          onPress={props.addNewtodo}
          style={{position: 'absolute', top: 40}}>
          <Text style={{fontSize: 35}}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Main;
