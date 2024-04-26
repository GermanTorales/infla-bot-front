export function Inflation({ inflationData }) {
  console.log(inflationData);

  return (
    <div className="container mx-auto w-7/12">
      <div className="mt-5 w-[200px] h-10 bg-brand-200 border-2 rounded-2xl border-brand-300 align-middle">
        <p className="pl-3 text-xl font-bold mt-1">Inflación diaria</p>
      </div>

      <div className="flex flex-row justify-between mt-5">
        <div className="w-[300px] h-[200px] border-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl">
          <div className="flex flex-col text-center justify-center mt-[35px]">
            <p className="text-[30px]">COTO</p>

            <p className="text-[34px] mt-6 font-bold">{inflationData?.coto?.daily + '%' || '0.00%'}</p>
          </div>
        </div>

        <div className="w-[300px] h-[200px] border-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl">
          <div className="flex flex-col text-center justify-center mt-[35px]">
            <p className="text-[30px]">CARREFOUR</p>

            <p className="text-[34px] mt-6 font-bold">{inflationData?.carrefour?.daily + '%' || '0.00%'}</p>
          </div>
        </div>

        <div className="w-[300px] h-[200px] border-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl">
          <div className="flex flex-col text-center justify-center mt-[35px]">
            <p className="text-[30px]">DIA</p>

            <p className="text-[34px] mt-6 font-bold">{inflationData?.dia?.daily + '%' || '0.00%'}</p>
          </div>
        </div>
      </div>

      <div className="mt-5 w-[200px] h-10 bg-brand-200 border-2 rounded-2xl border-brand-300 align-middle">
        <p className="pl-3 text-xl font-bold mt-1">Inflación semanal</p>
      </div>

      <div className="flex flex-row justify-between mt-5">
        <div className="w-[300px] h-[200px] border-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl">
          <div className="flex flex-col text-center justify-center mt-[35px]">
            <p className="text-[30px]">COTO</p>

            <p className="text-[34px] mt-6 font-bold">{inflationData?.coto?.weekly + '%' || '0.00%'}</p>
          </div>
        </div>

        <div className="w-[300px] h-[200px] border-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl">
          <div className="flex flex-col text-center justify-center mt-[35px]">
            <p className="text-[30px]">CARREFOUR</p>

            <p className="text-[34px] mt-6 font-bold">{inflationData?.carrefour?.weekly + '%' || '0.00%'}</p>
          </div>
        </div>

        <div className="w-[300px] h-[200px] border-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl">
          <div className="flex flex-col text-center justify-center mt-[35px]">
            <p className="text-[30px]">DIA</p>

            <p className="text-[34px] mt-6 font-bold">{inflationData?.dia?.weekly + '%' || '0.00%'}</p>
          </div>
        </div>
      </div>

      <div className="mt-5 w-[200px] h-10 bg-brand-200 border-2 rounded-2xl border-brand-300 align-middle">
        <p className="pl-3 text-xl font-bold mt-1">Inflación mensual</p>
      </div>

      <div className="flex flex-row justify-between mt-5">
        <div className="w-[300px] h-[200px] border-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl">
          <div className="flex flex-col text-center justify-center mt-[35px]">
            <p className="text-[30px]">COTO</p>

            <p className="text-[34px] mt-6 font-bold">{inflationData?.coto?.monthly + '%' || '0.00%'}</p>
          </div>
        </div>

        <div className="w-[300px] h-[200px] border-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl">
          <div className="flex flex-col text-center justify-center mt-[35px]">
            <p className="text-[30px]">CARREFOUR</p>

            <p className="text-[34px] mt-6 font-bold">{inflationData?.carrefour?.monthly + '%' || '0.00%'}</p>
          </div>
        </div>

        <div className="w-[300px] h-[200px] border-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl">
          <div className="flex flex-col text-center justify-center mt-[35px]">
            <p className="text-[30px]">DIA</p>

            <p className="text-[34px] mt-6 font-bold">{inflationData?.dia?.monthly + '%' || '0.00%'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
