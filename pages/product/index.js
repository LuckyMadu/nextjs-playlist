import Link from "next/link";

function ProductList({ productId = 100 }) {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <h2>
        <Link href="/product/1">
          <a> product 1</a>
        </Link>
      </h2>
      <h2>
        <Link href="/product/2">
          <a> product 2</a>
        </Link>
      </h2>
      <h2>
        <Link href="/product/3">
          <a> product 3</a>
        </Link>
      </h2>
      <h2>
        <Link href={`/product/${productId}`}>
          <a> product {productId}</a>
        </Link>
      </h2>
    </div>
  );
}

export default ProductList;
