import Image from 'next/image';
// ❌ quitamos estos imports porque están rompiendo el build
// import { LatestShepperDesk, LatestServices } from './components/';

import horaciopatty from '@/public/images/horaciopatty.png';
import sign from '@/public/images/sign.png';
import mujeres from '@/public/images/ministries/1.png';
import unionKids from '@/public/images/ministries/2.png';
import unionX from '@/public/images/ministries/3.png';
import hombres from '@/public/images/ministries/4.png';
import dorados from '@/public/images/ministries/5.png';
import { CircleFinal } from '@/app/components/shapes/CircleFinal';
import Newsletter from './components/Newsletter';
import Link from 'next/link';
import { Cover } from './components/Cover';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <>
      <Cover />

      <div className="container mx-auto mb-20 md:mb-40 px-8 sm:px-8">
        <div className="mt-20 flex justify-center items-center flex-col md:flex-row text-center md:text-left">
          <div className="mb-12 md:mb-0">
            <Image
              src={horaciopatty}
              alt="Horacio y Patty"
              width={382}
              height={300}
              placeholder="blur"
            />
          </div>

          <div className="md:ml-16 md:w-4/12">
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-gray-800 mb-8">
              Uniendo personas con propósito
            </p>

            <p className="font-xl text-gray-600 mb-8">
              Bienvenidos a Union Church. Somos una comunidad de La Viña que
              busca vivir los valores bíblicos, experimentando naturalmente lo
              sobrenatural.
            </p>

            <div className="flex justify-center sm:block">
              <Image
                src={sign}
                alt="Firma"
                width={217}
                height={57}
                placeholder="blur"
              />
            </div>

            <p>
              <span className="block font-bold">Pastores principales</span>
            </p>
          </div>
        </div>
      </div>

      <p className="text-lg font-sans sm:text-xl md:text-2xl text-gray-800 mb-2 text-center">
        Intégrate a nuestros grupos de crecimiento
      </p>

      <div className="flex justify-center flex-wrap space-x-8">
        <Image src={unionKids} width={160} height={160} alt="" />
        <Image src={unionX} width={160} height={160} alt="" />
        <Image src={mujeres} width={160} height={160} alt="" />
        <Image src={hombres} width={160} height={160} alt="" />
        <Image src={dorados} width={160} height={160} alt="" />
      </div>

      <div className="px-8 sm:px-0 bg-pink-light">
        <div className="container mx-auto mt-40">
          <p className="text-2xl text-center">
            Hacemos iglesia presencial y en línea
          </p>
        </div>
      </div>

      {/* ✅ TEMPORAL: quitamos sección dinámica que rompía */}
      <div className="text-center py-20">
        <p className="text-gray-500">
          Próximamente: últimos servicios y contenido del pastor
        </p>
      </div>

      <div className="bg-oil">
        <div className="container mx-auto px-8 pt-20 pb-4">
          <p className="text-white text-center">
            Suscríbete a nuestro boletín
          </p>
          <Newsletter />
        </div>
      </div>
    </>
  );
}
