/*
 * @Author: duxinyues weiyy26445@yunrong.cn
 * @Date: 2023-10-17 00:15:19
 * @LastEditors: duxinyues weiyy26445@yunrong.cn
 * @LastEditTime: 2023-10-17 00:18:16
 * @FilePath: /utils/src/count_values.js
 * @Description: 统计数组中每一个元素出现的频次
 * Copyright (c) 2023 by ${duxinyues} email: ${weiyy26445@yunrong.cn}, All Rights Reserved.
 */
export const count_values = (arr) => [...arr.reduce((acc, cur) => acc.set(cur, (acc.get(cur) || 0) + 1), new Map()).entries()]