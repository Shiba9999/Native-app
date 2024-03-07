// App.js
import React, {useState} from 'react';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {addTodo, removeTodo} from './todoSlice';
import store from './store';
import {View, Text, TextInput, Button, FlatList} from 'react-native';

const TodoApp = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  console.log('todos', todos);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      dispatch(addTodo(newTodo));
      setNewTodo('');
    }
  };

  return (
    <View>
      <Text>Todo App</Text>
      <TextInput
        placeholder="Add a new todo"
        value={newTodo}
        onChangeText={text => setNewTodo(text)}
      />
      <Button title="Add Todo" onPress={handleAddTodo} />
      <FlatList
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View>
            <Text
              style={{
                textDecorationLine: item.completed ? 'line-through' : 'none',
              }}>
              {item.text}
            </Text>
            <Button
              title="remove Todo"
              onPress={() => dispatch(removeTodo(item.id))}
            />
          </View>
        )}
      />
    </View>
  );
};
export default TodoApp;
