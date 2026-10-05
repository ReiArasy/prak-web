// ============================================================================
// [SESI 1] SETUP PROYEK & ANATOMI BERKAS
// Penjelasan: App.jsx adalah komponen root utama yang dihubungkan ke index.html via main.jsx
// ============================================================================

import { useState } from "react";
// [SESI 2] Mengimpor komponen CardMahasiswa untuk digunakan ulang (Reusable UI)
import CardMahasiswa from "./components/CardMahasiswa";

function App() {
  // --------------------------------------------------------------------------
  // [SESI 3] PENGELOLAAN DATA DINAMIS DENGAN STATE (Subbab 6.5)
  // Penjelasan ke Praktikan:
  // 1. Variabel biasa tidak memicu render ulang saat nilainya berubah.
  // 2. useState mengembalikan nilai state dan fungsi setter-nya.
  // --------------------------------------------------------------------------
  
  // State daftar mahasiswa (Array of Objects)
  const [daftarMahasiswa, setDaftarMahasiswa] = useState([
    { id: 1, nama: "Ani", nim: "10121001" },
    { id: 2, nama: "Ana", nim: "10121002" },
    { id: 3, nama: "Ane", nim: "10121003" }
  ]);

  // State untuk Controlled Form (menampung apa yang sedang diketik user)
  const [namaBaru, setNamaBaru] = useState("");
  const [nimBaru, setNimBaru] = useState("");

  // --------------------------------------------------------------------------
  // [SESI 3] EVENT HANDLING (Subbab 6.5.1)
  // Penjelasan: Fungsi untuk memproses data form saat tombol submit ditekan
  // --------------------------------------------------------------------------
  const handleTambahMahasiswa = (e) => {
    e.preventDefault(); // Mencegah reload halaman browser

    if (!namaBaru.trim() || !nimBaru.trim()) {
      alert("Nama dan NIM wajib diisi!");
      return;
    }

    const mahasiswaBaru = {
      id: Date.now(), // ID unik menggunakan timestamp
      nama: namaBaru,
      nim: nimBaru
    };

    // Update state secara immutable menggunakan Spread Operator (...)
    setDaftarMahasiswa([...daftarMahasiswa, mahasiswaBaru]);

    // Reset input form
    setNamaBaru("");
    setNimBaru("");
  };

  const handleHapusMahasiswa = (idTarget) => {
    // Menghapus data dengan filter array (immutable)
    const sisa = daftarMahasiswa.filter((mhs) => mhs.id !== idTarget);
    setDaftarMahasiswa(sisa);
  };

  return (
    <div style={{
      maxWidth: "650px",
      margin: "30px auto",
      padding: "0 20px"
    }}>
      {/* Judul Utama Kontras & Besar */}
      <h1 style={{ 
        textAlign: "center", 
        color: "#0f172a", 
        fontSize: "2.2rem", 
        fontWeight: "800",
        marginBottom: "6px" 
      }}>
        Pengelolaan Daftar Mahasiswa
      </h1>

      {/* -------------------------------------------------------------------- */}
      {/* [SESI 3] CONTROLLED FORM (Subbab 6.5.1)                               */}
      {/* Penjelasan: Form terikat langsung ke state via 'value' dan 'onChange'  */}
      {/* -------------------------------------------------------------------- */}
      <form onSubmit={handleTambahMahasiswa} style={{
        backgroundColor: "#ffffff",
        padding: "24px",
        borderRadius: "12px",
        marginBottom: "32px",
        border: "2px solid #cbd5e1",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.08)"
      }}>
        <div style={{ marginBottom: "16px" }}>
          <label style={{ 
            display: "block", 
            marginBottom: "6px", 
            fontSize: "1.15rem", 
            fontWeight: "700",
            color: "#1e293b" 
          }}>
            Nama Lengkap:
          </label>
          <input
            type="text"
            placeholder="Masukkan nama"
            value={namaBaru}
            onChange={(e) => setNamaBaru(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 14px",
              fontSize: "1.1rem",
              borderRadius: "8px",
              border: "2px solid #94a3b8",
              backgroundColor: "#ffffff",
              color: "#0f172a",
              outline: "none"
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ 
            display: "block", 
            marginBottom: "6px", 
            fontSize: "1.15rem", 
            fontWeight: "700",
            color: "#1e293b" 
          }}>
            NIM:
          </label>
          <input
            type="text"
            placeholder="Masukkan NIM"
            value={nimBaru}
            onChange={(e) => setNimBaru(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 14px",
              fontSize: "1.1rem",
              borderRadius: "8px",
              border: "2px solid #94a3b8",
              backgroundColor: "#ffffff",
              color: "#0f172a",
              outline: "none"
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            backgroundColor: "#16a34a",
            color: "#ffffff",
            padding: "14px",
            fontSize: "1.2rem",
            fontWeight: "700",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          + Tambah Mahasiswa
        </button>
      </form>

      {/* -------------------------------------------------------------------- */}
      {/* [SESI 4] RENDER LIST MENGGUNAKAN .map() (Subbab 6.6 & 6.7)             */}
      {/* Penjelasan ke Praktikan:                                             */}
      {/* 1. .map() mengubah setiap item array menjadi komponen CardMahasiswa   */}
      {/* 2. 'key' WAJIB unik agar React melacak perubahan elemen secara tepat  */}
      {/* -------------------------------------------------------------------- */}
      <div>
        <h3 style={{ 
          marginBottom: "16px", 
          color: "#0f172a", 
          fontSize: "1.4rem", 
          fontWeight: "700" 
        }}>
          Total Terdaftar: {daftarMahasiswa.length} Orang
        </h3>

        {daftarMahasiswa.length === 0 ? (
          <p style={{ textAlign: "center", color: "#64748b", fontSize: "1.2rem" }}>
            Belum ada data mahasiswa.
          </p>
        ) : (
          daftarMahasiswa.map((mhs) => (
            <CardMahasiswa
              key={mhs.id} // [SESI 4] Key wajib ada saat me-render list
              id={mhs.id}
              nama={mhs.nama}
              nim={mhs.nim}
              onHapus={handleHapusMahasiswa}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;