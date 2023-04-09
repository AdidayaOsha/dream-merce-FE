import { parseCookies } from 'nookies';

export async function clientFetcher<T, U = undefined>(
   method: string = 'GET',
   path: string,
   body?: U
): Promise<T> {
   const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'app-id': 'web',
      'Accept-Language': 'id-ID',
   };

   const cookies = parseCookies();
   if (cookies.token) {
      headers['dream-x-authorization'] = `Bearer ${cookies.token}`;
   }

   const res = await fetch(path, {
      method,
      headers,
      ...(body && { body: JSON.stringify(body) }),
   });

   const response = await res.json();

   return response;
}

export async function serverFetcher<T, U = undefined>(
   method: string = 'GET',
   path: string,
   body?: U,
   token?: string | undefined
): Promise<T> {
   const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'app-id': 'web',
      'Accept-Language': 'id-ID',
   };

   if (token) {
      headers['dream-x-authorization'] = `Bearer ${token}`;
   }

   const res = await fetch(path, {
      method,
      headers,
      ...(body && { body: JSON.stringify(body) }),
   });

   const response = await res.json();

   return response;
}
