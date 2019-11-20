import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Button,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default class Note extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const todoItem = this.props.todoItem;
    return (
      <View>
        <TouchableOpacity
          onPress={() => this.props.toggleDone()}
          style={styles.todoItem}>
          <Text style={todoItem.done ? {color: '#AAAAAA'} : {color: '#313131'}}>
            {todoItem.title}
          </Text>
          <TouchableOpacity onPress={() => this.props.remove()}>
            <Icon
              name={Platform.OS === 'ios' ? 'ios-trash' : 'md-trash'}
              color="red"
              size={25}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  todoItem: {
    width: '100%',
    height: 40,
    borderBottomColor: '#DDD',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
});
