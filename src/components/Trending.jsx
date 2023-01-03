import { useState, useEffect } from "react";
import axios from "axios";

function Trending() {
  const [trending, setTrending] = useState([]);
  const url = "https://api.coingecko.com/api/v3/search/trending";

  const getResponse = async () => {
    const response = await axios.get(url);
    setTrending(response.data.coins);
    console.log(response.data.coins);
  };
  useEffect(() => {
    getResponse();
  }, []);

  return (
    <div className="rounded-div my-12 py-8 text-primary">
      <h1 className="text-2xl font-bold py-4">Trending</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {trending.map((coin) => (
          <div className="rounded-div flex flex-between p-4 hover:scale-105 ease-in-out duration-300">
            <div className="flex w-full justify-between items-center">
              <div className="flex">
                <img src={coin.item.small} alt="/" />
                <div className="font-bold">{coin.item.name}</div>
                <div>{coin.item.symbol}</div>
              </div>
              <div>
                <img
                className="w-4 mr-2"
                  src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                  alt="/"
                />
                 <p>{coin.item.price_btc.toFixed(7)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trending;
