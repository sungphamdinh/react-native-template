import React, { useState } from "react";
import { View, Text, ActivityIndicator, Button } from "react-native";
import useHitsAPI from "../shared/hooks/api/useHitsAPI";
import { TextInput } from "react-native-gesture-handler";

export default function TestUseHitsAPI() {
    const { data, isLoading, setQuery } = useHitsAPI();
    const [value, setValue] = useState<string>("");

    return (
        <View style={{ margin: 20 }}>
            <View style={{ flexDirection: "row", marginBottom: 8 }}>
                <TextInput
                    style={{ borderStyle: "solid", borderWidth: 1, width: 100 }}
                    onChangeText={(text: string) => setValue(text)}
                    value={value}
                />
                <Button
                    title="Search"
                    onPress={() => {
                        setValue("");
                        setQuery(value);
                    }}
                />
            </View>
            {isLoading ? (
                <ActivityIndicator size="small" color="red" />
            ) : (
                <View>
                    {data.hits.map((item) => {
                        return (
                            <View key={item.objectID}>
                                <Text>{item.title}</Text>
                            </View>
                        );
                    })}
                </View>
            )}
        </View>
    );
}
