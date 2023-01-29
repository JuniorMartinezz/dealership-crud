import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
import Header from './components/Header/Header';
import VehicleInput from './components/VehicleInput/VehicleInput';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <VehicleInput />
      <Footer />
    </Router>
  );
}

export default App;
