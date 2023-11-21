import path from "path";
import fs from "fs";

export const GET = async (
  _req: Request,
  { params: { file_name: fileName } }: { params: { file_name: string } }
) => {
  if (!fileName) {
    return new Response("File not found", { status: 404 });
  }

  const decodedFileName = decodeURIComponent(fileName as string);
  const filePath = path.join(process.cwd(), `./files/${decodedFileName}`);

  try {
    fs.accessSync(filePath, fs.constants.R_OK);
  } catch (err) {
    return new Response("File not found", { status: 404 });
  }

  const content = fs.readFileSync(filePath);

  return new Response(content, {
    status: 200,
    headers: {
      "content-disposition": `attachment; filename=${decodedFileName}`
    }
  });
};
