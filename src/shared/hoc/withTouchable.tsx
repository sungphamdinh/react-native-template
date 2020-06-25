import React from "react";
import { TouchableOpacity } from "react-native";

interface TouchableProps {
    onPress: () => void;
}
export default function withTouchable<T extends TouchableProps>(
    WrappedComponent: React.ComponentType<T>,
    accessibilityComponentType: "button" | "none" | "radiobutton_checked" | "radiobutton_unchecked" = "button",
) {
    return class TouchableItem extends React.Component<T> {
        render() {
            return (
                <TouchableOpacity
                    style={null}
                    onPress={this.props.onPress}
                    accessibilityComponentType={accessibilityComponentType}
                >
                    <WrappedComponent {...(this.props as T)} />
                </TouchableOpacity>
            );
        }
    };
}
