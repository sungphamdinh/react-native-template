import React from "react";
import { Text, View } from "react-native";
import withDragable from "../../shared/hoc/withDragable";

interface IItemProps {
  title: string;
}

function Base(props: IItemProps) {
  return (
    <View style={{ width: 100, height: 100, backgroundColor: "red" }}>
      <Text>{props.title}</Text>
    </View>
  );
}

const DragableItem = withDragable<IItemProps>(Base);
export default DragableItem;
