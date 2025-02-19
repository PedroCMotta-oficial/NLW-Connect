import Image from "next/image";

import gold from '@/assets/Medal_gold.svg';
import silver from '@/assets/Medal_silver.svg';
import cooper from '@/assets/Medal_cooper.svg';

export default function() {
  return (
    <div className="w-full max-w-[440px] space-y-5">

      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de Indicações
      </h2>

      <div className="space-y-4">

        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">1o</span> | André Souza
          </span>
          <span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
            1128
          </span>
          <Image src={ gold } alt="" className="absolute top-0 right-8" />
        </div>

        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">2o</span> | Melissa Loures
          </span>
          <span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
            928
          </span>
          <Image src={ silver } alt="" className="absolute top-0 right-8" />
        </div>

        <div className="relative rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3">
          <span className="text-sm text-gray-300 leading-none">
            <span className="font-semibold">3o</span> | Rodrigo Gonçalves
          </span>
          <span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
            875
          </span>
          <Image src={ cooper } alt="" className="absolute top-0 right-8" />
        </div>

      </div>

    </div>
  );
}