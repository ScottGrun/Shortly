// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { nanoid } from 'nanoid';
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/client'

import prisma from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const session = await getSession({ req });
  const shortLink = `https://wwww.${req.headers.host}/s/${nanoid(11)}`
  const longUrl = req.body.longUrl;
  let user;

  if (session) {
    user = await prisma.session.findUnique({
      where: {
        accessToken: session.accessToken,
      },
      select: {
        userId: true,
      },
    });

  }
  // TODO: Figure out a more robust way to handle guest user links (lots of shortfalls with this approach)

  const shortenedLink = await prisma.link.create({
    data: {
      userId: session ? user.userId : "GUEST",
      sourceLink: longUrl,
      shortLink: shortLink,
    }
  })

  res.status(200).json({ shortLink: shortenedLink });
  res.end()
}
