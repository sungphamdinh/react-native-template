import React from "react";
import { View } from "react-native";
import DragableItem from "./dragable_item";

export default function DragableList() {
  const data = ["1", "2", "3", "4", "5", "6"];
  return (
    <View>
      {data.map((item) => {
        return <DragableItem key={item} title={item}/>
      })}
    </View>
  );
}
