/* eslint-disable @typescript-eslint/ban-types */
import _ from "lodash";

export function isNil(value: object | string | number | boolean) {
    return _.isNil(value);
}

export function isNotNil(value: object | string | number | boolean) {
    return !_.isNil(value);
}
