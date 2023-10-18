import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import DepartmentForm from 'src/components/Department/DepartmentForm'

const CREATE_DEPARTMENT_MUTATION = gql`
  mutation CreateDepartmentMutation($input: CreateDepartmentInput!) {
    createDepartment(input: $input) {
      id
    }
  }
`

const NewDepartment = () => {
  const [createDepartment, { loading, error }] = useMutation(
    CREATE_DEPARTMENT_MUTATION,
    {
      onCompleted: () => {
        toast.success('Department created')
        navigate(routes.departments())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createDepartment({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Department</h2>
      </header>
      <div className="rw-segment-main">
        <DepartmentForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewDepartment
