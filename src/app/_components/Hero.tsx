import Link from "next/link";

export function Hero() {
  return (
    <div className="w-[400px] m-auto flex flex-col items-center justify-center border-2 border-black rounded-md gap-4 py-4">
      <h1>Clique e faça seu login</h1>
      <Link href={"/login"} className="hover:text-gray-600">
        Login
      </Link>
    </div>
  );
}
