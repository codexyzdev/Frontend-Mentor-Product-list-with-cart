import Product from "./Product";
import { StoreContext } from "./StoreContext";
import { useContext } from "react";

export default function Products() {
  const { count, setCount, cart, setCart, products, setProducts } =
    useContext(StoreContext);
  

  return (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
      {products.map((product) => (
        <Product key={product.name} product={product} />
      ))}
    </ul>
  );
}
