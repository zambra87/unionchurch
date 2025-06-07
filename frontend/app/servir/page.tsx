import Image from 'next/image';
import Link from 'next/link';
import { Adn, Vision } from '../components/shapes';
import { Heart } from '../components/icons';
import { Header } from '../components';
import { promises as fs } from 'fs';
import path from 'path';
import { Group } from '../components/Group';
import { AccordionList } from '../components/AccordionList';

// import ZoomImage from '../public/images/zoom.png';

export default async function Serve() {
  return (
    <>
      <Header variant="black" />
      <div className="container mx-auto flex flex-col md:flex-row pb-16 md:pb-24 relative h-[500px]">
        <Image
          src="/serve.png"
          alt="Servir"
          fill={true}
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 flex justify-between w-full items-center bg-gradient-to-b from-transparent to-black p-8">
          <div className="flex flex-col">
            <h3 className="font-serif text-white text-4xl font-bold mb-2">
              Servir
            </h3>
            <p className="text-2xl text-gray-200">
              Volunteer at Elevation Step into your purpose.
            </p>
          </div>
          <Link
            href="/nosotros"
            className="tracking-wider uppercase text-sm inline px-8 py-3 border border-primary font-bold bg-primary hover:bg-primary-dark text-white transition duration-150 ease-in-out"
          >
            Unirse al equipo
          </Link>
        </div>
      </div>
      <div className="container mx-auto">
        <h2 className="font-serif text-5xl mb-4 text-center">Find your team</h2>
        <p className="text-gray-700 text-xl">
          Discover where your calling intersects with the needs of our church
          community. Whether you love connecting with people, working in
          operations, or using your creativity, there’s a place for you to make
          an impact. Serving at Elevation opens up opportunities to grow, lead,
          and be a part of something bigger than yourself.
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-6 grid-rows-3 gap-4">
        <Group
          title="Producción"
          description="Honor our guest with the guest experience team"
          link="/servir/produccion"
          image="/people.webp"
          colSpan={3}
        />
        <Group
          title="Producción"
          description="Honor our guest with the guest experience team"
          link="/servir/produccion"
          image="/people.webp"
          colSpan={3}
        />
        <Group
          title="Producción"
          description="Honor our guest with the guest experience team"
          link="/servir/produccion"
          image="/people.webp"
          colSpan={2}
        />
        <Group
          title="Producción"
          description="Honor our guest with the guest experience team"
          link="/servir/produccion"
          image="/people.webp"
          colSpan={2}
        />
        <Group
          title="Producción"
          description="Honor our guest with the guest experience team"
          link="/servir/produccion"
          image="/people.webp"
          colSpan={2}
        />
      </div>
      <div className="container mx-auto">
        <h2 className="font-serif text-4xl font-bold mb-4">FAQs</h2>
        <AccordionList />
      </div>
    </>
  );
}
