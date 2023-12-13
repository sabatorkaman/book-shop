import { BrowserRouter as Router , Routes , Route } from "react-router-dom"
import Shop from "./pages/shop/shop";
import "bootstrap/dist/css/bootstrap.min.css"
import Cart from "./pages/cart/Cart";
import Header from "./component/header/Header";
import { ShopeContextProvider } from "./context/ShopContext";
import Wellcom from "./component/wellcome/Wellcom";
import About from "./pages/about/About";
import "./index.css"
function App() {
  return (
    <div className="App bg-custom">
      <ShopeContextProvider>
     <Router>
    <Header/>
    <Wellcom/>
      <Routes>
    <Route path="/" element={<Shop/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/about" element={<About/>}/>
      </Routes>
   
     </Router>
     </ShopeContextProvider>
    </div>
  );
}

export default App;
