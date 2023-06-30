import CartPage from "../Pages/CartPage";
import Navbar from "../components/Navbar";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <CartPage />
      {children}
    </div>
  );
};

export default Layout;
