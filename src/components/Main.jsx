import Cart from "./Cart";
import Products from "./Products";

export default function Main() {
  return (
    <main className='max-w-6xl mx-auto lg:mt-12 lg:pb-12 p-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
      <section className='md:col-span-3 '>
        <h1 className="pb-4 font-bold text-2xl">Desserts</h1>
        <Products />
      </section>
      <Cart />
    </main>
  );
}
