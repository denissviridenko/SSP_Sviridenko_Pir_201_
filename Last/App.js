import React from "react";
import { Provider } from "react-redux";
import store from "./src/store/store";
import { MyStack } from "./src/navigations/MyStack";

const App = () => {
  return (
    <Provider store={store}>
      <MyStack />
    </Provider>
  );
};

export default App;
