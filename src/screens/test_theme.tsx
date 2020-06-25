import React from "react";
import { View, Text, Button } from "react-native";
import useTheme, { ThemeTypes } from "../theme/useTheme";

export default function TestTheme() {
  const { theme, setThemeType } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: theme.COLORS.background,
      }}
    >
      <Text>Test Theme</Text>
      <Text style={{ fontSize: theme.FONT_SIZE.small }}>small text</Text>
      <Text style={{ fontSize: theme.FONT_SIZE.medium }}>medium text</Text>
      <Text style={{ fontSize: theme.FONT_SIZE.large }}>large text</Text>
      <Button
        title="Dark"
        onPress={() => {
          setThemeType(ThemeTypes.Dark);
        }}
      />
      <Button
        title="Light"
        onPress={() => {
          setThemeType(ThemeTypes.Light);
        }}
      />
      <Button
        title="Primary"
        onPress={() => {
          setThemeType(ThemeTypes.Primary);
        }}
      />
    </View>
  );
}
