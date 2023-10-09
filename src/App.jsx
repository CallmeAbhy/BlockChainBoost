import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./views/Home";
import Project from "./views/Project";
import { isWallectConnected } from "./services/blockchain";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(async () => {
    await isWallectConnected();
    console.log("Blockchain loaded");
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen relative">
      {loaded ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      ) : null}

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />

      <Footer />
    </div>
  );
};

export default App;
