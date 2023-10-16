/**
 * 交集，获取同时存在两个数组中的元素
 */

export const intersection = (arr1, arr2) => arr1.filter(item => arr2.includes(item))