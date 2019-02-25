import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { connect } from "react-redux";
import { addTodo } from "../actions";

class AddTodo extends Component {
  state = {
    text: ""
  };

  addTodo = text => {
    //TODO update redux store
    console.log("addTodo button passed");
    console.log("text function ==> ", text);

    this.props.dispatch(addTodo(text));
    this.setState({ text: "" });
  };

  render() {
    console.log("text ==> ", this.state.text);
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Ex. create new video"
          style={{
            height: 50,
            flex: 1,
            padding: 5,
            borderWidth: 1,
            borderColor: "gray"
          }}
          value={this.state.text}
          onChangeText={text => this.setState({ text: text })}
        />
        <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
          <View style={styles.addButton}>
            <Ionicons name="md-add" size={30} color="#de9595" />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
    backgroundColor: "#aeaeae"
  },
  addButton: {
    height: 50,
    backgroundColor: "#aeaeae",
    alignItems: "center",
    justifyContent: "center",
    padding: 10
  }
});

export default connect()(AddTodo);
