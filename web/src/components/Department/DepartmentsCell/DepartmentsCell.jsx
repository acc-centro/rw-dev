import { Link, routes } from '@redwoodjs/router'

import Departments from 'src/components/Department/Departments'

export const QUERY = gql`
  query FindDepartments {
    departments {
      id
      code
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No departments yet. '}
      <Link to={routes.newDepartment()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ departments }) => {
  return <Departments departments={departments} />
}
