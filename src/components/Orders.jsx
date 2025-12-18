import { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        console.log("Token:", token); // Debug: check if token exists
        const response = await axios.get("https://react-backend-ecom-alax.onrender.com/orders", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("API Response:", response.data); // Debug: see what API returns
        setOrders(response.data.orders || []);
      } catch (error) {
        console.error("Failed to fetch orders", error);
        setError(error.response?.data?.message || error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) return <p className="text-center">Loading orders...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Your Orders</h1>

      {orders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        orders.map((order) => (
          <div key={order._id} className="border p-4 mb-6 rounded-lg w-full max-w-2xl">
            <div className="flex justify-between mb-3">
              <span className="font-semibold">Order ID: {order._id}</span>
              <span className="text-gray-500">
                {new Date(order.createdAt).toLocaleDateString()}
              </span>
            </div>

            <div className="flex flex-wrap gap-4">
              {order.products.map((item, index) => (
                <div
                  key={item.product?._id || index}
                  className="w-[200px] bg-amber-100 border flex flex-col p-3 rounded-md"
                >
                  {item.product ? (
                    <>
                      <img
                        src={item.product.imageurl}
                        alt={item.product.name}
                        className="w-full h-40 object-cover rounded-md"
                      />
                      <h1 className="text-xl font-bold">{item.product.name}</h1>
                      <h1 className="text-sm">₹{item.product.sellingPrice}</h1>
                    </>
                  ) : (
                    <p className="text-red-500">Product not found</p>
                  )}
                  <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  <button className="px-3 py-1 bg-gray-200 w-full rounded mt-2 border">
                    Buy Again
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;