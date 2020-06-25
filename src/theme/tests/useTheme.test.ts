import { renderHook, act } from "@testing-library/react-hooks";
import useTheme, { ThemeTypes, getTheme } from "../useTheme";
import Primary from "../primary";
import Dark from "../dark";
import Light from "../light";

describe("useTheme", () => {
    it("should init with Primary as default theme", () => {
        const { result } = renderHook(() => useTheme());
        expect(result.current.theme).toEqual(Primary);
    });

    it("change theme", () => {
        const { result } = renderHook(() => useTheme());
        act(() => {
            result.current.setThemeType(ThemeTypes.Dark);
        });
        expect(result.current.theme).toEqual(Dark);
    });
});

describe("test getTheme function", () => {
    it("get primary theme", () => {
        const result = getTheme(ThemeTypes.Primary);
        expect(result).toEqual(Primary);
    });

    it("get dark theme", () => {
        const result = getTheme(ThemeTypes.Dark);
        expect(result).toEqual(Dark);
    });

    it("get light theme", () => {
        const result = getTheme(ThemeTypes.Light);
        expect(result).toEqual(Light);
    });
});
