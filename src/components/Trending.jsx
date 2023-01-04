import { useState, useEffect } from "react";
import axios from "axios";
import TrendingItem from "./TrendingItem";

function Trending() {
  const [trending, setTrending] = useState([]);
  const url = "https://api.coingecko.com/api/v3/search/trending";

  const getResponse = async () => {
    const response = await axios.get(url);
    setTrending(response.data.coins);
  };
  useEffect(() => {
    getResponse();
  }, []);

  return (
    <div className="rounded-div my-12 py-6 text-primary">
      <h1 className="text-2xl font-bold py-4">Trending</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {trending.map((coin, idx) => (
          <TrendingItem coin={coin}  key={idx}/>
        ))}
      </div>
    </div>
  );
}

export default Trending;
