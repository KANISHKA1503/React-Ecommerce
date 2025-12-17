import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import OrderSummary from "./OrderSummary";
import axios from "axios"
import { toast } from "react-toastify";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setCart(data.cart?.products || []);
    };
    fetchData();
  }, [token]);


  const updateQty = (id, quantity) => {
    if (quantity < 1) return;
    setCart((prev) =>
      prev.map((item) =>
        item.product._id === id ? { ...item, quantity } : item
      )
    );
  };

  const handleCheckout = async () => {
    try {
      await axios.post(
        "http://localhost:3000/orders/checkout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Order placed successfully!");
      setCart([]);
      navigate("/orders");
    } catch (error) {
      toast.error(error.response?.data?.error || "Checkout failed");
    }
  };

  return (
  
  <div className="p-6">
  <h1 className="text-center text-2xl font-bold mb-6">Toy Shop Cart</h1>

  <div className="flex justify-center gap-10">

    <div className="flex flex-col gap-6">
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.product._id}
            className="border border-gray-300 bg-amber-100 p-4 w-64 rounded-lg"
          >
            <img
              src={item.product.imageurl}
              alt={item.product.name}
              className="w-full h-60 object-cover rounded-md"
            />

            <h3 className="text-lg font-semibold mt-2">{item.product.name}</h3>
            <p className="text-gray-700">₹{item.product.sellingPrice}</p>

            <div className="flex items-center gap-3 mt-3">
              <button
                className="px-3 py-1 bg-gray-200 rounded"
                onClick={() => updateQty(item.product._id, item.quantity - 1)}
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                className="px-3 py-1 bg-gray-200 rounded"
                onClick={() => updateQty(item.product._id, item.quantity + 1)}
              >
                +
              </button>

              <button
                className="px-3 py-1 bg-gray-200 rounded"
                onClick={() => {
                  setCart((prev) =>
                    prev.filter((p) => p.product._id !== item.product._id)
                  );
                  toast.success("Product Removed Successfully");
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>

    <div className="flex flex-col gap-4">
      <OrderSummary cart={cart} />
      {cart.length > 0 && (
        <button
          onClick={handleCheckout}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
        >
          Place Order
        </button>
      )}
    </div>
  </div>
</div>

  )
}
export default Cart;