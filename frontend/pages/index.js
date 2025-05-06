import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Image from 'next/image';
import { Layout, Header, shimmer, toBase64 } from '../components';
import { CircleFinal } from '../components/shapes';
import { Facebook, Youtube, Instagram, Error } from '../components/icons';
import { reducer, initialState, actions } from '../lib/reducer';
import mujeres from '../public/images/ministries/1.png';
import unionKids from '../public/images/ministries/2.png';
import unionX from '../public/images/ministries/3.png';
import hombres from '../public/images/ministries/4.png';
import dorados from '../public/images/ministries/5.png';
import horaciopatty from '../public/images/horaciopatty.png';
import sign from '../public/images/sign.png';
import cover from '../public/images/cover.jpg';

export default function Home({ dataServices, dataShepperdDeks }) {
  console.log(dataServices.items);
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    email,
    firstname,
    lastname,
    canISend,
    isLoading,
    successMessage,
    firstnameError,
    lastnameError,
    emailError,
    error,
  } = state;

  const handleChange = (e) => {
    dispatch({
      type: actions.fieldsChanged,
      fieldName: e.currentTarget.name,
      payload: e.currentTarget.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: actions.formSubmitted });
    try {
      if (canISend) {
        await axios.post('api/newsletter', { email, firstname, lastname });
        dispatch({ type: actions.submitSuccess, payload: 'Agregado' });
      } else {
        dispatch({
          type: actions.submitError,
          payload: 'Agrega todos los campos solicitados',
        });
      }
    } catch (e) {
      dispatch({ type: actions.submitError, payload: e.response.data.error });
    }
  };

  return (
    <Layout title="Inicio">
      <div className="h-screen">
        <Image
          className="absolute object-cover back filter contrast-900"
          alt="Cover"
          src={cover}
          layout="fill"
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
              sobrenatural. Te invitamos a vivir un encuentro con Jesús, a
              cultivar una relación de intimidad con Dios, tener relaciones
              significativas con otras personas, crecer y vivir la Palabra y
              extender el Reino de Dios con tu vida.
            </p>
            <div>
              <Image
                src={sign}
                alt="Horacio & Patty's Sign"
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

      <p className="text-lg sm:text-xl md:text-2xl text-gray-800 mb-2 text-center">
        Intégrate a nuestros grupos de crecimiento
      </p>
      <div className="flex justify-center flex-wrap space-x-8">
        <Image
          alt=""
          width={160}
          height={160}
          src={mujeres}
          className="filter grayscale hover:grayscale-0"
          placeholder="blur"
        />
        <Image
          alt=""
          width={160}
          height={160}
          src={hombres}
          className="filter grayscale hover:grayscale-0"
          placeholder="blur"
        />
        <Image
          alt=""
          width={160}
          height={160}
          src={dorados}
          className="filter grayscale hover:grayscale-0"
          placeholder="blur"
        />
        <Image
          alt=""
          width={160}
          height={160}
          src={unionX}
          className="filter grayscale hover:grayscale-0"
          placeholder="blur"
        />
        <Image
          alt=""
          width={160}
          height={160}
          src={unionKids}
          className="filter grayscale hover:grayscale-0"
          placeholder="blur"
        />
      </div>
      <div className="px-8 sm:px-0 bg-pink-light" style={{ zIndex: '-1' }}>
        <div className="relative">
          <div className="container mx-auto mt-40 flex items-center">
            <div className="py-12 md:py-0">
              <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-gray-800 mb-4">
                Hacemos iglesia presencial y en línea
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-12">
                ¡Juntos hacemos la iglesia!{' '}
              </p>
              <a
                href="https://www.youtube.com/c/UnionChurchcl"
                className="tracking-wider uppercase text-sm inline px-8 py-3 border border-primary font-bold bg-primary hover:bg-primary-dark text-white transition duration-150 ease-in-out"
              >
                Ir al canal de Youtube
              </a>
            </div>
            <CircleFinal className="opacity-0 hidden md:block" />
          </div>
          <CircleFinal className="absolute top-0 right-0 hidden md:block" />
        </div>
      </div>
      <div className="px-8 sm:px-0 pt-10 bg-pink-light">
        <div className="container mx-auto text-center pb-20 md:pb-40 pt-20 md:w-5/12">
          <p className="text-gray-300 text-9xl font-serif leading-3">“</p>
          <p className="font-bold text-xl sm:text-2xl md:text-3xl mb-12">
            Transformar la ciudad, influenciar al mundo, ayudar a las personas a
            conocer, amar y compartir a Jesús.
          </p>
          <a
            href="/nosotros"
            className="tracking-wider uppercase text-sm inline px-8 py-3 font-bold bg-black hover:bg-gray-900 text-white transition duration-150 ease-in-out"
          >
            sobre Nosotros
          </a>
        </div>
      </div>
      <div className="bg-oil">
        <div className="container mx-auto flex justify-between flex-col md:flex-row px-8 md:px-0 pt-16 relative ">
          <div className="sm:px-12">
            <p className="font-sans uppercase text-white tracking-wider mb-4 font-bold text-center md:text-left">
              Mantente informado
            </p>
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-white text-center md:text-left mb-4 md:pb-16">
              Suscríbete a nuestro <br />
              boletín de noticias
            </p>
          </div>
          <form
            className="flex flex-col w-full md:w-2/5 lg:w-1/3 mx-auto md:mx-0 bg-white p-4 shadow-2xl top-10 md:-top-12 md:right-12 relative md:absolute"
            onSubmit={onSubmit}
          >
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="firstname"
            >
              Nombre
            </label>
            <div className="relative mb-4">
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Ingresa tu nombre"
                className="appearance-none px-4 py-3 outline-none w-full focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 border"
                value={firstname}
                onChange={handleChange}
              />
              {firstnameError && <Error />}
            </div>

            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="lastname"
            >
              Apellido
            </label>
            <div className="relative mb-4">
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Ingresa tu apellido"
                className="appearance-none px-4 py-3 outline-none w-full focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 border"
                value={lastname}
                onChange={handleChange}
              />
              {lastnameError && <Error />}
            </div>
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative mb-8">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Ingresa tu email"
                className="appearance-none px-4 py-3 outline-none w-full focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 border"
                value={email}
                onChange={handleChange}
              />
              {emailError && <Error />}
            </div>
            {error ? (
              <div className="bg-white flex items-center mb-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-red-600 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-sm">{error}</p>
              </div>
            ) : null}
            {successMessage ? (
              <div className="bg-white flex items-center mb-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-sm">{successMessage}</p>
              </div>
            ) : null}

            <button
              type="submit"
              className={`inline px-8 py-3 border border-primary bg-primary text-white uppercase text-sm tracking-wider font-bold ${
                isLoading ? 'disabled:cursor-not-allowed' : null
              }`}
            >
              {isLoading ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

const YOUTUBE_PLAYLIST_ITEMS_API =
  'https://www.googleapis.com/youtube/v3/playlistItems';

export async function getServerSideProps() {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&part=status&maxResults=3&playlistId=${process.env.PLAYLIST_ID}&key=${process.env.YOUTUBE_KEY}`
  );
  const res2 = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&part=status&maxResults=3&playlistId=PLV_Ax0JpimXPgTVH7fvCVC-2X0XQ6vorg&key=${process.env.YOUTUBE_KEY}`
  );
  const dataServices = await res.json();
  const dataShepperdDeks = await res2.json();
  return {
    props: {
      dataServices,
      dataShepperdDeks,
    },
  };
}

Home.propTypes = {
  dataServices: PropTypes.object,
  dataShepperdDeks: PropTypes.object,
};
