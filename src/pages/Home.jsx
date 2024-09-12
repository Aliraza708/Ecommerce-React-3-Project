
import { useContext, useEffect } from "react";
import Product from "./Product";
import { themeContext } from "../Context/Theme";
import '../App.css';

function Home() {
  const { theme } = useContext(themeContext);

  useEffect(() => {
    document.body.className = theme === "Dark" ? "light-theme" : "dark-theme";
        return () => {
      document.body.className = "";
    };
  }, [theme]);

  return (
    <div>
      <Product />
    </div>
  );
}

export default Home;
