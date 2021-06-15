import path from "path";
import fs from "fs";
import auth from "express-basic-auth";
import initMiddleware from "../../utils/init-middleware";

const basicAuth = auth({
  users: { [process.env.ADMIN_USERNAME]: process.env.ADMIN_PASSWORD },
  challenge: true,
});

const authMiddleware = initMiddleware(basicAuth);

const handler = async (req, res) => {
  await authMiddleware(req, res);
  const filePath = path.join(process.cwd(), "./files/hello.json");
  const content = fs.readFileSync(filePath);

  res.setHeader("content-disposition", "attachment; filename=hello.json");
  res.send(content);
};

export default handler;
