import { BrowserRouter} from "react-router-dom"
import Style from './app.module.scss'
import { AuthProvider } from "./Components/Auth/AuthContext";
import { CartProvider } from "./Components/Auth/CartContext";
import { SideNav } from "./Components/Nav/SideNav"
import { Footer } from "./Components/Partials/Footer"
import { Header } from "./Components/Partials/Header"
import { AppRouter } from "./Components/Router/AppRouter";

function App() {
  
  return (
    <BrowserRouter>
    <AuthProvider>
      <CartProvider>
      <Header/>
      <div className={Style.gridcontainer}>
        <SideNav/>
      <AppRouter>

      </AppRouter>
      </div>
        <Footer/>
      </CartProvider>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
