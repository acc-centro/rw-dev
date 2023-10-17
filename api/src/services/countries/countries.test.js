import { countries, country, deleteCountry } from './countries'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('countries', () => {
  scenario('returns all countries', async (scenario) => {
    const result = await countries()

    expect(result.length).toEqual(Object.keys(scenario.country).length)
  })

  scenario('returns a single country', async (scenario) => {
    const result = await country({ id: scenario.country.one.id })

    expect(result).toEqual(scenario.country.one)
  })

  scenario('deletes a country', async (scenario) => {
    const original = await deleteCountry({
      id: scenario.country.one.id,
    })
    const result = await country({ id: original.id })

    expect(result).toEqual(null)
  })
})
