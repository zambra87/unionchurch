// app/[url]/page.tsx
import { initializeApollo } from '@/lib/apolloClient';
import { gql } from '@apollo/client';
import { redirect } from 'next/navigation';

const GET_DESTINATION = gql`
  query Destination($source: String!) {
    redirect(where: { source: $source }) {
      destination
    }
  }
`;

// Force dynamic rendering for this page
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function ShortIdPage({
  params,
}: {
  params: { url: string };
}) {
  try {
    const apolloClient = initializeApollo(null);
    const { url: source } = params;

    const { data } = await apolloClient.query({
      query: GET_DESTINATION,
      variables: { source },
      fetchPolicy: 'no-cache', // Disable Apollo caching
    });

    if (!data?.redirect?.destination) {
      redirect('/');
    }

    return (
      <meta
        httpEquiv="refresh"
        content={`0;url=${data.redirect.destination}`}
      />
    );
  } catch (error) {
    console.error('Redirect error:', error);
    redirect('/');
  }
}
