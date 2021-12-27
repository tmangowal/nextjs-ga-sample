import React from "react";
import ProductCard from "../../components/ProductCard";
import Head from "next/head";

const ProductsPage = () => {
  return (
    <div>
      <Head>
        <title>Halaman Produk</title>
        <meta name="description" content="This is a page full of products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ProductCard />
      <h1>Products Page</h1>
    </div>
  );
};

export default ProductsPage;
