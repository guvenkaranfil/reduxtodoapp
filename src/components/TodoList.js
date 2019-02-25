import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

const TodoList = ({ todos, toggleTodo }) => (
  <View style={{ padding: 20 }}>
    {todos.map(todo => {
      console.log("todo.id ==> ", todo.id);
      console.log("toggleTodo ==> ", toggleTodo);
      return (
        <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
          <Text
            style={{
              fontSize: 24,
              textDecorationLine: todo.completed ? "line-through" : "none"
            }}
          >
            {todo.text}
          </Text>
        </TouchableOpacity>
      );
    })}
  </View>
);

export default TodoList;
