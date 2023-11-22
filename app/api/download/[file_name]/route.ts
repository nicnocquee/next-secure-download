import path from "path";
import fs from "fs";

// Function GET exports the downloaded file back to the user.
export const GET = async (
  _req: Request,
  // Destructure and rename 'file_name' from the params object to 'fileName'
  { params: { file_name: fileName } }: { params: { file_name: string } }
) => {
  // If filename is not provided, return 404 error response
  if (!fileName) {
    return new Response("File not found", { status: 404 });
  }

  // Decode filename and strip out directory paths for security
  const decodedFileName = path.basename(decodeURIComponent(fileName)).trim();

  // Check for directory traversal characters in the decoded filename to prevent potential malicious access
  if (decodedFileName.includes("..")) {
    return new Response("Invalid file name", { status: 400 });
  }

  // Construct the full file path where file is located.
  const filePath = path.join(process.cwd(), `./files/${decodedFileName}`);

  // Try to access file. If file does not exist or is inaccessible, catch error.
  try {
    await fs.promises.access(filePath, fs.constants.R_OK);
  } catch (err: any) {
    // If file is not found, return a 404 error response
    if (err.code === "ENOENT") {
      return new Response("File not found", { status: 404 });
    } else {
      console.error("Error accessing file:", err.message);
      // In case of other errors (e.g., permissions issues), return a 500 error response.
      return new Response("Error accessing file", { status: 500 });
    }
  }

  // Read file content for use in response to request
  const content = await fs.promises.readFile(filePath);

  // Return successful response with file content and appropriate headers to trigger file download
  return new Response(content, {
    status: 200,
    headers: {
      "content-disposition": `attachment; filename="${encodeURIComponent(
        decodedFileName
      )}"`
    }
  });
};
