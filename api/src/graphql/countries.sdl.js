export const schema = gql`
  type Country {
    id: Int!
    name: String
    region: String
  }

  type Query {
    countries: [Country!]! @requireAuth
    country(id: Int!): Country @requireAuth
  }

  input CreateCountryInput {
    name: String
    region: String
  }

  input UpdateCountryInput {
    name: String
    region: String
  }

  type Mutation {
    createCountry(input: CreateCountryInput!): Country! @requireAuth
    updateCountry(id: Int!, input: UpdateCountryInput!): Country! @requireAuth
    deleteCountry(id: Int!): Country! @requireAuth
  }
`
