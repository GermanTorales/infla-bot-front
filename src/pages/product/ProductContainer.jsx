import { useParams } from 'react-router-dom';
import { Product } from './Product';
import { useEffect, useState } from 'react';
import { getProductService } from '../../services/v1/product';
import { getChartPriceService } from '../../services/v1';

export function ProductContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [dataForRecharts, setDataForRecharts] = useState([]);

  const getSourcePrice = (prices, source) => {
    const price = prices.find(price => price.source === source)?.price;

    if (price) {
      return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
      }).format(price);
    }
  };

  useEffect(() => {
    const fn = async () => {
      const productsResponse = await getProductService(id);
      const chartResponse = await getChartPriceService(id);

      setProduct(productsResponse.data.data);
      setDataForRecharts(chartResponse.data.list);
    };

    fn();
  }, [id]);

  return <Product product={product} getSourcePrice={getSourcePrice} dataForRecharts={dataForRecharts} />;
}
