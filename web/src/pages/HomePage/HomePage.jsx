import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import CountriesCell from 'src/components/Country/CountriesCell'
import DepartmentsCell from 'src/components/Department/DepartmentsCell'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.jsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
      <hr />
      <CountriesCell />
      <hr />
      <DepartmentsCell />
    </>
  )
}

export default HomePage
