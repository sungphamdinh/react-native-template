import AsyncStorage from "@react-native-community/async-storage";
import { useState, useEffect } from "react";
import tryParse from "../helpers/json";

interface StorageProps<T> {
    key: string;
    initialValue?: T;
    fallbackValue: T;
}

export default function useStorage<T>(props: StorageProps<T>) {
    const { key, initialValue, fallbackValue } = props;
    const [value, setValue] = useState(initialValue);

    function saveStore(data: T) {
        try {
            const json = JSON.stringify(data);
            AsyncStorage.setItem(key, json, () => {
                setValue(data);
            });
        } catch {
            setValue(fallbackValue);
        }
    }

    function removeStore() {
        setValue(fallbackValue);
        AsyncStorage.removeItem(key);
    }

    useEffect(() => {
        AsyncStorage.getItem(key).then((val) => {
            if (val !== null) {
                const data = tryParse(val, fallbackValue);
                setValue(data);
            }
        });
    }, [key]);

    return {
        value,
        removeStore,
        saveStore,
    };
}
