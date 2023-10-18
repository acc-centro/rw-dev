// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={ScaffoldLayout} title="Departments" titleTo="departments" buttonLabel="New Department" buttonTo="newDepartment">
        <Route path="/departments/new" page={DepartmentNewDepartmentPage} name="newDepartment" />
        <Route path="/departments/{id}/edit" page={DepartmentEditDepartmentPage} name="editDepartment" />
        <Route path="/departments/{id}" page={DepartmentDepartmentPage} name="department" />
        <Route path="/departments" page={DepartmentDepartmentsPage} name="departments" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Cars" titleTo="cars" buttonLabel="New Car" buttonTo="newCar">
        <Route path="/cars/new" page={CarNewCarPage} name="newCar" />
        <Route path="/cars/{id:Int}/edit" page={CarEditCarPage} name="editCar" />
        <Route path="/cars/{id:Int}" page={CarCarPage} name="car" />
        <Route path="/cars" page={CarCarsPage} name="cars" />
      </Set>
      <Set wrap={ScaffoldLayout} title="Countries" titleTo="countries" buttonLabel="New Country" buttonTo="newCountry">
        <Route path="/countries/new" page={CountryNewCountryPage} name="newCountry" />
        <Route path="/countries/{id:Int}/edit" page={CountryEditCountryPage} name="editCountry" />
        <Route path="/countries/{id:Int}" page={CountryCountryPage} name="country" />
        <Route path="/countries" page={CountryCountriesPage} name="countries" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
