import React, { Component } from "react";
import { Text, View } from "react-native";
import FlexDirectionBasics from "./FlexDirectionBasics";
import FlexDirectionAdvance from "./FlexDirectionAdvance";

class App extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>Hello, world!</Text>
        <FlexDirectionBasics> </FlexDirectionBasics>
        <FlexDirectionAdvance></FlexDirectionAdvance>
      </View>
    );
  }
}

export default App;
