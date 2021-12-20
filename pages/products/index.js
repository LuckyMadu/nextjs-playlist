import Link from "next/link";

function ProductList({ products }) {
  return (
    <>
      <h1>List of products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <Link href={`products/${product.id}`} passHref>
            <h3>
              {product.id} {product.name} {product.price}
            </h3>
          </Link>

          <hr />
        </div>
      ))}
    </>
  );
}

export default ProductList;

export async function getStaticProps() {
  console.log("Gernerating / Regenerating product list");
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();

  return {
    props: {
      products: data,
    },
    revalidate: 30,
  };
}
