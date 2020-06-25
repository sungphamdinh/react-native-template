import React from "react";
import { View } from "react-native";
import withTouchable from "../shared/hoc/withTouchable";

function Base() {
  return (
    <View style={{ height: 60, width: 60, backgroundColor: "red" }}></View>
  );
}

const TouchableView = withTouchable(Base);
export default TouchableView;
