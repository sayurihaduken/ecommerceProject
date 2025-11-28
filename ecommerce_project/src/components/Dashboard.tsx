import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaShoppingCart, FaUser, FaBars, FaBell, FaSearch } from "react-icons/fa";
import "./Dashboard.css";

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  image: string; // added for image URL
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // 10 example products
  const [products] = useState<Product[]>([
    { id: 1, name: "Laptop", price: 45000, stock: 10, image: "https://via.placeholder.com/150?text=Laptop" },
    { id: 2, name: "Smartphone", price: 25000, stock: 15, image: "https://via.placeholder.com/150?text=Smartphone" },
    { id: 3, name: "Headphones", price: 5000, stock: 20, image: "https://via.placeholder.com/150?text=Headphones" },
    { id: 4, name: "Camera", price: 18000, stock: 8, image: "https://via.placeholder.com/150?text=Camera" },
    { id: 5, name: "Watch", price: 8000, stock: 12, image: "https://via.placeholder.com/150?text=Watch" },
    { id: 6, name: "Keyboard", price: 2500, stock: 30, image: "https://via.placeholder.com/150?text=Keyboard" },
    { id: 7, name: "Mouse", price: 1500, stock: 40, image: "https://via.placeholder.com/150?text=Mouse" },
    { id: 8, name: "Printer", price: 12000, stock: 5, image: "https://via.placeholder.com/150?text=Printer" },
    { id: 9, name: "Speaker", price: 4000, stock: 18, image: "https://via.placeholder.com/150?text=Speaker" },
    { id: 10, name: "Tablet", price: 18000, stock: 14, image: "https://via.placeholder.com/150?text=Tablet" },
  ]);

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <h2 className="sidebar-logo">LARAVELShop</h2>
        <nav>
          <ul>
            <li className="home" onClick={() => navigate("/home")}><FaHome  style={{ marginRight: "10px" }} />Home</li>
            <li><FaShoppingCart  style={{ marginRight: "10px" }} />Orders</li>
            <li className="profile" onClick={() => navigate("/profile")}><FaUser  style={{ marginRight: "10px" }} />Profile</li>
            <li className="signout-btn" onClick={() => navigate("/login")}>Sign Out</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className={`main ${sidebarOpen ? "sidebar-open" : ""}`}>
        {/* Top Navbar */}
        <header className="top-navbar">
          <FaBars className="menu-icon" onClick={toggleSidebar} />
          <h2>WELCOME TO LARAVELShop</h2>
          <div className="search-notifications">
            <div className="search-bar">
              <FaSearch />
              <input type="text" placeholder="Search products..." />
            </div>
            <FaBell className="notification-icon" />
          </div>
        </header>

        {/* PRODUCT LIST GRID */}
        <section className="marketplace">
          <div className="marketplace-grid">
            {products.length === 0 && <p>No products available.</p>}

            {products.map((p) => (
              <div key={p.id} className="marketplace-card">
                <div className="product-image">
                  <img src={p.image} alt={p.name} />
                </div>
                <h3>{p.name}</h3>
                <p>₱{p.price}</p>
                <p>Stock: {p.stock}</p>
                <button>Buy</button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;


  
