import { useState, useEffect } from "react";
import axios from "axios";
import { isNil } from "../../helpers/utils";

const BASE_URL = "https://hn.algolia.com/api/v1/search?query";
const DEFAULT_DATA = { hits: [] };

interface Hit {
  objectID: number;
  title: string;
}

export default function useHitsApi() {
  const [data, setData] = useState<{ hits: Hit[] }>(DEFAULT_DATA);
  const [query, setQuery] = useState<string>("react");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      setIsLoading(true);
      const response = await axios.get(`${BASE_URL}=${query}`);

      if (!ignore) {
        setIsLoading(false);
        setData(response.data);
      }
    }
    fetchData();

    return () => {
      ignore = true;
    };
  }, [query]);

  return {
    data: isNil(data) ? DEFAULT_DATA : data,
    isLoading,
    setQuery,
  };
}
