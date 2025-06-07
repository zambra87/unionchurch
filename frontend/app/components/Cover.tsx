'use client';

import { useLive } from '@/app/contexts/LiveContext';
import { YouTubePlayer } from './YouTubePlayer';
import Image from 'next/image';
import cover from '@/public/images/cover.jpg';
import { Header } from './Header';
import { Facebook, Instagram, Youtube } from './icons';

export function Cover() {
  const { isLive, videoId, isLoading } = useLive();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isLive && videoId) {
    return (
      <div className="h-screen">
        <Header />
        <YouTubePlayer className="h-full" videoId={videoId} />
      </div>
    );
  }

  return (
    <div className="h-screen">
      <Image
        className="absolute object-cover w-full h-full"
        alt="Cover"
        src={cover}
        placeholder="blur"
      />

      <Header />
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
