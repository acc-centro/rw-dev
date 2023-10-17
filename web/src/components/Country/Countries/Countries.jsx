import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Country/CountriesCell'
import { truncate } from 'src/lib/formatters'

const DELETE_COUNTRY_MUTATION = gql`
  mutation DeleteCountryMutation($id: Int!) {
    deleteCountry(id: $id) {
      id
    }
  }
`

const CountriesList = ({ countries }) => {
  const [deleteCountry] = useMutation(DELETE_COUNTRY_MUTATION, {
    onCompleted: () => {
      toast.success('Country deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete country ' + id + '?')) {
      deleteCountry({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Region</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country) => (
            <tr key={country.id}>
              <td>{truncate(country.id)}</td>
              <td>{truncate(country.name)}</td>
              <td>{truncate(country.region)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.country({ id: country.id })}
                    title={'Show country ' + country.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editCountry({ id: country.id })}
                    title={'Edit country ' + country.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete country ' + country.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(country.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CountriesList
