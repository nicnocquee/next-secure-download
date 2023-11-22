import Link from "next/link";
import Image from "next/image";
import "./global.css";

export default function Index() {
  return (
    <div className="parent">
      <Image
        src="/next-secure-download-icon.webp"
        width={200}
        height={200}
        alt="next secure download logo"
      />
      <Link
        className="button"
        prefetch={false}
        href="/api/download/secret.json"
      >
        Download secret file
      </Link>
      <footer>
        <div>
          <a
            target="_blank"
            href="https://github.com/nicnocquee/next-secure-download"
          >
            Open Source
          </a>{" "}
          by <a href="https://nico.fyi">Nico Prananta</a>
        </div>
      </footer>
    </div>
  );
}
