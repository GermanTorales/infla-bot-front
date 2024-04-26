import { Routes, Route } from 'react-router-dom';

import * as Pages from './pages';
import { NavbarContainer } from './components';

function App() {
  const urlPath = 'infla-bot-front';

  return (
    <>
      <NavbarContainer />
      <Routes>
        <Route path={`${urlPath}/`} element={<Pages.HomeContainer />} />
        <Route path={`${urlPath}/products`} element={<Pages.ProductsContainer />} />
        <Route path={`${urlPath}/products/:id`} element={<Pages.ProductContainer />} />
        <Route path={`${urlPath}/inflation`} element={<Pages.InflationContainer />} />
      </Routes>
    </>
  );
}

export default App;
