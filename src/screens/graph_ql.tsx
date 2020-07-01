import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import useContentStackGraphQL from "../shared/hooks/api/useContentStackGraphQL";
import { FlatList } from "react-native-gesture-handler";

interface IItemProps {
  title: string;
  price: number;
  description: string;
}

function Item(props: IItemProps) {
  return (
    <View style={{ margin: 8 }}>
      <Text style={{ fontStyle: "italic" }}>{props.title}</Text>
      <Text>{props.description}</Text>
    </View>
  );
}

export default function GraphQL() {
  const { products, isLoading } = useContentStackGraphQL();
  return (
    <View style={{ alignItems: "center", marginTop: 8 }}>
      {isLoading ? (
        <ActivityIndicator size="small" color="red" />
      ) : (
        <View>
          <Text>GraphQL</Text>
          <FlatList
            data={products}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => {
              return (
                <Item
                  title={item.title}
                  description={item.description}
                  price={item.price}
                />
              );
            }}
          />
        </View>
      )}
    </View>
  );
}
