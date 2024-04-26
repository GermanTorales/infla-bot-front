import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';

export function Product({ product, getSourcePrice, dataForRecharts }) {
  console.log(dataForRecharts);

  return (
    <div className="container mx-auto">
      <div className="ml-[60px]">
        <Link
          to={'/products'}
          className="flex items-center justify-center w-1/12 mt-2 px-5 py-2 text-sm text-white transition-colors duration-200 bg-brand-500 border rounded-lg gap-x-2 hover:bg-brand-700 "
        >
          <svg
            className="w-5 h-5 rtl:rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
          </svg>
          <span>Volver</span>
        </Link>
      </div>

      <div className="flex">
        <div className="w-4/12">
          <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-[400px] max-w-sm mx-auto mt-[20px]">
            <img src={product.image} alt="Product image" className="absolute inset-0 h-full w-full object-cover" />

            <div className="absolute inset-0 bg-brand-700 opacity-15 rounded-md"></div>

            <div className="bg-brand-500 p-3 z-10 rounded-md border-2 border-white ">
              <h3 className="text-xl font-bold text-white">{product.name}</h3>
            </div>
          </article>
        </div>

        <div className="w-8/12">
          <table className="table-fixed mx-auto mt-5 w-full">
            <thead className="text-md text-left text-white uppercase bg-brand-500">
              <tr>
                <th scope="col" className="px-6 py-3 w-[200px]">
                  Fecha
                </th>

                <th scope="col" className="px-6 py-3 w-[200px]">
                  Coto
                </th>

                <th scope="col" className="px-6 py-3 w-[200px]">
                  Carrefour
                </th>

                <th scope="col" className="px-6 py-3 w-[200px]">
                  Dia
                </th>
              </tr>
            </thead>

            <tbody>
              {product?.prices &&
                Object.entries(product?.prices).map(([date, prices]) => (
                  <tr key={date} className="bg-brand-100 border-b h-10">
                    <td className="px-6 py-3">{dayjs(date).format('DD-MM-YYYY')}</td>
                    <td className="px-6 py-3">{getSourcePrice(prices, 'coto') || '-'}</td>
                    <td className="px-6 py-3">{getSourcePrice(prices, 'carrefour') || '-'}</td>
                    <td className="px-6 py-3">{getSourcePrice(prices, 'dia') || '-'}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="w-6/12 h-20 mt-10 ml-[60px]">
          <p className="text-xl ">Grafico de comparacion de precios en los distintos supermercados.</p>
        </div>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={dataForRecharts}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid />
            <Bar dataKey="coto" fill="#F9100D" activeBar={<Rectangle fill="pink" stroke="black" />} />
            <Bar dataKey="carrefour" fill="#005AA8" activeBar={<Rectangle fill="blue" stroke="black" />} />
            <Bar dataKey="dia" fill="#D52B1E" activeBar={<Rectangle fill="red" stroke="black" />} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
