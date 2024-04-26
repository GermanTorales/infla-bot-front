import { Link } from 'react-router-dom';

import { handleRedirect } from '../../utils';

export function Home({ productsCount }) {
  return (
    <div className="mb-[50px]">
      <div className="md:container mx-auto pt-5">
        <h1 className="text-4xl font-bold text-center text-text-primary">INFLABOT</h1>

        <div className="w-8/12 mx-auto mt-10 p-10 border-2 border-brand-300">
          <p className="text-justify text-2xl text-text-primary">
            Basicamente el proposito de <strong>InflaBot</strong> es recopilar de forma diaria los precios de los productos de la
            canasta basica en algunos de los supermercados mas importantes de Argentina y calcular la inflacion diariamente. Ademas con
            la informacion recopilada tambien se puede ver la evolucion de los precios de los productos en el tiempo.
          </p>
        </div>

        <div className="w-full">
          <h2 className="text-3xl font-bold text-center text-text-primary mt-10">¿Como funciona?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            <div className="p-10 border-2 border-brand-300">
              <h3 className="text-2xl font-bold text-text-primary">Recopilacion de precios</h3>
              <p className="text-justify text-text-primary">
                Todos los dias se recopilan los precios de los productos de la canasta basica en los supermercados mas importantes de
                Argentina. Los precios recopilados se almacenan en una base de datos lo que permite tener un registro diario de los
                precios para luego poder calcular una inflacion con mayor proyeccion en el tiempo.
              </p>
            </div>
            <div className="p-10 border-2 border-brand-300">
              <h3 className="text-2xl font-bold text-text-primary">Calculo de inflacion</h3>
              <p className="text-justify text-text-primary">
                Con los precios recopilados se calcula la inflacion diariamente y se muestra en un grafico la evolucion de los precios
                en el tiempo. El calculo de la inflacion se realiza con la formula de inflacion que es la siguiente:
                <br />
                <br />
                <strong>Inflacion = (PrecioActual - PrecioAnterior) / PrecioAnterior</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-row mt-5">
        <div className="flex flex-col mx-auto w-3/12 p-10 border-2 border-brand-300">
          <h3 className="text-2xl font-bold text-text-primary text-center">Cantidad de productos</h3>
          <p className=" text-center text-[40px] font-bold text-text-primary">{productsCount}</p>

          <Link to={'/products'}>
            <button className="bg-brand-300 text-text-primary w-full text-2xl py-2 mt-5 hover:bg-brand-500 hover:font-bold hover:text-white">
              Ver productos
            </button>
          </Link>
        </div>

        <div className="flex flex-col mx-auto w-3/12 p-10 border-2 border-brand-300">
          <h3 className="text-2xl font-bold text-text-primary text-center">Informacion del INDEC</h3>

          <div className="mx-auto mt-[90px]">
            <input
              type="button"
              value="Ver informacion"
              className="w-[250px] h-[45px] text-2xl  bg-brand-300 flex justify-center cursor-pointer text-text-primary hover:bg-brand-500 hover:font-bold hover:text-white"
              onClick={() => handleRedirect('https://www.indec.gob.ar/ftp/cuadros/sociedad/EPH_metodologia_22_pobreza.pdf')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
