import {NavLink,Link} from "react-router-dom"
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/" className="font-semibold text-xl tracking-tight">Logo</Link>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="lg:flex-grow">
          <NavLink exact to="/" activeClassName="text-white" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="text-white" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4">
            About
          </NavLink>
          <NavLink to="/contact" activeClassName="text-white" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;