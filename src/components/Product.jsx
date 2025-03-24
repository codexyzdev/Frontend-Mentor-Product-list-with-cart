import AddToCart from "./AddToCart";
export default function Product({ product }) {
  return (
    <li>
      <picture className='relative block mb-8 rounded-md'>
        <source media='(min-width: 1024px)' srcSet={product.image.desktop} />
        <source media='(min-width: 768px)' srcSet={product.image.tablet} />
        <img src={product.image.mobile} alt={product.name} className="rounded-md w-full" />
        <AddToCart id={product.name} />
      </picture>
      <span className="font-light">{product.category}</span>
      <p className="font-bold">{product.name}</p>
      <span className="text-red font-bold">${product.price}</span>
    </li>
  );
}
