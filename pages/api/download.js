import path from "path";
import fs from "fs";
import auth from "express-basic-auth";
import initMiddleware from "../../utils/init-middleware";

const downloadableFileName = process.env.FILE_NAME || "download.json";
const user = process.env.ADMIN_USERNAME;
const password = process.env.ADMIN_PASSWORD;
const basicAuth = auth({
  users: { [user]: password },
  challenge: true,
});

const authMiddleware = initMiddleware(basicAuth);

const handler = async (req, res) => {
  if (user && password) {
    await authMiddleware(req, res);
  }

  const filePath = path.join(process.cwd(), `./files/${downloadableFileName}`);
  const content = fs.readFileSync(filePath);

  res.setHeader(
    "content-disposition",
    `attachment; filename=${downloadableFileName}`
  );
  res.send(content);
};

export default handler;
