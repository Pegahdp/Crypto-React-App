import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import CoinPage from "./routes.jsx/CoinPage";
import Home from "./routes.jsx/Home";
import Footer from "./components/Footer";
import Signin from "./routes.jsx/Signin";
import Signup from "./routes.jsx/Signup";
import Account from "./routes.jsx/Account";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [coins, setCoins] = useState([]);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true  ";

  const getCoinInfo = async () => {
    const response = await axios.get(url);
    setCoins(response.data);

  };

  useEffect(() => {
    getCoinInfo();
  }, [url]);

  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home coins={coins} />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
        <Route path= "/coin/:coinId" element={<CoinPage />}>
          <Route path=":coinId" />
        </Route>
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
