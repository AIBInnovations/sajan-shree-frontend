import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
// import Home from "./pages/Home";
import Orders from "./pages/Orders";
// import Products from "./pages/Products";
import NewOrder from "./pages/NewOrder";

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6">
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<NewOrder />} />
            <Route path="/orders" element={<Orders />} />
            {/* <Route path="/products" element={<Products />} /> */}
            <Route path="/new-order" element={<NewOrder />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
