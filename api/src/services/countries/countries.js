import { db } from 'src/lib/db'

export const countries = () => {
  return db.country.findMany()
}

export const country = ({ id }) => {
  return db.country.findUnique({
    where: { id },
  })
}

export const createCountry = ({ input }) => {
  return db.country.create({
    data: input,
  })
}

export const updateCountry = ({ id, input }) => {
  return db.country.update({
    data: input,
    where: { id },
  })
}

export const deleteCountry = ({ id }) => {
  return db.country.delete({
    where: { id },
  })
}
