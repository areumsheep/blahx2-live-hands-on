// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import MessageCtrl from '@/controllers/message/message.controller';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  console.info(method);
  if (method !== 'POST') {
    return res.status(400).end('지원하지 않는 http method 입니다.');
  }
  try {
    await MessageCtrl.postReplay(req, res);
    res.status(200).end();
  } catch (err) {
    res.status(400).end();
  }
}
