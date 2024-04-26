import { useEffect, useState } from 'react';
import { Home } from './Home';
import { getProductCountService } from '../../services/v1/product';

export function HomeContainer() {
  const [productsCount, setProductsCount] = useState(0);

  useEffect(() => {
    const fn = async () => {
      const response = await getProductCountService();
      console.log(response.data.data);
      setProductsCount(response.data.data);
    };

    fn();
  }, []);

  return <Home productsCount={productsCount} />;
}
