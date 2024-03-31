import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "./layout.scss";

function App() {
  return (
    <>
      <div className="layout">
        <Navbar />
      </div>
      <Banner />
      <Footer />
    </>
  );
}

export default App;
