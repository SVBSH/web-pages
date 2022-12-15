import PropTypes from 'prop-types';
import axios from 'axios';
import { useEffect, useState } from 'react';

import './Products.css';
import ProductInfo from '../components/EshopOffer/ProductInfo/ProductInfo';
import ProductInfoLoading from '../components/EshopOffer/ProductInfo/ProductInfoLoading';
import EshopOffers from '../components/EshopOffers/EshopOffers';


const Products = ({ pageTitle, fetchURL }) => {
  const [contentLoaded, setContentLoaded] = useState(false);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios(fetchURL);
        setProducts(response.data);
        setContentLoaded(true);
      }
      catch (e) {
        console.error(e);
      }
    }
    fetchProducts();
  }
    , [fetchURL]
  )

  return (
    <main className="products">

      <div className="products__heading-container color-outside-container" style={{ '--bg-color': 'var(--bg-black-3)' }} >
        <h1 className="products__heading uppercase font-bold text-center tracking-wide text-3xl text-white-4">
          {pageTitle}
        </h1>
      </div>


      <div className="product-container color-outside-container grid grid-row">
        {contentLoaded
          ? products.map(product =>
            <ProductInfo
              key={product.id}
              id={product.id}
              productTitle={product.name}
              productDescription={product.description}
              productImages={product.categoryImage}
            />
          )
          :
          <ProductInfoLoading
            key={'1'}
            id={'1'}
            productTitle={'ProductName'}
            productDescription={'product.description'}
            productImages={'product.categoryImage'}
          />
        }

      </div>

      <div className="color-outside-container">
        <EshopOffers />
      </div>
    </main>

  )
}


Products.propTypes = {
  fetchURL: PropTypes.string.isRequired,
}




export default Products;