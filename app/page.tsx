import Link from "next/link";

export default function Index() {
  return (
    <div>
      <Link href="/api/download/secret.json">Download secret file</Link>
    </div>
  );
}
