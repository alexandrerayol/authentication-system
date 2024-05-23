import Link from "next/link";
import { registerAction } from "./_actions/register";

export default function register() {
  return (
    <form
      action={registerAction}
      className="border-2 border-black rounded-md w-[400px] flex flex-col items-center justify-center gap-4 py-4 m-auto"
    >
      <label htmlFor="name">
        Nome
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Primeiro nome"
          className="outline-none border border-black rounded-sm h-8 indent-2 ml-2"
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="example@example.com"
          className="outline-none border border-black rounded-sm h-8 indent-2 ml-2"
        />
      </label>

      <label htmlFor="password">
        Senha
        <input
          type="text"
          id="password"
          name="password"
          required
          placeholder="********"
          className="outline-none border border-black rounded-sm h-8 indent-2 ml-2"
        />
      </label>

      <button type="submit">Registrar</button>
      <Link href={"/login"}>Login</Link>
    </form>
  );
}
