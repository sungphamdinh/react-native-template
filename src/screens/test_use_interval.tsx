import React from "react";
import { View, Text, Button } from "react-native";
import { useState } from "react";
import useInterval from "../shared/hooks/useInterval";

export default function TestUseInterval() {
  const [count, setCount] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  useInterval(
    () => {
      setCount(count + 1);
    },
    isRunning ? 1000 : null
  );

  return (
    <View style={{ margin: 20 }}>
      <Text>{`Count: ${count}`}</Text>
      <Button
        title="Stop"
        onPress={() => {
          setIsRunning(false);
        }}
      />
      <Button
        title="Resume"
        onPress={() => {
          setIsRunning(true);
        }}
      />
      <Button
        title="Reset"
        onPress={() => {
          setCount(0);
          setIsRunning(true);
        }}
      />
    </View>
  );
}
