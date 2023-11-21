import Link from "next/link";

export default function Index() {
  return (
    <div>
      <Link prefetch={false} href="/api/download/secret.json">
        Download secret file
      </Link>
    </div>
  );
}
