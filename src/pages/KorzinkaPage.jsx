import React from "react";
import { useCart } from "../context/mahsulotContex";
import { Link } from "react-router-dom";

const CartPage = () => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.prepTimeMinutes * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-lg mt-[20vh] max-w-[1440px] mx-auto">
      <h2 className="text-2xl font-semibold p-4">Mahsulotlar {cart.length}</h2>
      {cart.length === 0 ? (
        <div className="flex flex-col items-center gap-8">
          <Link
            to={"/ProductPage"}
            className="text-[28px] border text-white bg-black border-black rounded-md px-8 py-1"
          >
            Qoshish
          </Link>

          <p className="text-[22px]">Mahsulot Yoq</p>
        </div>
      ) : (
        <div>
          <ul className="">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center mb-2 border-b border-gray-300 pb-2"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover mr-4 select-none"
                  />
                  <span>{item.name}</span>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 select-none"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="bg-green-500 text-white px-2 py-1 rounded mr-2 select-none"
                  >
                    +
                  </button>
                  <span>
                    ${(item.prepTimeMinutes * item.quantity).toFixed(2)}
                  </span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded ml-2 select-none"
                  >
                    O'chirish
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 text-lg font-semibold">
            <p>Jami summa: ${calculateTotal()}</p>
          </div>
          <button
            onClick={() => clearCart()}
            className="mt-4 bg-[black] text-white px-4 py-2 rounded"
          >
            Hammasini o'chirish
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
