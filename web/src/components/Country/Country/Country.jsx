import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import 'src/lib/formatters'

const DELETE_COUNTRY_MUTATION = gql`
  mutation DeleteCountryMutation($id: Int!) {
    deleteCountry(id: $id) {
      id
    }
  }
`

const Country = ({ country }) => {
  const [deleteCountry] = useMutation(DELETE_COUNTRY_MUTATION, {
    onCompleted: () => {
      toast.success('Country deleted')
      navigate(routes.countries())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete country ' + id + '?')) {
      deleteCountry({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Country {country.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{country.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{country.name}</td>
            </tr>
            <tr>
              <th>Region</th>
              <td>{country.region}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCountry({ id: country.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(country.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Country
