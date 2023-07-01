
import NavbarLayout from '../components/navbar/Navbar'

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div>
    <NavbarLayout></NavbarLayout>
    {children}
    </div>
  )
}

export default Layout