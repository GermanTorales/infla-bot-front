import { Link } from 'react-router-dom';

import { handleRedirect } from '../../utils';

export function ProductCard({ product }) {
  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-clip-border rounded-xl w-80 m-2">
      <Link to={`/products/${product.id}`}>
        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white  bg-clip-border rounded-xl h-70">
          <img src={product.image} alt="profile-picture" />
        </div>

        <div className="p-6 text-center">
          <h4 className="block mb-2 font-sans text-l antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {product.name}
          </h4>

          <p className="block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
            CEO / Co-Founder
          </p>
        </div>
      </Link>

      <div className="flex justify-around p-6 pt-2">
        <input
          type="button"
          value="Coto"
          className={`rounded-lg w-20 h-10 flex justify-center cursor-pointer text-white hover:text-black ${product.coto_url ? 'bg-brand-500 hover:bg-brand-300' : 'bg-red-500 cursor-not-allowed'}`}
          onClick={() => handleRedirect(product.coto_url)}
        />

        <input
          type="button"
          value="Carrefour"
          className={`rounded-lg w-20 h-10 flex justify-center cursor-pointer text-white hover:text-black ${product.carrefour_url ? 'bg-brand-500 hover:bg-brand-300' : 'bg-red-500 cursor-not-allowed'}`}
          onClick={() => handleRedirect(product.carrefour_url)}
        />

        <input
          type="button"
          value="Dia"
          className={`rounded-lg w-20 h-10 flex justify-center cursor-pointer text-white hover:text-black ${product.dia_url ? 'bg-brand-500 hover:bg-brand-300' : 'bg-red-500 cursor-not-allowed'}`}
          onClick={() => handleRedirect(product.dia_url)}
        />
      </div>
    </div>
  );
}
