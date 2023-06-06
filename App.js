import React, { useState } from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { TextInput,Button } from 'react-native-paper';
import { SafeAreaView, StyleSheet, View, Platform, StatusBar, Text,Image } from 'react-native';
import TaskList from './src/TaskList';
import store from './src/store';
import { addTask,deleteTask } from './src/actions';



const App = () => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const task = {
        id: Date.now(),
        title: newTask.trim(),
        completed: false,
      };

      store.dispatch(addTask(task));
      setNewTask('');
    }
  };
  
  const handleDeleteTask = () => {
    store.dispatch(deleteTask());
  };
  return (
    <StoreProvider store={store}>
      <SafeAreaView style={styles.container}>
      <View style={styles.heading}>
        <Text numberOfLines={1} style={styles.headingContainer} >Task List</Text>
        <Button mode="contained" style={styles.deleteButton} onPress={handleDeleteTask}>Delete
        </Button>
      </View>
      <TaskList />
      <View style={styles.inputContainer}>
        <TextInput
          underlineColorAndroid="transparent"
          placeholder='+   Add Task'
          value={newTask}
          onChangeText={setNewTask}
          onSubmitEditing={handleAddTask}
          style={styles.input}
        />
        <Button style={styles.addButton}mode="contained" onPress={handleAddTask}>
        +
        </Button>
      </View>
      </SafeAreaView>
    </StoreProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  headingContainer:{
    paddingTop:25,
    fontSize:15,
    fontWeight:'bold',
    alignItems:'center',
    paddingBottom:10
  },
  heading:{
    marginTop:100,
    flexDirection:'row',
    justifyContent:'center'
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  addButton: {
    justifyContent:'center',
    marginBottom: 12,
    marginTop:12,
    height:50,
    width:50,
    borderRadius:50
  },
  deleteButton: {
    justifyContent:'center',
    marginLeft:150,
    height:40
  },
  
  input: {
    flex: 1,
    marginRight: 8,
    height: 40,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    borderRadius:5,
    backgroundColor:"lightgray",
    marginTop:0
    
  },
});

export default App;


