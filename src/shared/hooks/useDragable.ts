import { useRef, useState, useEffect } from "react";
import {
  Animated,
  PanResponder,
} from "react-native";

export default function useDragable() {
  const pan = useRef(new Animated.ValueXY()).current;
  const animatedX = useRef(0);
  const animatedY = useRef(0);

  const [isPressed, setIsPressed] = useState<boolean>(false);

  const id =  pan.addListener((value) => {
    animatedX.current = value.x;
    animatedY.current = value.y;
  });

  useEffect(() => {
    return () => {
      pan.removeListener(id);
    }
  })

  function handleStartShouldSetPanResponder() {
    return true;
  }

  function handleOnMoveShouldSetPanResponder() {
    return true;
  }

  function handlePanResponderEnd() {
    setIsPressed(false);
    pan.flattenOffset();
  }

  const panGesture = PanResponder.create({
    onStartShouldSetPanResponder: handleStartShouldSetPanResponder,
    onMoveShouldSetPanResponder: handleOnMoveShouldSetPanResponder,
    onPanResponderGrant: () => {
      setIsPressed(true);
      pan.setOffset({ x: animatedX.current, y: animatedY.current });
      pan.setValue({ x: 0, y: 0 });
    },
    onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: handlePanResponderEnd,
    onPanResponderTerminate: handlePanResponderEnd,
  });

  return {
    animateX: pan.x,
    animateY: pan.y,
    isDragHold: isPressed,
    gestureResponderHandler: panGesture.panHandlers,
  };
}
