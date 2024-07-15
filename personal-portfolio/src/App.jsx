import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { SyncLoader } from "react-spinners";

import Nav from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import MoveToTop from "./components/MoveToTop";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1900);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loader">
          <SyncLoader
            color={"#011c38"}
            loading={true}
            size={200}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <Nav />
          <MoveToTop />
          <TransitionGroup>
            <CSSTransition key={location.key} className="fade" timeout={500}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/project" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
