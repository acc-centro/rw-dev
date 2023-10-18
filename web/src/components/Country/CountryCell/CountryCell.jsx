import Country from 'src/components/Country/Country'

export const QUERY = gql`
  query FindCountryById($id: Int!) {
    country: country(id: $id) {
      id
      name
      region
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Country not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ country }) => {
  return <Country country={country} />
}
