export const schema = gql`
  type Department {
    id: BigInt!
    code: String!
    name: String
  }

  type Query {
    departments: [Department!]! @requireAuth
    department(id: BigInt!): Department @requireAuth
  }

  input CreateDepartmentInput {
    code: String!
    name: String
  }

  input UpdateDepartmentInput {
    code: String
    name: String
  }

  type Mutation {
    createDepartment(input: CreateDepartmentInput!): Department! @requireAuth
    updateDepartment(id: BigInt!, input: UpdateDepartmentInput!): Department!
      @requireAuth
    deleteDepartment(id: BigInt!): Department! @requireAuth
  }
`
