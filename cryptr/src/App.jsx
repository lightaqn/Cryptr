import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import MainPage from "./components/MainPage.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <MainPage />
      <Footer />
    </div>
  );
}

export default App;
