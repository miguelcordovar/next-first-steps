import Link from "next/link";
import About from './(general)/about/page';

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-5xl">Hola Mundo!!!</span>
      <Link href={ '/about' }>About</Link>
    </main>
  );
}
