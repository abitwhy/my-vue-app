export const medianOf = (array: number[]): number => {
  const sorted = array.sort((f, b) => f - b)
  const length = array.length
  const min = sorted[Math.ceil(length / 2) - 1]
  const max = sorted[Math.floor(length / 2)]
  return (min + max) / 2
}
