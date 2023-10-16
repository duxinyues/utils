/**
 * 差集：两个数组交集之外的元素
 */

export const difference = (arr1, arr2) => {
    return arr1.filter(item => !arr2.includes(item));
}

// 对称差集
export const difference_symm = (arr1, arr2) => {
    return [...difference(arr1, arr2), ...difference(arr2, arr1)]
}