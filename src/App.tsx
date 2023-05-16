import "./app.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import Checkout from "./components/Checkout/Checkout";
function App() {
  return (
    <div className="app">
      <Sidebar />
      <Content />
      <Checkout />
    </div>
  );
}

export default App;
