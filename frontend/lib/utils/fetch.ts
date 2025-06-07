import nodeFetch from 'node-fetch';
import { Agent } from 'https';

export const fetchWithSSL = async (
  url: string,
  options: RequestInit
): Promise<Response> => {
  // Check if we're in development mode
  if (process.env.NEXT_PUBLIC_ENV === 'development') {
    // In development, use node-fetch with SSL verification disabled

    return nodeFetch(url, {
      method: options.method,
      headers: options.headers,
      body: options.body ? JSON.stringify(options.body) : undefined,
      signal: options.signal,
      agent: new Agent({
        rejectUnauthorized: false,
      }),
    });
  }

  // In production, use regular fetch
  return fetch(url, options);
};
