import React from "react";
import { View } from "react-native";
import DragableList from "./dragable_list/dragable_list";

export default function PanGestureExample() {
  return (
    <View style={{ alignItems: "center", marginTop: 8 }}>
      <DragableList />
    </View>
  );
}
