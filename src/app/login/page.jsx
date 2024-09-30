"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import GoogleButton from "react-google-button";

export default function LoginPage() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h1 className="text-2xl font-bold mb-4">Welcome, {session.user.name}</h1>
          <p className="text-gray-600 mb-6">You are signed in with Google</p>
          <button
            onClick={() => signOut()}
            className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 transition-all duration-200"
          >
            Sign out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold mb-4">Sign In</h1>
        <p className="text-gray-600 mb-6">You are not signed in</p>
        <GoogleButton
          onClick={() => signIn("google")}
          className="mx-auto"
        />
      </div>
    </div>
  );
}