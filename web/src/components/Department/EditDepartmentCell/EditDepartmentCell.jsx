import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import DepartmentForm from 'src/components/Department/DepartmentForm'

export const QUERY = gql`
  query EditDepartmentById($id: BigInt!) {
    department: department(id: $id) {
      id
      code
      name
    }
  }
`
const UPDATE_DEPARTMENT_MUTATION = gql`
  mutation UpdateDepartmentMutation(
    $id: BigInt!
    $input: UpdateDepartmentInput!
  ) {
    updateDepartment(id: $id, input: $input) {
      id
      code
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ department }) => {
  const [updateDepartment, { loading, error }] = useMutation(
    UPDATE_DEPARTMENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Department updated')
        navigate(routes.departments())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateDepartment({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Department {department?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <DepartmentForm
          department={department}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
