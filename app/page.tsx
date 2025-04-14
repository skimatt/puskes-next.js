"use client"; // ← Tambahkan ini di baris pertama
// pages/index.tsx
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

// Komponen Banner Utama
const HeroBanner = () => {
  return (
    <div className="relative h-96 w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 opacity-90"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          PUSKESMAS SEHAT BERSAMA
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Melayani dengan Sepenuh Hati untuk Masyarakat Sehat
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-blue-50 transition duration-300">
          Jadwalkan Kunjungan
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

// Komponen Layanan
const ServiceCard = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      <div className="text-blue-500 text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Komponen Dokter
const DoctorCard = ({
  name,
  specialty,
  imageUrl,
}: {
  name: string;
  specialty: string;
  imageUrl: string;
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      <div className="relative h-64 w-full">
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-blue-500">{specialty}</p>
      </div>
    </div>
  );
};

// Komponen Testimoni
const TestimonialCard = ({
  text,
  name,
  role,
}: {
  text: string;
  name: string;
  role: string;
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="text-blue-500 text-4xl mb-4">"</div>
      <p className="text-gray-700 mb-4 italic">{text}</p>
      <div className="font-semibold">{name}</div>
      <div className="text-gray-500 text-sm">{role}</div>
    </div>
  );
};

// Komponen FAQ
const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className="text-blue-500">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <div className="mt-2 text-gray-600">{answer}</div>}
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Puskesmas Sehat Bersama | Pelayanan Kesehatan Terbaik</title>
        <meta
          name="description"
          content="Puskesmas dengan pelayanan kesehatan terbaik untuk masyarakat. Dokter profesional, fasilitas modern, dan pelayanan ramah."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header/Navbar */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-blue-600 font-bold text-xl mr-2">
              <span className="text-teal-500">PUSKES</span>MAS
            </div>
            <div className="hidden md:flex space-x-6 ml-8">
              <a href="#beranda" className="text-blue-600 font-medium">
                Beranda
              </a>
              <a href="#layanan" className="text-gray-600 hover:text-blue-600">
                Layanan
              </a>
              <a href="#dokter" className="text-gray-600 hover:text-blue-600">
                Dokter
              </a>
              <a href="#jadwal" className="text-gray-600 hover:text-blue-600">
                Jadwal
              </a>
              <a href="#kontak" className="text-gray-600 hover:text-blue-600">
                Kontak
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="#emergency"
              className="hidden md:block text-red-500 font-medium"
            >
              Darurat: 0812-3456-7890
            </a>
            <Link href="/login">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                LOGIN
              </button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Banner */}
        <section id="beranda">
          <HeroBanner />
        </section>

        {/* Info COVID */}
        <section className="bg-blue-50 py-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <div className="mb-4 md:mb-0">
                <span className="font-medium text-blue-600">
                  Info Vaksinasi COVID-19
                </span>
              </div>
              <div className="mb-4 md:mb-0">
                <span>Jadwal: Senin-Jumat, 08.00-12.00 WIB</span>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition">
                Info Selengkapnya
              </button>
            </div>
          </div>
        </section>

        {/* Layanan */}
        <section id="layanan" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Layanan Unggulan Kami
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Puskesmas Sehat Bersama menyediakan berbagai layanan kesehatan
                dengan fasilitas modern dan tenaga profesional
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard
                icon="👨‍⚕️"
                title="Konsultasi Dokter"
                description="Konsultasi dengan dokter spesialis berpengalaman untuk mendapatkan pelayanan kesehatan yang terbaik."
              />
              <ServiceCard
                icon="💊"
                title="Farmasi & Apotek"
                description="Menyediakan obat-obatan berkualitas dengan harga terjangkau dan pelayanan apoteker professional."
              />
              <ServiceCard
                icon="🩺"
                title="Pemeriksaan Laboratorium"
                description="Fasilitas laboratorium modern untuk pemeriksaan kesehatan lengkap dengan hasil akurat."
              />
              <ServiceCard
                icon="👶"
                title="Kesehatan Ibu & Anak"
                description="Pelayanan kesehatan khusus untuk ibu hamil dan pemantauan tumbuh kembang anak."
              />
              <ServiceCard
                icon="💉"
                title="Vaksinasi"
                description="Program imunisasi dan vaksinasi untuk berbagai kalangan usia sesuai dengan standar nasional."
              />
              <ServiceCard
                icon="🦷"
                title="Kesehatan Gigi"
                description="Perawatan gigi berkualitas oleh dokter gigi profesional dengan peralatan modern."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-teal-500 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Kesehatan Anda Prioritas Kami
            </h2>
            <p className="text-white mb-8 max-w-2xl mx-auto">
              Jadwalkan kunjungan Anda sekarang untuk mendapatkan pelayanan
              kesehatan terbaik dari tim medis profesional kami.
            </p>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
              <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-blue-50 transition">
                Jadwalkan Kunjungan
              </button>
              <button className="bg-transparent border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:bg-opacity-10 transition">
                Hubungi Kami
              </button>
            </div>
          </div>
        </section>

        {/* Dokter */}
        <section id="dokter" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Tim Dokter Profesional
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Tim dokter kami terdiri dari para profesional yang berpengalaman
                di bidangnya masing-masing
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <DoctorCard
                name="dr. Budi Santoso, Sp.PD"
                specialty="Dokter Spesialis Penyakit Dalam"
                imageUrl="/api/placeholder/300/400"
              />
              <DoctorCard
                name="dr. Siti Rahayu, Sp.A"
                specialty="Dokter Spesialis Anak"
                imageUrl="/api/placeholder/300/400"
              />
              <DoctorCard
                name="drg. Ahmad Fadli"
                specialty="Dokter Gigi"
                imageUrl="/api/placeholder/300/400"
              />
              <DoctorCard
                name="dr. Nina Wijaya"
                specialty="Dokter Umum"
                imageUrl="/api/placeholder/300/400"
              />
            </div>
          </div>
        </section>

        {/* Jadwal */}
        <section id="jadwal" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Jadwal Pelayanan
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Kami melayani pasien setiap hari dengan jadwal yang teratur
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="py-3 px-4 text-left">Hari</th>
                      <th className="py-3 px-4 text-left">Jam Operasional</th>
                      <th className="py-3 px-4 text-left">Layanan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-medium">Senin - Jumat</td>
                      <td className="py-3 px-4">07.00 - 16.00 WIB</td>
                      <td className="py-3 px-4">Semua Layanan</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-medium">Sabtu</td>
                      <td className="py-3 px-4">08.00 - 13.00 WIB</td>
                      <td className="py-3 px-4">Umum & Vaksinasi</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Minggu</td>
                      <td className="py-3 px-4">Tutup</td>
                      <td className="py-3 px-4">Darurat Only</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  Untuk kasus darurat di luar jam operasional, silakan hubungi:
                </p>
                <div className="text-xl font-bold text-red-500">
                  0812-3456-7890
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Apa Kata Mereka
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Dengarkan pengalaman pasien yang telah menggunakan layanan
                Puskesmas Sehat Bersama
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard
                text="Pelayanan yang sangat baik dan cepat. Dokter dan perawat sangat ramah dan profesional. Saya sangat puas dengan perawatan yang saya terima."
                name="Anita Wijaya"
                role="Pasien Umum"
              />
              <TestimonialCard
                text="Anak saya selalu senang kontrol di Puskesmas ini karena suasananya yang menyenangkan dan dokter anak yang sangat sabar."
                name="Bambang Suryanto"
                role="Orang Tua Pasien"
              />
              <TestimonialCard
                text="Fasilitas modern dan bersih, pelayanan cepat, dan harga terjangkau. Sangat direkomendasikan untuk pelayanan kesehatan keluarga."
                name="Dewi Anggrahini"
                role="Pasien BPJS"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Pertanyaan Umum
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Jawaban untuk pertanyaan yang sering ditanyakan tentang layanan
                kami
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <FAQItem
                question="Bagaimana cara mendaftar sebagai pasien baru?"
                answer="Pasien baru dapat mendaftar secara online melalui website atau aplikasi kami, atau datang langsung ke bagian pendaftaran dengan membawa KTP/Kartu Identitas dan kartu BPJS jika ada."
              />
              <FAQItem
                question="Apakah Puskesmas menerima BPJS Kesehatan?"
                answer="Ya, Puskesmas Sehat Bersama menerima pasien BPJS Kesehatan. Pastikan Anda membawa kartu BPJS dan identitas diri saat berkunjung."
              />
              <FAQItem
                question="Bagaimana prosedur rujukan ke rumah sakit?"
                answer="Jika dokter memutuhkan rujukan, kami akan memproses surat rujukan ke rumah sakit yang dituju. Untuk pasien BPJS, rujukan akan dilakukan sesuai dengan prosedur BPJS Kesehatan."
              />
              <FAQItem
                question="Apakah tersedia layanan vaksinasi untuk anak-anak?"
                answer="Ya, kami menyediakan layanan imunisasi dan vaksinasi untuk anak-anak sesuai dengan jadwal imunisasi nasional. Silakan konsultasikan dengan dokter anak kami."
              />
              <FAQItem
                question="Berapa lama waktu tunggu untuk konsultasi dokter?"
                answer="Waktu tunggu bervariasi tergantung jumlah pasien. Untuk meminimalkan waktu tunggu, kami menyarankan untuk mendaftar online dan datang sesuai jadwal yang ditentukan."
              />
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="kontak" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Hubungi Kami
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan
                atau membutuhkan informasi lebih lanjut
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Kirim Pesan</h3>
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Pesan</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition w-full"
                  >
                    Kirim Pesan
                  </button>
                </form>
              </div>
              <div>
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                  <h3 className="text-xl font-semibold mb-4">
                    Informasi Kontak
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="text-blue-500 mr-3">📍</div>
                      <div>
                        <div className="font-medium">Alamat</div>
                        <div className="text-gray-600">
                          Jl. Kesehatan No. 123, Kecamatan Sehat, Kota Bahagia,
                          12345
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-blue-500 mr-3">📞</div>
                      <div>
                        <div className="font-medium">Telepon</div>
                        <div className="text-gray-600">(021) 1234-5678</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-blue-500 mr-3">📧</div>
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-gray-600">
                          info@puskesmassehatbersama.id
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">
                    Jam Operasional
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Senin - Jumat</span>
                      <span className="font-medium">07.00 - 16.00 WIB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sabtu</span>
                      <span className="font-medium">08.00 - 13.00 WIB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Minggu & Hari Libur</span>
                      <span className="font-medium">Tutup</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="font-bold text-2xl mb-4">
                <span className="text-teal-400">PUSKES</span>MAS
              </div>
              <p className="text-blue-200 mb-4">
                Melayani dengan sepenuh hati untuk kesehatan masyarakat yang
                lebih baik.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-200 hover:text-white">
                  <span className="text-xl">📱</span>
                </a>
                <a href="#" className="text-blue-200 hover:text-white">
                  <span className="text-xl">📸</span>
                </a>
                <a href="#" className="text-blue-200 hover:text-white">
                  <span className="text-xl">📘</span>
                </a>
                <a href="#" className="text-blue-200 hover:text-white">
                  <span className="text-xl">📺</span>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Tautan Cepat</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#beranda" className="text-blue-200 hover:text-white">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#layanan" className="text-blue-200 hover:text-white">
                    Layanan
                  </a>
                </li>
                <li>
                  <a href="#dokter" className="text-blue-200 hover:text-white">
                    Dokter
                  </a>
                </li>
                <li>
                  <a href="#jadwal" className="text-blue-200 hover:text-white">
                    Jadwal
                  </a>
                </li>
                <li>
                  <a href="#kontak" className="text-blue-200 hover:text-white">
                    Kontak
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Layanan Kami</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    Konsultasi Dokter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    Kesehatan Ibu & Anak
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    Farmasi & Apotek
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    Vaksinasi
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white">
                    Laboratorium
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">
                Unduh Aplikasi Kami
              </h3>
              <p className="text-blue-200 mb-4">
                Unduh aplikasi kami untuk kemudahan akses layanan kesehatan.
              </p>
              <div className="space-y-2">
                <button className="bg-white text-blue-900 rounded-md px-4 py-2 flex items-center justify-center w-full">
                  <span className="mr-2">📱</span> Google Play
                </button>
                <button className="bg-white text-blue-900 rounded-md px-4 py-2 flex items-center justify-center w-full">
                  <span className="mr-2">🍎</span> App Store
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2025 Puskesmas Sehat Bersama. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
