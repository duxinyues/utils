/*
 * @Author: duxinyues weiyy26445@yunrong.cn
 * @Date: 2023-10-17 00:07:15
 * @LastEditors: duxinyues weiyy26445@yunrong.cn
 * @LastEditTime: 2023-10-17 00:13:44
 * @FilePath: /utils/src/range.js
 * @Description: 生成一个范围内的数据
 * Copyright (c) 2023 by ${duxinyues} email: ${weiyy26445@yunrong.cn}, All Rights Reserved.
 */

/**
 * 通过利用Array的内置方法，实现返回一个范围的数据
 * @param {*} start 
 * @param {*} end 
 * @returns 
 */
export const range = (start, end) => [...Array(end - start).keys()].map(item => item + start)