export const medianOf = (array: number[]) => {
  const sortedArr = array.sort((f, b) => f - b)
  const length = array.length
  const oddLength = length % 2 === 0
  const minMid = sortedArr[Math.ceil(length / 2) - 1]
  const maxMid = oddLength ? sortedArr[length / 2] : minMid
  const median = (minMid + maxMid) / 2
  return median
}
