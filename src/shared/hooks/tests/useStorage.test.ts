import useStorage from "../useStorage";
import { renderHook, act } from "@testing-library/react-hooks";

describe("useStorage", () => {
    it("init with initialValue", () => {
        const { result } = renderHook(() =>
            useStorage({
                key: "key",
                initialValue: [1],
                fallbackValue: [],
            }),
        );
        expect(result.current.value).toEqual([1]);
    });

    it("remove existing stored data", () => {
        const { result } = renderHook(() =>
            useStorage({
                key: "key",
                initialValue: "data",
                fallbackValue: "",
            }),
        );
        expect(result.current.value).toEqual("data");
        act(() => {
            result.current.removeStore();
        });
        expect(result.current.value).toEqual("");
    });

    it("save data", () => {
        const { result } = renderHook(() =>
            useStorage({
                key: "key",
                initialValue: [1, 2, 3],
                fallbackValue: [],
            }),
        );
        act(() => {
            result.current.saveStore([3, 5]);
        });
        expect(result.current.value).toEqual([3, 5]);
    });
});
