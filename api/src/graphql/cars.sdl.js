export const schema = gql`
  type Car {
    id: Int!
    make: String!
    model: String!
    year: Int!
    color: String!
    mileage: Float!
    vinNumber: String!
  }

  type Query {
    cars: [Car!]! @requireAuth
    car(id: Int!): Car @requireAuth
  }

  input CreateCarInput {
    make: String!
    model: String!
    year: Int!
    color: String!
    mileage: Float!
    vinNumber: String!
  }

  input UpdateCarInput {
    make: String
    model: String
    year: Int
    color: String
    mileage: Float
    vinNumber: String
  }

  type Mutation {
    createCar(input: CreateCarInput!): Car! @requireAuth
    updateCar(id: Int!, input: UpdateCarInput!): Car! @requireAuth
    deleteCar(id: Int!): Car! @requireAuth
  }
`
