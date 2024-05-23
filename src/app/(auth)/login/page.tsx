import Link from "next/link";
import { loginAction } from "./_actions/login";

export default function login() {
  return (
    <form
      action={loginAction}
      className="border-2 border-black rounded-md w-[400px] flex flex-col items-center justify-center gap-4 py-4 m-auto"
    >
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

      <button type="submit">Login</button>
      <Link href={"/register"}>Registre-se</Link>
    </form>
  );
}
