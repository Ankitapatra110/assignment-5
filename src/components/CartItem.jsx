import { useCart } from "../context/CartContext";

function CartItem({ item }) {
  const { dispatch } = useCart();

  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <span className="cart-item-image">{item.image}</span>

        <div>
          <h3>{item.name}</h3>
          <p>₹{item.price} each</p>
        </div>
      </div>

      <div className="quantity-controls">
        <button
          onClick={() =>
            dispatch({
              type: "DECREASE_QUANTITY",
              payload: item.id,
            })
          }
        >
          −
        </button>

        <span>{item.quantity}</span>

        <button
          onClick={() =>
            dispatch({
              type: "INCREASE_QUANTITY",
              payload: item.id,
            })
          }
        >
          +
        </button>
      </div>

      <strong>₹{item.price * item.quantity}</strong>

      <button
        className="remove-button"
        onClick={() =>
          dispatch({
            type: "REMOVE_FROM_CART",
            payload: item.id,
          })
        }
      >
        Remove
      </button>
    </div>
  );
}

export default CartItem;