import React, { Component } from "react";
import { Text, View } from "react-native";
import FlexDirectionBasics from "./FlexDirectionBasics";
import ViewStyleProps from "./ViewStyleProps";
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
        <ViewStyleProps></ViewStyleProps>
        <View>
          <FlexDirectionAdvance></FlexDirectionAdvance>
        </View>
      </View>
    );
  }
}

export default App;
