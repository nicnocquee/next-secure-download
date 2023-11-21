import path from "path";
import fs from "fs";

export const GET = async (
  _req: Request,
  { params: { file_name: fileName } }: { params: { file_name: string } }
  const decodedFileName = path.basename(decodeURIComponent(fileName)).trim();
  // Ensure that the decodedFileName does not contain any directory traversal characters
  if (decodedFileName.includes('..')) {
    return new Response("Invalid file name", { status: 400 });
  }
) => {
  if (!fileName) {
    return new Response("File not found", { status: 404 });
  }

  const decodedFileName = path.basename(decodeURIComponent(fileName)).trim();
  const filePath = path.join(process.cwd(), `./files/${decodedFileName}`);

  try {
    await fs.promises.access(filePath, fs.constants.R_OK);
  } catch (err: any) {
    if (err.code === "ENOENT") {
      return new Response("File not found", { status: 404 });
    } else {
      console.error(err);
      // Handle other possible errors (e.g., permission issues)
      return new Response("Error accessing file", { status: 500 });
    }
  }

  const content = await fs.promises.readFile(filePath);

  return new Response(content, {
    status: 200,
    headers: {
      "content-disposition": `attachment; filename="${encodeURIComponent(
        decodedFileName
      )}"`
    }
  });
};
