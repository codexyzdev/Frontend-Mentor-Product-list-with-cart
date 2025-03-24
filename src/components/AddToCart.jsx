import AddToCartIcon from "./icons/AddToCart";
import IconDecrementQuantity from "./icons/IconDecrementQuantity";
import IconIncrementQuantity from "./icons/IconIncrementQuantity";
import { useState, useContext, useEffect } from "react";
import "./icons/AddToCart.css";
import { StoreContext } from "./StoreContext";

export default function AddToCart({ id }) {
  const { cart, setCart } = useContext(StoreContext);
  const [count, setCount] = useState(0);

  // Sincronizar el contador con el carrito
  useEffect(() => {
    const item = cart.find((item) => item.id === id);
    setCount(item ? item.quantity : 0);
  }, [cart, id]);

  const handleAddToCart = () => {
    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, quantity: 1 }]);
    }
  };

  const handleIncrementQuantity = () => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrementQuantity = () => {
    const currentItem = cart.find((item) => item.id === id);

    if (currentItem.quantity === 1) {
      setCart(cart.filter((item) => item.id !== id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  if (count > 0) {
    return (
      <div className='py-2 px-4 flex items-center justify-between bg-red text-white rounded-full border font-normal gap-2 absolute -bottom-5 left-1/2 transform -translate-x-1/2 w-40'>
        <button
          onClick={handleDecrementQuantity}
          className='hover:scale-[1.5] cursor-pointer p-3'
        >
          <IconDecrementQuantity />
        </button>
        <span>{count}</span>
        <button
          onClick={handleIncrementQuantity}
          className='hover:scale-[1.5] cursor-pointer p-3'
        >
          <IconIncrementQuantity />
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={handleAddToCart}
      className=' p-[13px] hover:bg-red hover:text-white bg-white cursor-pointer rounded-full border font-normal gap-2 absolute -bottom-5 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-40'
    >
      <AddToCartIcon />
      Add to Cart
    </button>
  );
}
