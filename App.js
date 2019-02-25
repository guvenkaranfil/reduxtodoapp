import React from "react";

import TodoApp from "./src/TodoApp";

import { Provider } from "react-redux";
import store from "./src/store";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
  }
}
