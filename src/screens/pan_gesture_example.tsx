import React from "react";
import {
  View,
  Text,
  Animated,
} from "react-native";
import useDragable from "../shared/hooks/useDragable";

export default function PanGestureExample() {
  const {
    isDragHold,
    animateX,
    animateY,
    gestureResponderHandler,
  } = useDragable();

  return (
    <View style={{ alignItems: "center", marginTop: 8 }}>
      <Text>PanGesture</Text>
      <Animated.View
        style={{
          transform: [{ translateX: animateX }, { translateY: animateY }],
          backgroundColor: isDragHold ? "green" : "red",
        }}
        {...gestureResponderHandler}
      >
        <View
          style={{
            width: 100,
            height: 100,
          }}
        ></View>
      </Animated.View>
    </View>
  );
}
