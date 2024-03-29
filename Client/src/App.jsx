import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Success from "./pages/Success";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import { useSelector } from "react-redux";
const App = () => {
  const user=useSelector(state=>state.user.currentUser);
  return (
    <Router>
      <Routes >
      <Route path="/" element={<Home />}> 
      </Route>
      <Route path="/products/:category" element={<ProductList />}> 
      </Route>
      <Route path="/product/:id" element={<Product />}> 
      </Route>
      <Route path="/cart" element={<Cart />}> 
      </Route>
      <Route path="/login" element=
         {user? <Navigate to="/"/> : <Login />}>
      </Route>
      <Route path="/register" element={user? <Navigate to="/"/> : <Register />} >
      </Route>
      <Route path="/success" element={<Success />}>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;