import React from "react";
import { View, Button } from "react-native";
import TouchableView from "./touchable_view";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", marginTop: 8 }}>
      <TouchableView
        onPress={() => {
          console.log("TouchableView pressed");
        }}
      />
      <Button
        title="Test useTheme"
        onPress={() => {
          navigation.navigate("TestTheme");
        }}
      />
      <Button
        title="Test storage"
        onPress={() => {
          navigation.navigate("TestStorage");
        }}
      />
      <Button
        title="Test UseInterval"
        onPress={() => {
          navigation.navigate("TestUseInterval");
        }}
      />
      <Button
        title="Test TestUseHitsAPI"
        onPress={() => {
          navigation.navigate("TestUseHitsAPI");
        }}
      />
      <Button
        title="Test PanGestureExample"
        onPress={() => {
          navigation.navigate("PanGestureExample");
        }}
      />
    </View>
  );
}
