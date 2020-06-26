import React from "react";
import useDragable from "../hooks/useDragable";
import { Animated } from "react-native";

function withDragable<T>(WrappedComponent: React.ComponentType<T>) {
  return function ComponentWithAnimatedView(props: T) {
    const {
      animateX,
      animateY,
      gestureResponderHandler,
    } = useDragable();

    return (
      <Animated.View
        {...gestureResponderHandler}
        style={{
          transform: [{ translateX: animateX }, { translateY: animateY }]
        }}
      >
        <WrappedComponent {...props}/>
      </Animated.View>
    );
  };
}

export default withDragable;
