import Link from "next/link";

export default function Index() {
  return (
    <div>
      <Link href="/api/download/secret.json">
        <a>Download secret file</a>
      </Link>
    </div>
  );
}
