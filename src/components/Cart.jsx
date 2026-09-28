import { useState } from "react";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem";

function Cart() {
  const { cart } = useCart();

  const [coupon, setCoupon] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const [couponMessage, setCouponMessage] = useState("");

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discount = (subtotal * discountPercent) / 100;
  const amountAfterDiscount = subtotal - discount;

  const gst = amountAfterDiscount * 0.18;
  const grandTotal = amountAfterDiscount + gst;

  const applyCoupon = () => {
    const code = coupon.trim().toUpperCase();

    if (code === "SAVE10") {
      setDiscountPercent(10);
      setCouponMessage("Coupon applied! 10% discount.");
    } else if (code === "SAVE20") {
      setDiscountPercent(20);
      setCouponMessage("Coupon applied! 20% discount.");
    } else {
      setDiscountPercent(0);
      setCouponMessage("Invalid coupon code.");
    }
  };

  return (
    <section className="cart-section">
      <h2>🛒 Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="coupon-section">
            <h3>🎟️ Coupon Code</h3>

            <div className="coupon-form">
              <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Enter coupon code"
              />

              <button onClick={applyCoupon}>Apply Coupon</button>
            </div>

            <p className="coupon-hint">
              Try: SAVE10 or SAVE20
            </p>

            {couponMessage && (
              <p className="coupon-message">{couponMessage}</p>
            )}
          </div>

          <div className="bill">
            <h3>💰 Order Summary</h3>

            <div className="bill-row">
              <span>Subtotal</span>
              <strong>₹{subtotal.toFixed(2)}</strong>
            </div>

            <div className="bill-row">
              <span>Discount ({discountPercent}%)</span>
              <strong>- ₹{discount.toFixed(2)}</strong>
            </div>

            <div className="bill-row">
              <span>GST (18%)</span>
              <strong>₹{gst.toFixed(2)}</strong>
            </div>

            <hr />

            <div className="bill-row grand-total">
              <span>Grand Total</span>
              <strong>₹{grandTotal.toFixed(2)}</strong>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default Cart;