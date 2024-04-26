import { Routes, Route } from 'react-router-dom';

import * as Pages from './pages';
import { NavbarContainer } from './components';

function App() {
  return (
    <>
      <NavbarContainer />
      <Routes>
        <Route path="/" element={<Pages.HomeContainer />} />
        <Route path="/products" element={<Pages.ProductsContainer />} />
        <Route path="/products/:id" element={<Pages.ProductContainer />} />
        <Route path="/inflation" element={<Pages.InflationContainer />} />
      </Routes>
    </>
  );
}

export default App;
