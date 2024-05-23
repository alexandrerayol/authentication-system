"use client";

export default function RegisterError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div>
      <h1>Ops...Aconteceu um erro</h1>
      <h2>Detalhes: {error.message}</h2>
      <button onClick={reset}>Voltar</button>
    </div>
  );
}
