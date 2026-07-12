/**
 * 获取数组的所有子集（幂集）
 * @param {Array} arr 原始数组
 * @returns {Array} 所有子集组成的数组
 */
export default function getPowerSet (arr) {
  const result = [[]]
  for (let i = 0; i < arr.length; i++) {
    const len = result.length
    for (let j = 0; j < len; j++) {
      result.push([...result[j], arr[i]])
    }
  }
  // 移除空数组，保留所有非空子集
  return result.slice(1)
}