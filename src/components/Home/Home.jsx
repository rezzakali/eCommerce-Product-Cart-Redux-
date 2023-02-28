import React from 'react';
import { useSelector } from 'react-redux';
import ProductInputForm from './ProductInputForm';
import ProductItem from './ProductItem';

function Home() {
  const products = useSelector((state) => state.product);

  return (
    <main className="py-16">
      <div className="productWrapper">
        <div className="productContainer" id="lws-productContainer">
          {products?.length !== 0 ? (
            products?.map((product, id) => (
              <ProductItem key={id} product={product} id={id} />
            ))
          ) : (
            <p>No Product Found</p>
          )}
        </div>
        <ProductInputForm />
      </div>
    </main>
  );
}

export default Home;
