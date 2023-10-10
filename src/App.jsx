import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/routes";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Router>
        <AnimatedRoutes />
        <Footer />
      </Router>
    </>
  );
}

export default App;
