const OrderSummary = ({ cart }) => {
  const total = cart.reduce(
    (sum, item) => sum + (item.product?.sellingPrice || 0) * item.quantity,
    0
  );

  return (
    <div className="border border-gray-300 p-5 bg-amber-50 rounded-lg w-64 h-50">
      <h2 className="text-xl font-semibold mb-3">Order Summary</h2>

      <div className="flex justify-between mb-2">
        <span>Subtotal:</span>
        <span>₹{total}</span>
      </div>

      <div className="flex justify-between font-bold text-lg">
        <span>Total:</span>
        <span>₹{total}</span>
      </div>
    </div>
  );
};

export default OrderSummary;