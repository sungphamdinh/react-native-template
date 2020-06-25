import axios from "axios";
import { renderHook } from "@testing-library/react-hooks";
import useHitsApi from "../useHitsApi";

jest.mock("axios");

describe("useHitsApi", () => {
  it("returns data", async () => {
    const data = {
      hits: [
        {
          objectID: 1,
          title: "title1",
        },
      ],
    };

    (axios.get as jest.Mock).mockResolvedValue({
      data: data,
    });

    const { result, waitForNextUpdate } = renderHook(() => useHitsApi());
    expect(result.current.isLoading).toEqual(true);

    await waitForNextUpdate();
    expect(result.current.isLoading).toEqual(false);
    expect(result.current.data).toEqual(data);
  });

  it("returns empty data", async () => {
    (axios.get as jest.Mock).mockResolvedValue({
      data: null,
    });

    const { result, waitForNextUpdate } = renderHook(() => useHitsApi());

    await waitForNextUpdate();
    expect(result.current.data).toEqual({ hits: [] });
  });
});
