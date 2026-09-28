import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>🛍️ Online Shopping Cart</h1>
        <p>Shop your favorite products</p>
      </header>

      <main className="container">
        <ProductList />
        <Cart />
      </main>
    </div>
  );
}

export default App;