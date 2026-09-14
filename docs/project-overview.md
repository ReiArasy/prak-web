# StudyFlow — Project Overview

## 1. Latar Belakang & Masalah yang Ingin Diselesaikan

Kehidupan akademik mahasiswa perguruan tinggi (khususnya mahasiswa program studi bidang teknologi informasi seperti Rekayasa Perangkat Lunak) dipenuhi dengan berbagai tuntutan tugas yang simultan:
- Tugas mingguan mata kuliah teori.
- Tugas pendahuluan (TP), laporan, dan jurnal praktikum di laboratorium.
- Proyek besar (*capstone / final project*) beregu dengan tenggat waktu ketat.
- Persiapan Ujian Tengah Semester (UTS) dan Ujian Akhir Semester (UAS).

Permasalahan yang sering dihadapi mahasiswa meliputi:
1. **Disorganisasi Tugas:** Informasi tugas tersebar di berbagai platform (LMS kampus, grup obrolan kelas, email, catatan manual).
2. **Kelalaian Tenggat Waktu (*Missed Deadlines*):** Kesulitan membedakan tugas yang bersifat darurat (*urgent*) vs tugas bernilai strategis (*important*).
3. **Kurangnya Pemantauan Kemajuan (*Progress Tracking*):** Tidak adanya visualisasi ringkas mengenai berapa banyak beban akademik yang telah selesai dan berapa yang masih tertunda.

**StudyFlow** lahir sebagai solusi sistem manajemen tugas akademik personal (*Personal Academic Task Management System*) yang memusatkan pencatatan, pemilahan prioritas, dan pemantauan beban belajar mahasiswa ke dalam satu antarmuka yang bersih, cepat, dan mudah diakses.

---

## 2. Target Pengguna (User Persona)

1. **Mahasiswa (Primary User):**
   - Karakteristik: Membutuhkan alat bantu pencatatan yang cepat, tidak berbelit-belit, dapat dibuka baik di laptop saat di kelas/lab maupun di smartphone saat dalam perjalanan.
   - Tujuan: Mengetahui tugas apa yang paling mendesak untuk dikerjakan hari ini, memantau tenggat waktu, dan menandai tugas yang telah tuntas.
2. **Teaching Assistant / Asisten Laboratorium (Secondary Persona):**
   - Karakteristik: Mengarahkan mahasiswa dalam praktik pengembangan aplikasi web dari tingkat dasar hingga full-stack.
   - Tujuan: Menggunakan domain StudyFlow sebagai studi kasus nyata dalam membedah konsep-konsep arsitektur perangkat lunak web modern.
3. **Dosen / Evaluator:**
   - Karakteristik: Menilai kemampuan rekayasa perangkat lunak mahasiswa melalui kesinambungan evolusi produk (*continuous progressive engineering*).

---

## 3. Konsep & Filosofi Produk StudyFlow

StudyFlow mengusung filosofi:
> **"One product. Progressive development. Clear engineering. Meaningful learning."**

Alih-alih membuat aplikasi contoh yang artifisial (*throwaway demo apps*), StudyFlow dirancang sebagai produk utuh yang tumbuh bersama kemampuan pengembangnya:
- **Bukan Sekadar Todo List:** Setiap task memiliki konteks akademik yang kaya (mata kuliah, jenis tugas, tingkat prioritas, tenggat waktu, deskripsi instruksi).
- **Human-Centered & Actionable:** Menghindari kerumitan fitur yang tidak perlu (*bloatware*). Informasi disajikan secara intuitif dengan hierarki visual yang jelas.
- **Accessible by Default:** Dapat diakses menggunakan screen reader, ramah keyboard, dan memiliki kontras warna yang nyaman untuk penggunaan jangka panjang.

---

## 4. Model Domain Utama

Objek inti pada StudyFlow adalah **Task**.

### Entitas Task:
- `id` (String / UUID): Pengenal unik untuk setiap entitas tugas.
- `title` (String): Judul ringkas tugas (misal: "Kerjakan Jurnal Pemrograman Web Modul 2").
- `description` (Text, opsional): Rincian instruksi atau catatan pengerjaan tugas.
- `course` (String, opsional): Nama mata kuliah terkait (misal: "Perancangan dan Pemrograman Web", "Basis Data").
- `dueDate` (Date / Timestamp): Tanggal dan batas waktu pengumpulan tugas.
- `priority` (Enum: `low`, `medium`, `high`): Tingkat urgensi dan bobot tugas akademik.
- `status` / `done` (Boolean / Enum): Status pengerjaan tugas (`pending`, `in_progress`, `completed`).
- `createdAt` (Timestamp): Waktu pencatatan tugas ke dalam sistem.
- `updatedAt` (Timestamp): Waktu terakhir perubahan atribut tugas dilakukan.

Pada pengembangan fase multi-user, entitas `Task` berelasi dengan entitas `User`:
- `User`: `id`, `name`, `email`, `passwordHash`, `role`, `tasks[]`.

---

## 5. Fitur-Fitur Inti

1. **Dashboard Metrik Akademik:**
   - Menampilkan ringkasan instan: Total Tugas, Tugas Perlu Segera Diselesaikan (*High Priority*), Tugas Dalam Pengerjaan, dan Tugas yang Telah Tuntas.
2. **Daftar Tugas Terstruktur (*Task Directory*):**
   - Penyajian setiap tugas dalam bentuk kartu independen (`<article>`) yang memuat judul, tag mata kuliah, indikator badge prioritas, tanggal deadline, dan tombol aksi (*toggle complete*, *edit*, *delete*).
3. **Formulir Tambah & Edit Tugas:**
   - Formulir terstruktur dengan validasi input, pemilihan prioritas, penentuan deadline, dan field catatan detail.
4. **Penyaringan & Pengurutan (*Filtering & Sorting*):**
   - Memfilter tugas berdasarkan status (`Semua`, `Aktif`, `Selesai`) dan prioritas (`High`, `Medium`, `Low`).
   - Mengurutkan daftar berdasarkan deadline terdekat.

---

## 6. Kemungkinan Evolusi Produk

StudyFlow dirancang agar dapat berkembang secara berkelanjutan melalui lapisan-lapisan kapabilitas berikut:

```text
Fase 1: Fondasi Semantik (HTML5 & Aksesibilitas Web)
   ↓
Fase 2: Presentasi & Desain Responsif (CSS Native: Grid, Flexbox, Variables)
   ↓
Fase 3: Interaktivitas Klien & State Sederhana (JavaScript DOM Manipulation)
   ↓
Fase 4: Arsitektur Berbasis Komponen (React.js, Props, State, Component Lifecycle)
   ↓
Fase 5: Komunikasi Data Asinkron (AJAX, Fetch API, REST Client)
   ↓
Fase 6: Layanan Backend Mandiri (NestJS REST API, DTO, Pipes, Exception Filters)
   ↓
Fase 7: Persistensi Data Relasional (PostgreSQL & Prisma ORM)
   ↓
Fase 8: Keamanan & Multi-User (JWT Authentication, Password Hashing, Guards)
   ↓
Fase 9: Penjaminan Mutu & Kinerja (Jest Automated Unit & E2E Testing, Query Optimization)
   ↓
Fase 10: Integrasi Asisten Kecerdasan Buatan (Natural Language Task Parsing via Groq API)
   ↓
Fase 11: Penerapan ke Lingkungan Produksi Cloud (Vercel, Render, Neon PostgreSQL)
```

Dengan peta evolusi ini, setiap perubahan kode memiliki kesinambungan logis dan mempertahankan relevansi jangka panjang bagi praktikan maupun pengajar.
