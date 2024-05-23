"use server";

import { redirect } from "next/navigation";
import db from "../../../../../lib/db";

export async function registerAction(FormData: FormData) {
  const name = FormData.get("name") as string;
  const email = FormData.get("email") as string;
  const password = FormData.get("password") as string;

  try {
    if (!name || !email || !password) {
      throw new Error("campos name, email ou password inválidos");
    }

    let user = null;

    user = await db.user.findUnique({ where: { email: email } });

    if (user) {
      throw new Error("já existe um usuário vinculado a este email");
    }

    user = await db.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    console.log(user);
  } catch (error) {
    console.error(error);
    throw error;
  }

  redirect("/login");
}
