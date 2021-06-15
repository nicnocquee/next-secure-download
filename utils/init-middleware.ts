import type { NextApiRequest, NextApiResponse } from "next";

type MiddlewareType = (
  req: NextApiRequest,
  res: NextApiResponse,
  callback: (result: any) => void
) => void;
export default function initMiddleware(middleware: MiddlewareType) {
  return (req: NextApiRequest, res: NextApiResponse) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}
