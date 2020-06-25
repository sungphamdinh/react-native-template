import _ from "lodash";

export function isEmpty<T>(value: T[] | string): boolean {
  if (_.isNil(value)) return true;
  if (_.isString(value) && value === "") return true;
  if (_.isArray(value) && value.length === 0) return true;
  return _.isEmpty(value);
}

export function isNotEmpty<T>(value: T[] | string): boolean {
  return !isEmpty(value);
}

export function clone<T>(value: T[]): T[] {
  return _.clone(value);
}

export function removeAtIndex<T>(array: T[], index: number): T[] {
  if (_.isNil(array)) return [];
  if (index < 0 || index > array.length) return [];
  const cloneArray = clone(array);
  cloneArray.splice(index, 1);
  return cloneArray;
}
