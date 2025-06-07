import Link from 'next/link';
import Image from 'next/image';
import { getLiveStreamStatus } from '@/lib/services/youtube';
import { Sensor } from './icons';

type HeaderProps = {
  variant?: 'white' | 'black';
};

export async function Header({ variant = 'white' }: HeaderProps) {
  const { isLive } =
    process.env.NODE_ENV === 'development'
      ? { isLive: false }
      : await getLiveStreamStatus();

  const headerClass =
    variant === 'white'
      ? 'bg-gradient-to-b from-gray-900 to-transparent w-full py-10 absolute top-0'
      : 'bg-pink w-full py-10';

  const linkClass =
    variant === 'white'
      ? 'text-white text-lg border-transparent border-b-4 hover:border-white'
      : 'text-black text-lg border-transparent border-b-4 hover:border-black';

  const logoClass = variant === 'white' ? '/logo-white.svg' : '/logo-black.svg';

  return (
    <div className={headerClass} style={{ zIndex: 1 }}>
      <nav className="container mx-auto px-8 md:px-0 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image alt="Logo" src={logoClass} height="57" width="145" />
          </Link>
          {isLive && (
            <a
              href="https://www.youtube.com/@unionchurch"
              className="flex bg-red-500 items-center gap-2 rounded-full px-4 py-2 text-white hover:bg-red-600 transition-colors duration-300"
            >
              <Sensor className="w-6 h-6" />
              <span>VIVO</span>
            </a>
          )}
        </div>
        <div className="flex items-center gap-4">
          <Link href="/nosotros" className={linkClass}>
            Nosotros
          </Link>
          <Link href="/dar" className={linkClass}>
            Dar
          </Link>
          <Link href="/servir" className={linkClass}>
            Servir
          </Link>
          <Link href="/crecer" className={linkClass}>
            Crecer
          </Link>
        </div>
      </nav>
    </div>
  );
}
