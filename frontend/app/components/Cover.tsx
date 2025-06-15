import { YouTubePlayer } from './YouTubePlayer';
import Image from 'next/image';
import cover from '@/public/images/cover.jpg';
import { Header } from './Header';
import { Facebook, Instagram, Youtube } from './icons';
import { getLiveStreamStatus } from '@/lib/services/youtube';

async function CoverContent() {
  const isDevelopment = process.env.NODE_ENV === 'development';

  let isLive: boolean;
  let video: {
    videoId: string;
    kind: string;
  } | null;
  let title: string;
  let date: string;

  if (!isDevelopment) {
    return (
      <div className="container mx-auto px-4 md:px-0 pt-36 pb-8">
        <YouTubePlayer
          className="h-full w-full aspect-video overflow-hidden rounded-2xl mb-4"
          videoId="dQw4w9WgXcQ"
        />
        <p className="text-lg sm:text-xl md:text-2xl text-white my-2 font-medium truncate">
          Nombre del servicio
        </p>
        <p className="text-base md:text-lg font-medium text-gray-300 truncate">
          Fecha
        </p>
      </div>
    );
  } else {
    const { isLive: live, stream } = await getLiveStreamStatus();
    isLive = live;
    video = stream?.id || null;
    title = stream?.title || '';
    date = stream?.publishedAt || '';
  }

  console.log(isLive, video, title, date, 'isLive, videoId, title, date');

  if (isLive && video) {
    return (
      <div className="container mx-auto px-4 md:px-0 pt-36 pb-8">
        <YouTubePlayer
          className="h-full w-full aspect-video overflow-hidden rounded-2xl mb-4"
          videoId={video.videoId}
        />
        <p className="text-lg sm:text-xl md:text-2xl text-white my-2 font-medium truncate">
          {title}
        </p>
        <p className="text-base md:text-lg font-medium text-gray-300">
          {new Date(date).toLocaleDateString('es-CL', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })}
        </p>
      </div>
    );
  }

  return (
    <div className="h-screen w-full">
      <Image
        className="absolute object-cover w-full h-full"
        alt="Cover"
        src={cover}
        placeholder="blur"
      />
      <div className="h-full flex justify-center items-center relative">
        <div>
          <p className="text-center text-white font-serif text-5xl mb-20 md:text-6xl lg:text-8xl">
            Bienvenido a casa
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.facebook.com/unionchurch.cl"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook className="mr-8" />
            </a>
            <a
              href="https://www.instagram.com/unionchurch.cl/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="mr-8" />
            </a>
            <a
              href="https://www.youtube.com/c/UnionChurchcl"
              target="_blank"
              rel="noreferrer"
            >
              <Youtube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Cover() {
  return (
    <div className="flex justify-center items-center bg-gray">
      <Header />
      <CoverContent />
    </div>
  );
}
