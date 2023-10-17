import { Link, routes } from '@redwoodjs/router'

import Countries from 'src/components/Country/Countries'

export const QUERY = gql`
  query FindCountries {
    countries {
      id
      name
      region
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No countries yet. '}
      <Link to={routes.newCountry()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ countries }) => {
  return <Countries countries={countries} />
}
