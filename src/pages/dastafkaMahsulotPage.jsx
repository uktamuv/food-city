import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartsContex";

function DastafkaMahsulotPage() {
  const [foodData, setFoodData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart } = useCart();

  const fetchData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/recipes");
      setFoodData(response.data.recipes);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredFoodData = foodData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-16 px-4 lg:px-0">
        <div className="w-full flex justify-center">

<div className="max-w-[1440px] mt-[7.2vh]  xl:mt-[6.2vh] fixed w-full top-[4vh]  ">
  <input
    type="text"
    placeholder="Qidiruv..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full p-2 border border-gray-300 rounded-md mb-4"
    />
</div>
    </div>
      <div className="mt-32 flex justify-start max-w-[1440px] mx-auto text-4xl">
        <h1>Mahsulotlar</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1440px] mx-auto">
        {filteredFoodData.length > 0 ? (
          filteredFoodData.map((item, index) => (
            <div key={index} className="p-4 flex flex-col justify-between rounded-lg bg-white shadow-md">
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md" />
              <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
              <p className="text-sm mt-1">{item.ingredients.join(", ")}</p>
              <div className="mt-2 flex justify-between text-sm">
                <span>{item.prepTimeMinutes}$</span>
                <p>{item.rating}</p>
              </div>
              <div className="w-full flex justify-between items-center gap-2 mt-3">
                <button
                  onClick={() => addToCart(item)}
                  className="w-full h-12 bg-black text-white rounded-lg flex items-center justify-center"
                >
                  Zakaz berish
                </button>
                <Link to="/cart">
                  <img src="69986.png" alt="Cart" className="w-8 h-8" />
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="w-full text-center">Loading...</p>
        )}
      </div>
    </div>
  );
}

export default DastafkaMahsulotPage;
