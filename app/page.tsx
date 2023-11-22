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
      <Link prefetch={false} href="/api/download/secret.json">
        Download secret file
      </Link>
    </div>
  );
}
