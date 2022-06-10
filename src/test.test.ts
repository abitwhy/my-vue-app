import { medianOf } from '~/test'

describe('数组的中位值', () => {
  it('期望参数', () => {
    expect(medianOf([])).toBeNaN()
    expect(medianOf([0])).toBe(0)
    expect(medianOf([-1, 1])).toBe(0)
    const length = 1e7
    expect(
      medianOf(
        Array(length + 1)
          .fill(0)
          .map((_, i) => i)
      )
    ).toBe(length / 2)
  })
})
