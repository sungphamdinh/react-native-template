import React from "react";
import { View, Text } from "react-native";
import useStorage from "../shared/hooks/useStorage";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function TestStorage() {
    const { value, removeStore, saveStore } = useStorage({
        key: "key1",
        fallbackValue: "",
    });

    return (
        <View>
            <View style={{ margin: 8 }}>
                <Text>{`Value: ${value}`}</Text>
                <TouchableOpacity
                    onPress={() => {
                        saveStore("Hello");
                    }}
                    style={{ backgroundColor: "red", padding: 8, width: 100, margin: 4 }}
                >
                    <Text style={{ color: "white" }}>Save Hello</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        removeStore();
                    }}
                    style={{ backgroundColor: "red", padding: 8, width: 130, margin: 4 }}
                >
                    <Text style={{ color: "white" }}>Clear storage</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
