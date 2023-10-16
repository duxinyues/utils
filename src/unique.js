/**
 * 数组唯一元素
 * 
 * 就是数组去重，返回一个不含重复元素的数组
 */

export const unique = (arr) => [...new Set(arr)];
