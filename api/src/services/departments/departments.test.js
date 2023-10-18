import {
  departments,
  department,
  createDepartment,
  updateDepartment,
  deleteDepartment,
} from './departments'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('departments', () => {
  scenario('returns all departments', async (scenario) => {
    const result = await departments()

    expect(result.length).toEqual(Object.keys(scenario.department).length)
  })

  scenario('returns a single department', async (scenario) => {
    const result = await department({ id: scenario.department.one.id })

    expect(result).toEqual(scenario.department.one)
  })

  scenario('creates a department', async () => {
    const result = await createDepartment({
      input: { code: 'String8911909' },
    })

    expect(result.code).toEqual('String8911909')
  })

  scenario('updates a department', async (scenario) => {
    const original = await department({
      id: scenario.department.one.id,
    })
    const result = await updateDepartment({
      id: original.id,
      input: { code: 'String15153952' },
    })

    expect(result.code).toEqual('String15153952')
  })

  scenario('deletes a department', async (scenario) => {
    const original = await deleteDepartment({
      id: scenario.department.one.id,
    })
    const result = await department({ id: original.id })

    expect(result).toEqual(null)
  })
})
