import path from "path";
import fs from "fs";

const handler = (req, res) => {
  const filePath = path.join(process.cwd(), "./files/hello.json");
  const content = fs.readFileSync(filePath);

  res.setHeader("content-disposition", "attachment; filename=hello.json");
  res.send(content);
};

export default handler;
