"use server";

import { redirect } from "next/navigation";
import { signIn } from "../../../../../auth";
import { AuthError } from "next-auth";

export async function loginAction(data: FormData) {
  const { email, password } = Object.fromEntries(data.entries());
  const credentials = { email, password };

  try {
    await signIn("credentials", credentials);
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.type === "CredentialsSignin") {
        error.message = "ERROR CredentialsSignin: credenciais inválidas";
        throw error;
      }
    }
  }

  redirect("/dashboard");
}
