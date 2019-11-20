import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Button,
  TouchableOpacity,
} from 'react-native';
import Main from './src/Main/main';
import {FlatList} from 'react-native-gesture-handler';
import Note from './src/Main/note';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: '',
      todos: [
        {id: 1, title: 'Todo List', done: false},
        {id: 2, title: 'Todo App', done: false},
      ],
    };
  }

  addNewtodo() {
    let todos = this.state.todos;
    todos.unshift({
      id: todos.length,
      title: this.state.todoInput,
      done: false,
    });
    this.setState({
      todos,
      todoInput: '',
    });
  }
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
  render() {
    // const statusbar = (Platform.OS=='ios') ? <View><Text>Test</Text></View> : <View></View>;
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
          </View>
          <View style={{}}>
            <View
              style={{
                marginLeft: '42%',
                flex: 1,
                flexDirection: 'column-reverse',
              }}>
              <TouchableOpacity onPress={() => console.log('123')}>
                <Text
                  style={{
                    fontSize: 45,
                    backgroundColor: 'green',
                    textAlign: 'center',
                    borderRadius: 50,
                    width: 65,
                    height: 65,
                    color: '#FEFEFE',
                  }}>
                  +
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
