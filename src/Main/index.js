import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Button,
  TouchableOpacity,
  ScrollView,
  AsyncStorage,
} from 'react-native';
import Main from './main';
import {FlatList} from 'react-native-gesture-handler';
import Note from './note';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: '',
      dataA: null,
      todos: [
        {id: 0, title: 'Todo App', done: false},
        {id: 1, title: 'Todo List', done: false},
      ],
    };
  }

  addNewtodo = async () => {
    let todos = this.state.todos;
    todos.unshift({
      id: todos.length,
      title: this.state.todoInput,
      done: false,
    });

    console.log('todo: ', todos);

    try {
      await AsyncStorage.setItem('keyData', JSON.stringify(todos));
    } catch (error) {
      // Error saving data
    }
    this.setState({
      todos,
      todoInput: '',
    });
  };
  toggleDone(item) {
    let todos = this.state.todos;
    todos = todos.map(todo => {
      if (todo.id == item.id) {
        todo.done = !todo.done;
      }
      return todo;
    });
    this.setState(todos);
  }
  remove(item) {
    let todos = this.state.todos;
    todos = todos.filter(todo => todo.id !== item.id);
    this.setState({todos});
  }

  componentDidMount() {
    (async function _retrieveData() {
      try {
        const value = await AsyncStorage.getItem('keyData');
        console.log('value', value);
        const getValues = JSON.parse(value);
        console.log('getValue: ', getValues);
        this.setState({todos: 'getValues'});
      } catch (error) {
        // Error retrieving data
      }
    })();
  }
  hanldeSeach(text) {
    const formatQuery = text.toLowerCase();
    console.log('text ', text);
  }
  render() {
    // const statusbar = (Platform.OS=='ios') ? <View><Text>Test</Text></View> : <View></View>;
    console.log('dataA: ', this.state.dataA);
    console.log('valueTodo', this.state.todos);
    return (
      <ImageBackground
        source={{
          uri:
            'https://b-f25-zpg.zdn.vn/7081002720558168559/eb1f8af517b4eeeab7a5.jpg',
        }}
        style={{width: '100%', height: '100%'}}>
        <View>
          <View>
            <Main
              textChange={todoInput => this.setState({todoInput})}
              textSearch={text => this.hanldeSeach(text)}
              addNewtodo={() => this.addNewtodo()}>
              <Text>{this.props.todoInput}</Text>
            </Main>
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                paddingTop: 50,
                paddingLeft: 20,
                paddingBottom: 10,
              }}>
              <View style={{width: '30%'}}>
                <Text style={{fontSize: 20, color: '#767676', opacity: 1}}>
                  Today Task{' '}
                </Text>
              </View>
            </View>
            <Button title="1" onPress={() => console.log(':', this.todos)} />
            {/* list */}
            <ScrollView>
              <FlatList
                style={{
                  paddingLeft: 20,
                  paddingRight: 20,
                  height: '68%',
                }}
                data={this.state.todos}
                ListEmptyComponent={() => (
                  <View>
                    <Text>Empty List</Text>
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => {
                  return (
                    <Note
                      todoItem={item}
                      toggleDone={() => this.toggleDone(item)}
                      remove={() => this.remove(item)}
                    />
                  );
                }}
              />
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
