import React from 'react';
import { Checkbox, List,Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
const Task = ({ task, onToggle,onPress }) => {
  return (
    <List.Item 
      style={styles.input}
      key={task.id}
      title={task.title}
      left={() => (
        <Checkbox
          status={task.completed ? 'checked' : 'unchecked'}
          onPress={() => onToggle(task.id)}
        />
      )}
    />
  );
};


const styles = StyleSheet.create({
  input: {
    marginLeft: 12,
    borderWidth: 0,
    marginBottom:8,
    backgroundColor:"lightgray",
    borderRadius:5,  
  },
});

export default Task;
