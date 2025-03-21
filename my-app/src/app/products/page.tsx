import Link from "next/link";

export default function Products() {
  const productId = 100
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Here is the list of Products</h1>
      <h2>
        <Link href="/products/1" replace>Product List - 1</Link>
        {/* replace override the current history and takes oyu direclty to home page */}
      </h2>
      <h2>Product List - 2</h2>
      <h2>Product List - 3</h2>
      <h2>Product List - 4</h2>
      <h2>
        <Link href={`/products/${productId}`}>
        Product List - 100
        </Link>
      </h2>
    </>
  );
}
