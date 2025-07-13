"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Cargando sesión...</p>;

  if (session) {
    return (
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl">Bienvenido, {session.user.name}</h1>
        <p className="mb-4">Email: {session.user.email}</p>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => signOut()}
        >
          Cerrar sesión
        </button>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl">No has iniciado sesión</h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => signIn("google")}
      >
        Iniciar sesión con Google
      </button>
    </main>
  );
}
