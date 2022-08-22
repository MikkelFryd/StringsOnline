import { BrowserRouter} from "react-router-dom"
import { AppRouter } from "./Components/Router/Router";
import { Home } from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <AppRouter>
          <Home />
      </AppRouter>
    </BrowserRouter>
  );
}

export default App;
