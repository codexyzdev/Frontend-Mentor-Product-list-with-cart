import "./ConfirmOrder.css";
import { useContext } from "react";
import { StoreContext } from "./StoreContext";
export default function ConfirmOrder() {
  const { cart, ConfirmOrder, products } = useContext(StoreContext);
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

  const handleCloseModal = () => {
    ConfirmOrder.current.close();
  };
  const handleCancel = () => {
    handleCloseModal();
  };
  const handleAccept = () => {
    console.log("Order confirmed");
    handleCloseModal;
  };

  const modal = (e) => {
    const dialogDimensions = ConfirmOrder.current.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      ConfirmOrder.current.close();
    }
  };
  return (
    <dialog ref={ConfirmOrder} onClick={(e) => modal(e)} className='modal'>
      <div className='modal-contenido'>
        <ul className='overflow-y-auto flex flex-col bg-rose-100 rounded-md '>
          {cartProducts.map((product, index) => (
            <li
              key={index}
              className='flex justify-between border-b border-gray-200 p-4'
            >
              <div className='flex  text-xs gap-4'>
                <img
                  src={product.image.thumbnail}
                  alt={product.name}
                  className='w-16 h-16 rounded-md'
                />
                <div className='flex flex-col justify-between py-3 '>
                  <span className='font-bold text-xs'>{product.name}</span>
                  <div className='flex gap-8'>
                    <span className='text-red font-bold'>
                      {product.quantity}x
                    </span>
                    <span className='opacity-60'>@${product.price}</span>
                  </div>
                </div>
              </div>
              <span className=' block font-bold self-center'>
                ${product.price * product.quantity}
              </span>
            </li>
          ))}
          <li className='flex justify-between mt-4 p-4'>
            <span>Order Total</span>
            <span className='text-2xl'>${total.toFixed(2)}</span>
          </li>
        </ul>
      </div>
    </dialog>
  );
}
