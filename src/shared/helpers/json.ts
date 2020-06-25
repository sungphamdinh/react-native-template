import { isNil } from "./utils";

export default function tryParse<T>(value: string, fallbackValue: T) {
  try {
    const object = JSON.parse(value);
    if (isNil(object)) return fallbackValue;
    return object;
  } catch {
    return fallbackValue;
  }
}
