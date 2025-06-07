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
    });

    if (!data?.redirect?.destination) {
      redirect('/');
    }

    redirect(data.redirect.destination);
  } catch (error) {
    console.error('Redirect error:', error);
    redirect('/');
  }
}
