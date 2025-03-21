import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./components/screens/HomeScreen";
import Productscreen from "./components/screens/Productscreen";
import CartScreen from "./components/screens/CartScreen";
import LoginScreen from './components/screens/LoginScreen';
import RegisterScreen from './components/screens/RegisterScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
          <Route path="/" element={<HomeScreen/>} exact />
          <Route path="/product/:id" element={<Productscreen/>}exact/>
          <Route path="/cart/:id?" element={<CartScreen/>}exact/>
          <Route path="/login?" element={<LoginScreen/>}exact/>
          <Route path="/register" element={<RegisterScreen/>} exact />
          

          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
