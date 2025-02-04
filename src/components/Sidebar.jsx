// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const links = [
      // { name: "Home", path: "/" },
      { name: "New Order", path: "/new-order" },
      { name: "Orders", path: "/orders" },
      // { name: "Products", path: "/products" },
  ];

  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Sajan Shree</h2>
      <nav>
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `block py-2 px-4 rounded ${isActive ? "bg-gray-600" : "hover:bg-gray-700"}`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
