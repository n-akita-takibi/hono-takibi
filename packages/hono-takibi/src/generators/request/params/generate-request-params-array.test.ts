import { describe, expect, it } from 'vitest'
import { generateRequestParamsArray } from './generate-request-params-array'
import type { ParamsObject } from '../../../types'

const generateRequestParamsArrayTestCases: {
  paramsObject: ParamsObject
  expected: string[]
}[] = [
  {
    paramsObject: {
      query: { id: 'z.string()' },
      params: { id: 'z.string()' },
    },
    expected: ['query:z.object({id:z.string()})', 'params:z.object({id:z.string()})'],
  },
]

describe('generateRequestParamsArray', () => {
  it.concurrent.each(generateRequestParamsArrayTestCases)(
    'generateRequestParamsArray($paramsObject) -> $expected',
    async ({ paramsObject, expected }) => {
      const result = generateRequestParamsArray(paramsObject)
      expect(result).toEqual(expected)
    },
  )
})
