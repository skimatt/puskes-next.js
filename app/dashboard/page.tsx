// pages/login.tsx
"use client";
// pages/dashboard.tsx
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

// Komponen untuk sidebar
const Sidebar = ({
  activePage,
  setActivePage,
}: {
  activePage: string;
  setActivePage: (page: string) => void;
}) => {
  const menuItems = [
    { id: "overview", label: "Beranda", icon: "🏠" },
    { id: "appointment", label: "Jadwal Kunjungan", icon: "📅" },
    { id: "medical-record", label: "Rekam Medis", icon: "📋" },
    { id: "medicine", label: "Pengobatan", icon: "💊" },
    { id: "lab-results", label: "Hasil Lab", icon: "🔬" },
    { id: "vaccination", label: "Vaksinasi", icon: "💉" },
    { id: "messages", label: "Pesan", icon: "💬" },
    { id: "profile", label: "Profil", icon: "👤" },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full overflow-y-auto">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-gray-200">
        <div className="flex items-center">
          <span className="text-blue-600 font-bold text-xl">
            <span className="text-teal-500">PUSKES</span>MAS
          </span>
        </div>
      </div>

      {/* Menu */}
      <div className="py-4">
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActivePage(item.id)}
                className={`flex items-center w-full px-6 py-3 text-left ${
                  activePage === item.id
                    ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
                {item.id === "messages" && (
                  <span className="ml-auto bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    2
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Help */}
      <div className="px-6 py-4 border-t border-gray-200 mt-auto">
        <button className="flex items-center text-gray-700 hover:text-blue-600">
          <span className="mr-3">❓</span>
          <span>Bantuan</span>
        </button>
      </div>
    </div>
  );
};

// Komponen untuk header
const Header = ({ user }: { user: { name: string; image: string } }) => {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative p-2 text-gray-500 hover:text-blue-600">
          <span className="text-xl">🔔</span>
          <span className="absolute top-1 right-1 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-white text-xs">
            3
          </span>
        </button>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
            <img
              src="/api/placeholder/100/100"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:block">
            <p className="font-medium text-gray-700">{user.name}</p>
            <p className="text-sm text-gray-500">Pasien</p>
          </div>
        </div>
      </div>
    </header>
  );
};

// Komponen untuk overview (beranda)
const Overview = ({ user }: { user: { name: string } }) => {
  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg p-6 text-white">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">
              Selamat datang, {user.name}!
            </h2>
            <p className="mb-4">
              Jaga kesehatan Anda dengan pemeriksaan rutin.
            </p>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition">
              Jadwalkan Pemeriksaan
            </button>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <div className="text-sm mb-1">Kunjungan Berikutnya</div>
              <div className="font-bold text-lg">22 April 2025, 10:00</div>
              <div className="text-sm mt-1">dr. Siti Rahayu, Sp.A</div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 font-medium">Tekanan Darah</h3>
            <span className="text-blue-500 text-xl">🩸</span>
          </div>
          <div className="text-2xl font-bold">120/80</div>
          <div className="text-sm text-gray-500 mt-2">Normal</div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 font-medium">Berat Badan</h3>
            <span className="text-blue-500 text-xl">⚖️</span>
          </div>
          <div className="text-2xl font-bold">65 kg</div>
          <div className="text-sm text-gray-500 mt-2">
            Stabil selama 3 bulan
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 font-medium">Gula Darah</h3>
            <span className="text-blue-500 text-xl">📊</span>
          </div>
          <div className="text-2xl font-bold">100 mg/dL</div>
          <div className="text-sm text-gray-500 mt-2">Normal</div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-500 font-medium">Kolesterol</h3>
            <span className="text-blue-500 text-xl">❤️</span>
          </div>
          <div className="text-2xl font-bold">180 mg/dL</div>
          <div className="text-sm text-gray-500 mt-2">
            Perlu perhatikan diet
          </div>
        </div>
      </div>

      {/* Upcoming Appointments & Medications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100">
          <div className="border-b border-gray-100 p-6">
            <h3 className="font-semibold text-gray-800">
              Jadwal Kunjungan Mendatang
            </h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-start space-x-4">
              <div className="min-w-fit bg-blue-100 text-blue-600 rounded-lg p-3 text-center">
                <div className="text-sm font-medium">APR</div>
                <div className="text-xl font-bold">22</div>
              </div>
              <div className="flex-1">
                <h4 className="font-medium">Pemeriksaan Rutin Anak</h4>
                <p className="text-sm text-gray-500 mb-2">
                  dr. Siti Rahayu, Sp.A - 10:00 WIB
                </p>
                <div className="flex space-x-2">
                  <button className="text-sm text-blue-600 hover:text-blue-800">
                    Reschedule
                  </button>
                  <button className="text-sm text-red-600 hover:text-red-800">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="min-w-fit bg-blue-100 text-blue-600 rounded-lg p-3 text-center">
                <div className="text-sm font-medium">MEI</div>
                <div className="text-xl font-bold">15</div>
              </div>
              <div className="flex-1">
                <h4 className="font-medium">Kontrol Tekanan Darah</h4>
                <p className="text-sm text-gray-500 mb-2">
                  dr. Budi Santoso, Sp.PD - 13:30 WIB
                </p>
                <div className="flex space-x-2">
                  <button className="text-sm text-blue-600 hover:text-blue-800">
                    Reschedule
                  </button>
                  <button className="text-sm text-red-600 hover:text-red-800">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-100 p-4 text-center">
            <button className="text-blue-600 font-medium hover:text-blue-800">
              Lihat Semua Jadwal
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100">
          <div className="border-b border-gray-100 p-6">
            <h3 className="font-semibold text-gray-800">Pengobatan Aktif</h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center space-x-4">
              <div className="min-w-fit bg-teal-100 text-teal-600 rounded-lg p-3">
                <span className="text-xl">💊</span>
              </div>
              <div className="flex-1">
                <h4 className="font-medium">Amoxicillin</h4>
                <p className="text-sm text-gray-500">
                  500mg - 3x sehari setelah makan
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-teal-500 h-2 rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">6 dari 10 hari</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="min-w-fit bg-teal-100 text-teal-600 rounded-lg p-3">
                <span className="text-xl">💊</span>
              </div>
              <div className="flex-1">
                <h4 className="font-medium">Paracetamol</h4>
                <p className="text-sm text-gray-500">
                  500mg - jika diperlukan, maks 3x sehari
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div
                    className="bg-teal-500 h-2 rounded-full"
                    style={{ width: "30%" }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">3 dari 10 hari</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-100 p-4 text-center">
            <button className="text-blue-600 font-medium hover:text-blue-800">
              Lihat Semua Pengobatan
            </button>
          </div>
        </div>
      </div>

      {/* Health Tips */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="border-b border-gray-100 p-6">
          <h3 className="font-semibold text-gray-800">
            Tips Kesehatan Untukmu
          </h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-2xl mb-2">💧</div>
              <h4 className="font-medium mb-2">Hidrasi yang Cukup</h4>
              <p className="text-sm text-gray-600">
                Pastikan Anda minum setidaknya 8 gelas air per hari untuk
                menjaga kesehatan tubuh.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-2xl mb-2">🥗</div>
              <h4 className="font-medium mb-2">Pola Makan Seimbang</h4>
              <p className="text-sm text-gray-600">
                Konsumsi makanan bergizi dengan porsi yang seimbang untuk
                menjaga berat badan ideal.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-2xl mb-2">🚶</div>
              <h4 className="font-medium mb-2">Aktivitas Fisik</h4>
              <p className="text-sm text-gray-600">
                Lakukan olahraga ringan minimal 30 menit setiap hari untuk
                kesehatan jantung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Komponen untuk appointment (jadwal kunjungan)
const Appointment = () => {
  const [view, setView] = useState("upcoming"); // upcoming, history, new

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="border-b border-gray-100 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
          <h3 className="font-semibold text-gray-800">Jadwal Kunjungan</h3>
          <div className="flex space-x-2">
            <button
              onClick={() => setView("upcoming")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                view === "upcoming"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Mendatang
            </button>
            <button
              onClick={() => setView("history")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                view === "history"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Riwayat
            </button>
            <button
              onClick={() => setView("new")}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                view === "new"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Buat Baru
            </button>
          </div>
        </div>

        {view === "upcoming" && (
          <div className="p-6">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="sm:w-1/6 mb-4 sm:mb-0">
                  <div className="bg-white text-blue-600 rounded-lg py-2 px-4 text-center">
                    <div className="text-sm font-medium">April</div>
                    <div className="text-2xl font-bold">22</div>
                    <div className="text-sm">2025</div>
                  </div>
                </div>
                <div className="sm:w-2/6 mb-4 sm:mb-0">
                  <h4 className="font-semibold">Pemeriksaan Rutin Anak</h4>
                  <p className="text-sm text-gray-600">dr. Siti Rahayu, Sp.A</p>
                  <div className="flex items-center text-blue-600 mt-1">
                    <span className="text-sm mr-1">📍</span>
                    <span className="text-sm">Poli Anak, Lantai 2</span>
                  </div>
                </div>
                <div className="sm:w-2/6 mb-4 sm:mb-0">
                  <div className="flex items-center text-gray-600 mb-1">
                    <span className="text-sm mr-1">🕒</span>
                    <span className="text-sm">10:00 - 10:30 WIB</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="text-sm mr-1">📝</span>
                    <span className="text-sm">Rujukan dari Dokter Umum</span>
                  </div>
                  <div className="flex items-center text-green-600 mt-1">
                    <span className="text-sm mr-1">✓</span>
                    <span className="text-sm">Konfirmasi</span>
                  </div>
                </div>
                <div className="sm:w-1/6 flex flex-col space-y-2">
                  <button className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-50">
                    Ubah
                  </button>
                  <button className="bg-white text-red-600 border border-red-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-red-50">
                    Batal
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="sm:w-1/6 mb-4 sm:mb-0">
                  <div className="bg-white text-blue-600 rounded-lg py-2 px-4 text-center">
                    <div className="text-sm font-medium">Mei</div>
                    <div className="text-2xl font-bold">15</div>
                    <div className="text-sm">2025</div>
                  </div>
                </div>
                <div className="sm:w-2/6 mb-4 sm:mb-0">
                  <h4 className="font-semibold">Kontrol Tekanan Darah</h4>
                  <p className="text-sm text-gray-600">
                    dr. Budi Santoso, Sp.PD
                  </p>
                  <div className="flex items-center text-blue-600 mt-1">
                    <span className="text-sm mr-1">📍</span>
                    <span className="text-sm">
                      Poli Penyakit Dalam, Lantai 1
                    </span>
                  </div>
                </div>
                <div className="sm:w-2/6 mb-4 sm:mb-0">
                  <div className="flex items-center text-gray-600 mb-1">
                    <span className="text-sm mr-1">🕒</span>
                    <span className="text-sm">13:30 - 14:00 WIB</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="text-sm mr-1">📝</span>
                    <span className="text-sm">Pemeriksaan Rutin</span>
                  </div>
                  <div className="flex items-center text-yellow-600 mt-1">
                    <span className="text-sm mr-1">⌛</span>
                    <span className="text-sm">Menunggu Konfirmasi</span>
                  </div>
                </div>
                <div className="sm:w-1/6 flex flex-col space-y-2">
                  <button className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-50">
                    Ubah
                  </button>
                  <button className="bg-white text-red-600 border border-red-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-red-50">
                    Batal
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {view === "history" && (
          <div className="p-6">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="sm:w-1/6 mb-4 sm:mb-0">
                  <div className="bg-white text-gray-600 rounded-lg py-2 px-4 text-center">
                    <div className="text-sm font-medium">Maret</div>
                    <div className="text-2xl font-bold">10</div>
                    <div className="text-sm">2025</div>
                  </div>
                </div>
                <div className="sm:w-2/6 mb-4 sm:mb-0">
                  <h4 className="font-semibold">Pemeriksaan Umum</h4>
                  <p className="text-sm text-gray-600">dr. Nina Wijaya</p>
                  <div className="flex items-center text-gray-600 mt-1">
                    <span className="text-sm mr-1">📍</span>
                    <span className="text-sm">Poli Umum, Lantai 1</span>
                  </div>
                </div>
                <div className="sm:w-2/6 mb-4 sm:mb-0">
                  <div className="flex items-center text-gray-600 mb-1">
                    <span className="text-sm mr-1">🕒</span>
                    <span className="text-sm">09:00 - 09:30 WIB</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="text-sm mr-1">📝</span>
                    <span className="text-sm">Demam & Batuk</span>
                  </div>
                  <div className="flex items-center text-green-600 mt-1">
                    <span className="text-sm mr-1">✓</span>
                    <span className="text-sm">Selesai</span>
                  </div>
                </div>
                <div className="sm:w-1/6">
                  <button className="w-full bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-50">
                    Lihat Detail
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="sm:w-1/6 mb-4 sm:mb-0">
                  <div className="bg-white text-gray-600 rounded-lg py-2 px-4 text-center">
                    <div className="text-sm font-medium">Feb</div>
                    <div className="text-2xl font-bold">15</div>
                    <div className="text-sm">2025</div>
                  </div>
                </div>
                <div className="sm:w-2/6 mb-4 sm:mb-0">
                  <h4 className="font-semibold">Pemeriksaan Gigi</h4>
                  <p className="text-sm text-gray-600">drg. Ahmad Fadli</p>
                  <div className="flex items-center text-gray-600 mt-1">
                    <span className="text-sm mr-1">📍</span>
                    <span className="text-sm">Poli Gigi, Lantai 1</span>
                  </div>
                </div>
                <div className="sm:w-2/6 mb-4 sm:mb-0">
                  <div className="flex items-center text-gray-600 mb-1">
                    <span className="text-sm mr-1">🕒</span>
                    <span className="text-sm">11:00 - 11:30 WIB</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="text-sm mr-1">📝</span>
                    <span className="text-sm">
                      Scaling & Pembersihan Karang Gigi
                    </span>
                  </div>
                  <div className="flex items-center text-green-600 mt-1">
                    <span className="text-sm mr-1">✓</span>
                    <span className="text-sm">Selesai</span>
                  </div>
                </div>
                <div className="sm:w-1/6">
                  <button className="w-full bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-50">
                    Lihat Detail
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {view === "new" && (
          <div className="p-6">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Jenis Layanan
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Pilih Jenis Layanan</option>
                    <option value="umum">Pemeriksaan Umum</option>
                    <option value="gigi">Pemeriksaan Gigi</option>
                    <option value="anak">Pemeriksaan Anak</option>
                    <option value="dalam">Penyakit Dalam</option>
                    <option value="vaksinasi">Vaksinasi</option>
                    <option value="lab">Pemeriksaan Lab</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Dokter
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Pilih Dokter</option>
                    <option value="dr-nina">dr. Nina Wijaya (Umum)</option>
                    <option value="dr-budi">
                      dr. Budi Santoso, Sp.PD (Penyakit Dalam)
                    </option>
                    <option value="dr-siti">
                      dr. Siti Rahayu, Sp.A (Anak)
                    </option>
                    <option value="drg-ahmad">drg. Ahmad Fadli (Gigi)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tanggal
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Jam
                  </label>
                  <input
                    type="time"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                // Lanjutan dari div yang terputus di form view 'new'
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Waktu
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Pilih Waktu</option>
                    <option value="08:00">08:00 WIB</option>
                    <option value="09:00">09:00 WIB</option>
                    <option value="10:00">10:00 WIB</option>
                    <option value="11:00">11:00 WIB</option>
                    <option value="13:00">13:00 WIB</option>
                    <option value="14:00">14:00 WIB</option>
                    <option value="15:00">15:00 WIB</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Catatan Tambahan
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Masukkan catatan atau keluhan tambahan (opsional)"
                ></textarea>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
                >
                  Buat Jadwal
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

// Komponen utama Dashboard
const Dashboard = () => {
  const [activePage, setActivePage] = useState("overview");
  const user = {
    name: "John Doe",
    image: "/api/placeholder/100/100",
  };

  const renderContent = () => {
    switch (activePage) {
      case "overview":
        return <Overview user={user} />;
      case "appointment":
        return <Appointment />;
      case "medical-record":
        return <MedicalRecord />;
      case "medicine":
        return <Medicine />;
      case "lab-results":
        return <LabResults />;
      case "vaccination":
        return <Vaccination />;
      case "messages":
        return <Messages />;
      case "profile":
        return <Profile />;
      default:
        return <Overview user={user} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Head>
        <title>Puskesmas Dashboard</title>
        <meta
          name="description"
          content="Dashboard pasien untuk layanan puskesmas"
        />
      </Head>

      {/* Sidebar */}
      <Sidebar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header user={user} />
        <main className="flex-1 p-6 overflow-y-auto">{renderContent()}</main>
      </div>
    </div>
  );
};

// Contoh komponen tambahan (MedicalRecord) untuk kelengkapan
const MedicalRecord = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="border-b border-gray-100 p-6">
          <h3 className="font-semibold text-gray-800">Rekam Medis</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="border-b border-gray-100 pb-4">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">
                    Pemeriksaan Umum - 10 Maret 2025
                  </h4>
                  <p className="text-sm text-gray-600">dr. Nina Wijaya</p>
                </div>
                <button className="text-blue-600 text-sm hover:text-blue-800">
                  Lihat Detail
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Diagnosa: Demam & Batuk, Resep: Paracetamol 500mg
              </p>
            </div>
            <div className="border-b border-gray-100 pb-4">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium">
                    Pemeriksaan Gigi - 15 Februari 2025
                  </h4>
                  <p className="text-sm text-gray-600">drg. Ahmad Fadli</p>
                </div>
                <button className="text-blue-600 text-sm hover:text-blue-800">
                  Lihat Detail
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Diagnosa: Karang Gigi, Tindakan: Scaling
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100 p-4 text-center">
          <button className="text-blue-600 font-medium hover:text-blue-800">
            Lihat Semua Rekam Medis
          </button>
        </div>
      </div>
    </div>
  );
};

// Placeholder untuk komponen lain (agar kode tetap modular)
const Medicine = () => {
  return (
    <div className="space-y-6">
      <h3>Pengobatan</h3>
      <p>Halaman ini sedang dalam pengembangan.</p>
    </div>
  );
};

const LabResults = () => {
  return (
    <div className="space-y-6">
      <h3>Hasil Lab</h3>
      <p>Halaman ini sedang dalam pengembangan.</p>
    </div>
  );
};

const Vaccination = () => {
  return (
    <div className="space-y-6">
      <h3>Vaksinasi</h3>
      <p>Halaman ini sedang dalam pengembangan.</p>
    </div>
  );
};

const Messages = () => {
  return (
    <div className="space-y-6">
      <h3>Pesan</h3>
      <p>Halaman ini sedang dalam pengembangan.</p>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="space-y-6">
      <h3>Profil</h3>
      <p>Halaman ini sedang dalam pengembangan.</p>
    </div>
  );
};

export default Dashboard;
