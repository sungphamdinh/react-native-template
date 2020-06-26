import React from "react";
import { Text, View, Animated } from "react-native";
import withDragable from "../../shared/hoc/withDragable";
import useDragable from "../../shared/hooks/useDragable";

interface IItemProps {
  title: string;
}

function Base(props: IItemProps) {
  const { animateX, animateY, gestureResponderHandler } = useDragable();
  return (
    <Animated.View
      {...gestureResponderHandler}
      style={{
        transform: [{ translateX: animateX }, { translateY: animateY }],
      }}
    >
      <View style={{ width: 100, height: 100, backgroundColor: "red" }}>
        <Text>{props.title}</Text>
      </View>
    </Animated.View>
  );
}

const DragableItem = withDragable<IItemProps>(Base);
export default DragableItem;
