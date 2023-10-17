import { cars, car, createCar, updateCar, deleteCar } from './cars'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('cars', () => {
  scenario('returns all cars', async (scenario) => {
    const result = await cars()

    expect(result.length).toEqual(Object.keys(scenario.car).length)
  })

  scenario('returns a single car', async (scenario) => {
    const result = await car({ id: scenario.car.one.id })

    expect(result).toEqual(scenario.car.one)
  })

  scenario('creates a car', async () => {
    const result = await createCar({
      input: {
        make: 'String',
        model: 'String',
        year: 7441249,
        color: 'String',
        mileage: 5620926.721411379,
        vinNumber: 'String3587305',
      },
    })

    expect(result.make).toEqual('String')
    expect(result.model).toEqual('String')
    expect(result.year).toEqual(7441249)
    expect(result.color).toEqual('String')
    expect(result.mileage).toEqual(5620926.721411379)
    expect(result.vinNumber).toEqual('String3587305')
  })

  scenario('updates a car', async (scenario) => {
    const original = await car({ id: scenario.car.one.id })
    const result = await updateCar({
      id: original.id,
      input: { make: 'String2' },
    })

    expect(result.make).toEqual('String2')
  })

  scenario('deletes a car', async (scenario) => {
    const original = await deleteCar({ id: scenario.car.one.id })
    const result = await car({ id: original.id })

    expect(result).toEqual(null)
  })
})
