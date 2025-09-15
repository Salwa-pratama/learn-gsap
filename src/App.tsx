import { Routes, Route } from "react-router-dom";
import Header from "./pages/templates/Header";
import Home from "./pages/Home";
import P1 from "./pages/P1";
import P2 from "./pages/P2";
import Footer from "./pages/templates/Footer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Header />

      <main className="flex-grow-1 bg-dark ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/episode-1" element={<P1 />} />
          <Route path="/episode-2" element={<P2 />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
