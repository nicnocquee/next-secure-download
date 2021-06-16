import path from "path";
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import auth from "express-basic-auth";
import initMiddleware from "../../../utils/init-middleware";

const user = process.env.ADMIN_USERNAME || "";
const password = process.env.ADMIN_PASSWORD || "";
const basicAuth = auth({
  users: { [user]: password },
  challenge: true,
});

const authMiddleware = initMiddleware(basicAuth);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (user && password) {
    await authMiddleware(req, res);
  }

  const {
    query: { file_name: fileName },
  } = req;

  if (!fileName) {
    return res.status(404).send("File not found");
  }

  const decodedFileName = decodeURIComponent(fileName as string);
  const filePath = path.join(process.cwd(), `./files/${decodedFileName}`);

  try {
    fs.accessSync(filePath, fs.constants.R_OK);
  } catch (err) {
    return res.status(404).send("File not found");
  }

  const content = fs.readFileSync(filePath);

  res.setHeader(
    "content-disposition",
    `attachment; filename=${decodedFileName}`
  );
  res.send(content);
};

export default handler;
