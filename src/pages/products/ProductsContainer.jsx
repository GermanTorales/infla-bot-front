import { useEffect, useState } from 'react';

import { Products } from './Products';
import { getProductsService } from '../../services';

export function ProductsContainer() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleFindProducts = async name => {
    const filterProducts = products.filter(product => {
      return product.name.toLowerCase().includes(name.toLowerCase());
    });

    setFilteredProducts(filterProducts);
  };

  useEffect(() => {
    const fn = async () => {
      const response = await getProductsService();

      setProducts(response.data.list);
      setFilteredProducts(response.data.list);
    };

    fn();
  }, []);

  return <Products products={products} filteredProducts={filteredProducts} handleFindProducts={handleFindProducts} />;
}
