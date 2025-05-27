"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import HomePageHeading from "./components/homepage-heading";
import BottomNav from "./components/BottomNav";

export default function Home() {
  const router = useRouter();
  const [showLogin, setShowLogin] = useState(false);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    try {
      const res = await fetch("/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        router.push("/generate");
      } else {
        setMessage(data?.error || "Login failed");
      }
    } catch {
      setMessage("Network error");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col md:min-h-screen min-h-svh">
      <main className="flex flex-col justify-center items-center flex-1 py-12 bg-light-primary font-fun">
        <HomePageHeading />

        <div className="md:flex justify-center items-center w-full space-x-8 mb-12 gap-8">
          {/* homepage action */}
          <button
            onClick={() => setShowLogin(true)}
            className="bg-brown-primary px-8 py-3 rounded-full text-light shadow-[5px_5px_0px] shadow-dark text-2xl tracking-widest hover:opacity-95 active:shadow-none active:translate-x-1 active:translate-y-1 transition-all duration-100 ease-in-out select-none justify-center items-center flex mx-auto md:flex-none md:mx-0"
          >
            Let&apos;s Go!
          </button>

          {/* explore action */}
          <button
            onClick={() => router.push("/explore")}
            className="hidden md:block bg-brown-light px-8 py-3 rounded-full border-2 border-brown-primary text-brown-primary shadow-[5px_5px_0px] shadow-dark text-2xl tracking-widest hover:opacity-95 active:shadow-none active:translate-x-1 active:translate-y-1 transition-all duration-100 ease-in-out select-none "
          >
            Explore
          </button>
        </div>

        {/* Login Modal */}
        {showLogin && (
          <div className="fixed inset-0 flex items-center justify-center bg-dark/50 z-20 font-fredoka">
            <div className="relative bg-light-secondary p-6 rounded-2xl shadow-md w-full max-w-sm mx-2">
              <button
                aria-label="Close"
                className="absolute top-3 right-3 text-2xl text-brown-primary hover:text-brown-secondary transition"
                onClick={() => {
                  setShowLogin(false);
                  setMessage("");
                  setFormData({ username: "", password: "" });
                }}
                type="button"
              >
                ×
              </button>
              <form onSubmit={handleLoginSubmit} className="flex flex-col">
                <label
                  className="mb-1 text-brown-primary font-medium"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  className="border-2 border-brown-primary rounded px-3 py-2 w-full mb-4 focus:outline-none focus:border-brown-secondary bg-transparent"
                  value={formData.username}
                  onChange={handleInputChange}
                  disabled={loading}
                  required
                />
                <label
                  className="mb-1 text-brown-primary font-medium"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="border-2 border-brown-primary rounded px-3 py-2 w-full mb-4 focus:outline-none focus:border-brown-secondary bg-transparent"
                  value={formData.password}
                  onChange={handleInputChange}
                  disabled={loading}
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-brown-primary text-light px-4 py-2 rounded-full hover:opacity-95 transition font-medium disabled:opacity-70 tracking-wider"
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
              </form>
              {message && (
                <div className="mt-4 text-center text-brown-secondary">
                  {message}
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* mobile like nav */}
      <div className="md:hidden">
        <BottomNav />
      </div>
    </div>
  );
}
