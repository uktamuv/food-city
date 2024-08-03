import React, { useEffect, useState } from "react";
import axios from "axios";
import HomeMenu from "../component/HomeMenu";
import { useCart } from "../context/mahsulotContex";

const ProductPage = () => {
  const [foodData, setFoodData] = useState([]);
  const [foodData2, setFoodData2] = useState([]);
  const [foodData3, setFoodData3] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart } = useCart();

  const fetchData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/recipes");
      setFoodData(response.data.recipes);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchData2 = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/recipes?sortBy=name&order=asc");
      setFoodData2(response.data.recipes);
    } catch (error) {
      console.error("Error fetching data2:", error);
    }
  };

  const fetchData3 = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/recipes/meal-type/snack");
      setFoodData3(response.data.recipes);
    } catch (error) {
      console.error("Error fetching data3:", error);
    }
  };

  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      await fetchData();
      await fetchData2();
      await fetchData3();
      setLoading(false);
    };

    fetchAllData();
  }, []);

  const filteredFoodData = foodData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredFoodData2 = foodData2.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredFoodData3 = foodData3.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const noData = !loading &&
    filteredFoodData.length === 0 &&
    filteredFoodData2.length === 0 &&
    filteredFoodData3.length === 0;

  return (
    <div>
      <div className="flex flex-col items-center w-full">
        <HomeMenu />
        <div className="w-full flex justify-center">
          <div className="max-w-[1440px] mt-[6.2vh] fixed w-full top-[4vh]">
            <input
              type="text"
              placeholder="Qidiruv..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md mb-4"
            />
          </div>
        </div>
        {loading ? (
          <p className="w-full text-center">Loading...</p>
        ) : noData ? (
          <p className="w-full text-center">Bunday mahsulot yo'q</p>
        ) : (
          <div>
            {filteredFoodData.length > 0 && (
              <div>
                <div className="mt-[15vh] flex justify-start max-w-[1440px] mx-auto text-4xl">
                  <h1>Aralash</h1>
                </div>
                <div className="grid grid-cols-1  sm:grid-cols-2 gap-7 max-w-[1440px] lg:grid-cols-3 2xl:grid-cols-4 mx-auto mt-[2vh]">
                  {filteredFoodData.slice(0, 12).map((item) => (
                    <div
                      key={item.id}
                      className="border border-black p-4 flex flex-col justify-between rounded-sm"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-40 object-cover rounded-sm"
                      />
                      <h3 className="text-xl mt-2">{item.name}</h3>
                      <p className="text-sm text-gray-600">
                        {item.ingredients.join(", ")}
                      </p>
                      <div className="mt-2 flex justify-between items-center">
                        <span className="text-lg font-semibold">
                          ${item.prepTimeMinutes}
                        </span>
                        <p className="text-lg font-semibold">{item.rating}</p>
                      </div>
                      <div className="w-full mx-1 flex justify-center mt-3">
                        <button
                          className="w-full h-12 bg-black text-white rounded-lg"
                          onClick={() => {
                            console.log('Adding item to cart:', item);
                            addToCart(item);
                          }}
                        >
                          Zakaz berish
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {filteredFoodData2.length > 0 && (
              <div>
                <div className="mt-[19vh] flex justify-start max-w-[1440px] mx-auto text-4xl">
                  <h1>Aralash</h1>
                </div>
                <div className="grid grid-cols-4 gap-7 max-w-[1440px] mx-auto mt-[2vh]">
                  {filteredFoodData2.slice(0, 12).map((item) => (
                    <div
                      key={item.id}
                      className="border border-black p-4 flex flex-col justify-between rounded-sm"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-40 object-cover rounded-sm"
                      />
                      <h3 className="text-xl mt-2">{item.name}</h3>
                      <p className="text-sm text-gray-600">
                        {item.ingredients.join(", ")}
                      </p>
                      <div className="mt-2 flex justify-between items-center">
                        <span className="text-lg font-semibold">
                          ${item.prepTimeMinutes}
                        </span>
                        <p className="text-lg font-semibold">{item.rating}</p>
                      </div>
                      <div className="w-full mx-1 flex justify-center mt-3">
                        <button
                          className="w-full h-12 bg-black text-white rounded-lg"
                          onClick={() => {
                            console.log('Adding item to cart:', item);
                            addToCart(item);
                          }}
                        >
                          Zakaz berish
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {filteredFoodData3.length > 0 && (
              <div>
                <div className="mt-[19vh] flex justify-start max-w-[1440px] mx-auto text-4xl">
                  <h1>Aralash</h1>
                </div>
                <div className="grid grid-cols-4 gap-7 max-w-[1440px] mx-auto mt-[2vh]">
                  {filteredFoodData3.slice(0, 12).map((item) => (
                    <div
                      key={item.id}
                      className="border border-black p-4 flex flex-col justify-between rounded-sm"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-40 object-cover rounded-sm"
                      />
                      <h3 className="text-xl mt-2">{item.name}</h3>
                      <p className="text-sm text-gray-600">
                        {item.ingredients.join(", ")}
                      </p>
                      <div className="mt-2 flex justify-between items-center">
                        <span className="text-lg font-semibold">
                          ${item.prepTimeMinutes}
                        </span>
                        <p className="text-lg font-semibold">{item.rating}</p>
                      </div>
                      <div className="w-full mx-1 flex justify-center mt-3">
                        <button
                          className="w-full h-12 bg-black text-white rounded-lg"
                          onClick={() => {
                            console.log('Adding item to cart:', item);
                            addToCart(item);
                          }}
                        >
                          Zakaz berish
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
