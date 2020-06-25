import { Theme } from "./metadata";
import { useState, useEffect } from "react";
import Primary from "./primary";
import Dark from "./dark";
import Light from "./light";

export enum ThemeTypes {
    Primary,
    Dark,
    Light,
}

export function getTheme(type: ThemeTypes) {
    switch (type) {
        case ThemeTypes.Primary:
            return Primary;
        case ThemeTypes.Dark:
            return Dark;
        case ThemeTypes.Light:
            return Light;
    }
}

export default function useTheme(type: ThemeTypes = ThemeTypes.Primary) {
    const [theme, setTheme] = useState<Theme>(getTheme(type));
    const [themeType, setThemeType] = useState<ThemeTypes>(ThemeTypes.Primary);

    useEffect(() => {
        setTheme(getTheme(themeType));
    }, [themeType]);

    return {
        theme,
        setThemeType,
    };
}
