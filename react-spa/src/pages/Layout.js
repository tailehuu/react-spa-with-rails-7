import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/hooks">Hooks</Link>
        </li>
      </ul>

      <Outlet />
    </>
  )
}

export default Layout
