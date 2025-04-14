// pages/login.tsx
"use client";

import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulate API call
    try {
      // In a real app, you would make an API call to authenticate
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // For demo purpose only
      if (email === "rahmatzkk10@gmail.com" && password === "123") {
        router.push("/dashboard");
      } else {
        setError("Email atau password salah. Silakan coba lagi.");
      }
    } catch (err) {
      setError("Terjadi kesalahan. Silakan coba lagi nanti.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Head>
        <title>Login | Puskesmas Sehat Bersama</title>
        <meta
          name="description"
          content="Login ke akun Puskesmas Sehat Bersama Anda"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <Link
            href="/"
            className="flex items-center text-blue-600 font-bold text-xl"
          >
            <span className="text-teal-500">PUSKES</span>MAS
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex w-full max-w-5xl overflow-hidden rounded-2xl shadow-lg">
          {/* Left Panel - Image */}
          <div className="hidden md:block w-1/2 bg-gradient-to-r from-blue-600 to-teal-500 p-12 text-white relative">
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="z-10 text-center">
                <h2 className="text-3xl font-bold mb-6">
                  Selamat Datang Kembali
                </h2>
                <p className="text-blue-100 mb-8">
                  Masuk ke akun Anda untuk mengakses layanan kesehatan digital
                  Puskesmas Sehat Bersama.
                </p>
                <div className="flex justify-center space-x-4 mb-8">
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                    <div className="text-2xl font-bold mb-1">24/7</div>
                    <div className="text-sm">Akses Informasi</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                    <div className="text-2xl font-bold mb-1">Online</div>
                    <div className="text-sm">Konsultasi</div>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                    <div className="text-2xl font-bold mb-1">E-Resep</div>
                    <div className="text-sm">Layanan</div>
                  </div>
                </div>
                <div className="text-blue-100 text-sm">
                  "Kesehatan Anda adalah prioritas kami. Kami hadir untuk
                  melayani dengan sepenuh hati."
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 text-blue-100 text-sm">
              © 2025 Puskesmas Sehat Bersama
            </div>
          </div>

          {/* Right Panel - Login Form */}
          <div className="w-full md:w-1/2 bg-white p-8 md:p-12">
            <div className="mb-6 text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Login ke Akun Anda
              </h1>
              <p className="mt-2 text-gray-600">
                Masukkan kredensial Anda untuk melanjutkan
              </p>
            </div>

            {error && (
              <div className="mb-4 bg-red-50 text-red-600 p-3 rounded-md text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Masukkan email Anda"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-blue-600 hover:text-blue-800"
                  >
                    Lupa password?
                  </Link>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Masukkan password Anda"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Ingat saya
                  </label>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                    isLoading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? "Memproses..." : "Masuk"}
                </button>
              </div>
            </form>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Atau masuk dengan
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Google
                </button>
                <button
                  type="button"
                  className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  WhatsApp
                </button>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                Belum memiliki akun?{" "}
                <Link
                  href="/register"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Daftar sekarang
                </Link>
              </p>
            </div>

            <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
              <div className="mb-4 md:mb-0">
                Butuh bantuan?{" "}
                <a href="#" className="text-blue-600">
                  Hubungi kami
                </a>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-700">
                  Syarat & Ketentuan
                </a>
                <a href="#" className="hover:text-gray-700">
                  Kebijakan Privasi
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
