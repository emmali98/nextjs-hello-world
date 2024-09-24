import Link from "next/link";

export default function Home() {
  return (
    <div>
      Hello World.{" "}
      <Link href="/chapter/0">
        start
      </Link>
    </div>
  );
}
