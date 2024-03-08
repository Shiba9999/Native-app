import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';


const App = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddTodo = () => {
    if (!todo) return;
    setTodos([...todos, {id: Date.now(), text: todo}]);
    setTodo('');
  };

  const handleRemoveTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo =>
    todo.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View className="flex-1 bg-red-500 items-center pt-40">
      <TextInput
        className="border-1 border-gray-300 p-10 my-10 w-90%"
        placeholder="Add a new todo"
        value={todo}
        onChangeText={setTodo}
      />
      <Button title="Add Todo" onPress={handleAddTodo} />

      <TextInput
        className="border-1 border-gray-300 p-10 my-10 w-90%"
        placeholder="Search Todos"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FlatList
        data={filteredTodos}
        renderItem={({item}) => (
          <View className="flex-row justify-between items-center w-90% my-5 p-10 border-1 border-gray-300">
            <Text className="max-w-80%">{item.text}</Text>
            <TouchableOpacity onPress={() => handleRemoveTodo(item.id)}>
              <Text className="text-blue-500">Remove</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default App;
