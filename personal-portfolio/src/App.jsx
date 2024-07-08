import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 1900);
  }, []);

  return (
    <div className="App">
      <h1>Hello, I'm Belarmino Júnior</h1>
    </div>
  );
}

export default App;
