import { useState, useEffect } from 'react';
import { Inflation } from './Inflation';
import { getGeneralInflationsService } from '../../services/v1/inflation/general.service';

export function InflationContainer() {
  const [inflationData, setInflationData] = useState({});

  useEffect(() => {
    const fn = async () => {
      const response = await getGeneralInflationsService();

      setInflationData(response.data.data);
    };

    fn();
  }, []);

  return <Inflation inflationData={inflationData} />;
}
