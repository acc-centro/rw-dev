import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import 'src/lib/formatters'

const DELETE_DEPARTMENT_MUTATION = gql`
  mutation DeleteDepartmentMutation($id: BigInt!) {
    deleteDepartment(id: $id) {
      id
    }
  }
`

const Department = ({ department }) => {
  const [deleteDepartment] = useMutation(DELETE_DEPARTMENT_MUTATION, {
    onCompleted: () => {
      toast.success('Department deleted')
      navigate(routes.departments())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete department ' + id + '?')) {
      deleteDepartment({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Department {department.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{department.id}</td>
            </tr>
            <tr>
              <th>Code</th>
              <td>{department.code}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{department.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editDepartment({ id: department.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(department.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Department
