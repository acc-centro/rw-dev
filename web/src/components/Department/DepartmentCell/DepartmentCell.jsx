import Department from 'src/components/Department/Department'

export const QUERY = gql`
  query FindDepartmentById($id: BigInt!) {
    department: department(id: $id) {
      id
      code
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Department not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ department }) => {
  return <Department department={department} />
}
