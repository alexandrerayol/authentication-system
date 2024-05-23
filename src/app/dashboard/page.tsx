import { redirect } from "next/navigation";
import { auth } from "../../../auth";

export default async function dashboard() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div>
      <h1>Página Dashboard</h1>
      {JSON.stringify(session, null, 3)}
    </div>
  );
}
