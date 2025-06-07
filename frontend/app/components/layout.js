import Head from 'next/head';
import PropTypes from 'prop-types';
import { Footer } from './footer';

export const siteTitle = 'Union Church | Una Iglesia Viña';

export function Layout({ children, title }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Transformar la ciudad, influenciar al mundo, ayudar a las personas a conocer, amar y compartir a Jesús."
        />
        <meta
          property="og:image"
          content="https://unionchurch.vercel.app/images/og-image.png"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{title} | Union Church</title>
      </Head>

      <main>{children}</main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
