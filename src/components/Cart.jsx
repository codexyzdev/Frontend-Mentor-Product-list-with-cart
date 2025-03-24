import { useContext } from "react";
import { StoreContext } from "./StoreContext";
import IconRemoveItem from "./icons/IconRemoveItem";
import "./Cart.css";

export default function Cart() {
  const { cart, setCart, products,ConfirmOrder } = useContext(StoreContext);
  const handleOpenModal = () => {
    ConfirmOrder.current.showModal();
  };

  const cartProducts = cart.map((item) => {
    const product = products.find((product) => product.name === item.id);
    return {
      ...product,
      quantity: item.quantity,
    };
  });

  const quantity = cartProducts.reduce((acc, product) => {
    return acc + product.quantity;
  }, 0);

  const total = cartProducts.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  const handleRemoveItem = (name) => {
    setCart(cart.filter((item) => item.id !== name));
  };

  return (
    <aside className='bg-white p-4 rounded-md lg:h-96 md:col-span-2 lg:col-span-[inset] flex flex-col justify-between'>
      <h2 className='text-xl font-bold text-red'>Your Cart ({quantity})</h2>
      <ul className='mt-4 space-y-4 md:h-48 overflow-y-auto'>
        {cartProducts.map((product, index) => (
          <li
            key={index}
            className='flex justify-between border-b pb-2 border-gray-200'
          >
            <div className='flex flex-col text-xs gap-1'>
              <span className='font-bold text-xs'>{product.name}</span>
              <div className='flex justify-between w-36 md:w-96 lg:w-36'>
                <span className='text-red font-bold'>{product.quantity}x</span>
                <span className='opacity-60'>@${product.price}</span>
                <span className='opacity-60 font-bold'>
                  ${product.price * product.quantity}
                </span>
              </div>
            </div>
            <button
              onClick={() => handleRemoveItem(product.name)}
              className=' hover:text-red self-end mr-4 rounded-full border hover:border-red '
            >
              <IconRemoveItem />
            </button>
          </li>
        ))}
      </ul>
      <div className='flex justify-between mt-4'>
        <span>Order Total</span>
        <span className='text-2xl'>${total.toFixed(2)}</span>
      </div>

      <p className='text-xs my-4 text-gray-500 flex items-center justify-center gap-1 bg-rose-100 p-2 rounded-md'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='21'
          height='20'
          fill='none'
          viewBox='0 0 21 20'
        >
          <path
            fill='#1EA575'
            d='M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z'
          />
          <path
            fill='#1EA575'
            d='M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z'
          />
        </svg>
        This is a <strong className='text-black'>carbon-neutral </strong>
        delivary
      </p>
      <button onClick={handleOpenModal} className=' p-[13px] bg-red text-white cursor-pointer rounded-full border font-normal gap-2 flex items-center justify-center w-full'>
        Confirm Order
      </button>
    </aside>
  );
}
