import type { NextApiRequest, NextApiResponse } from 'next';
import { ourFileRouter } from './core';
import { createNextRouteHandler } from 'uploadthing/next';

console.log(process.env.UPLOADTHING_APP_ID, process.env.UPLOADTHING_SECRET);

export const { GET, POST } = createNextRouteHandler({
  router: ourFileRouter,
});
