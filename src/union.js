/**
 * 并集：两个集合，合并，🙅🏻‍♀️
 */

import { unique } from "./unique.js";

export const union = (arr1, arr2) => unique([...arr1, ...arr2])