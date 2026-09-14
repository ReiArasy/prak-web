# StudyFlow — Pedagogical Learning Roadmap

Dokumen ini memetakan bagaimana produk **StudyFlow** digunakan sebagai wahana pembelajaran terpadu pada mata kuliah Perancangan dan Pemrograman Web. Setiap modul pembelajaran memperdalam kapabilitas teknis sistem dengan tetap mempertahankan integritas produk yang sama (*Same Product, Increasing Technical Depth*).

---

## Peta Perkembangan Sistem

```text
[Modul 1-3] Fondasi Web Native: HTML5 Semantic + CSS Layouting + Aksesibilitas
     │
     ▼
[Modul 4] Framework Styling Modern: Bootstrap & Utility-First Tailwind CSS
     │
     ▼
[Modul 5] Logika Pemrograman Client-Side: JavaScript ES6+ & DOM Manipulation
     │
     ▼
[Modul 6-7] Arsitektur Komponen Frontend: React.js, State Management & Konsumsi REST API
     │
     ▼
[Modul 8] Coding on the Spot 1 (Integrasi Frontend & Evaluasi Kemampuan Analisis)
     │
     ▼
[Modul 9-10] Backend Engineering & Basis Data Relasional: NestJS + Prisma ORM + PostgreSQL
     │
     ▼
[Modul 11] Keamanan Web & Autentikasi: JSON Web Token (JWT) + Hashing bcrypt + Guards
     │
     ▼
[Modul 12] Penjaminan Kualitas Perangkat Lunak: Automated Testing (Jest/Supertest) & Query Tuning
     │
     ▼
[Modul 13] Integrasi AI Berbasis Layanan Cloud: LLM Proxy Pattern (Groq API Task Composer)
     │
     ▼
[Modul 14] Cloud Deployment & DevSecOps: Neon Database + Render Backend + Vercel Frontend
     │
     ▼
[Modul 15-16] Coding on the Spot 2 & Evaluasi Komprehensif Produk Full-Stack
```

---

## Rincian Kurikulum & Manifestasi pada StudyFlow

### Tahap 1: Struktur, Semantik & Aksesibilitas (HTML5)
* **Konsep Inti:**
  - Anatomi dokumen HTML5, elemen semantic (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
  - Formulir input terstruktur (`<form>`, `<fieldset>`, `<legend>`, `<label>`, `<input>`, `<select>`, `<textarea>`).
  - Aksesibilitas web dasar: atribut `alt` pada visual, asosiasi eksplisit `label[for]` dengan `input[id]`.
* **Manifestasi di StudyFlow:**
  - Halaman tunggal yang terstruktur kokoh di mana setiap tugas akademik direpresentasikan sebagai `<article>` independen, dilengkapi dengan dashboard ringkasan statistik dan form penambahan tugas baru. Halaman tetap dapat dibaca secara logis oleh screen reader bahkan tanpa stylesheet.

---

### Tahap 2: Presentasi, Tata Letak & Desain Responsif (CSS Native)
* **Konsep Inti:**
  - CSS Selectors, Box Model, Box Sizing (`border-box`), Tipografi, dan Variabel CSS (*Custom Properties*).
  - Satu dimensi layout dengan **Flexbox** (`flex-direction`, `justify-content`, `align-items`, `gap`).
  - Dua dimensi layout dengan **CSS Grid** (`grid-template-columns`, `fr` unit, responsive grid).
  - Desain adaptif multi-layar dengan **Media Queries** & `<meta name="viewport">`.
* **Manifestasi di StudyFlow:**
  - Menata antarmuka StudyFlow agar clean, profesional, dan ergonomis. Navigasi beralih mulus dari baris horizontal pada desktop menjadi tata letak vertikal pada mobile; kartu tugas tersusun dalam grid yang adaptif dari 1 kolom (smartphone) hingga multi-kolom (desktop).

---

### Tahap 3: Framework Styling & Desain Skala Besar (Bootstrap & Tailwind)
* **Konsep Inti:**
  - Pendekatan berbasis komponen (*Component-based styling*) pada Bootstrap 5.
  - Pendekatan *Utility-first* pada Tailwind CSS.
  - Perbandingan trade-off antara kecepatan prototyping vs fleksibilitas kustomisasi desain.
* **Manifestasi di StudyFlow:**
  - Eksplorasi pembuatan varian antarmuka StudyFlow menggunakan komponen form/card Bootstrap vs penyusunan micro-utilities Tailwind.

---

### Tahap 4: Interaktivitas Client-Side & DOM (JavaScript ES6+)
* **Konsep Inti:**
  - JavaScript modern: `let`/`const`, Arrow Functions, Template Literals, Destructuring, Spread/Rest.
  - Penelusuran pohon DOM (*DOM Tree Traversal*): `querySelector`, `querySelectorAll`, `getElementById`.
  - Manipulasi DOM dinamis: `createElement`, `appendChild`, `classList.toggle`.
  - Penanganan interaksi pengguna: Event Listeners (`submit`, `click`, `change`).
* **Manifestasi di StudyFlow:**
  - Pengguna dapat menambahkan tugas secara interaktif tanpa reload halaman, mencentang status tugas selesai (*strike-through visual*), serta melakukan penyaringan tugas (*filter by priority/status*) di memori browser.

---

### Tahap 5: Arsitektur Antarmuka Berbasis Komponen (React.js)
* **Konsep Inti:**
  - Paradigma deklaratif vs imperatif, sintaks JSX.
  - Dekomposisi UI menjadi *Functional Components* mandiri (`Navbar`, `TaskCard`, `TaskForm`, `StatsDashboard`).
  - Aliran data satu arah (*Unidirectional Data Flow*) melalui `props`.
  - Manajemen *local state* dengan React Hook `useState`.
  - Perenderan daftar berulang (*List Rendering*) menggunakan `.map()` dan atribut `key` yang unik.
* **Manifestasi di StudyFlow:**
  - Seluruh antarmuka StudyFlow dimigrasikan ke arsitektur SPA (*Single Page Application*) modern berbasis Vite + React, meningkatkan modularitas dan pemeliharaan kode secara signifikan.

---

### Tahap 6: Asinkronitas & Konsumsi API Eksternal (AJAX / Fetch / Axios)
* **Konsep Inti:**
  - Konsep pemrograman asinkron: Event Loop, Callback, Promise, dan `async/await`.
  - HTTP Request methods (`GET`, `POST`, `PATCH`, `DELETE`).
  - Integrasi dengan React Lifecycle menggunakan Hook `useEffect`.
  - State manajemen request siklus hidup: `loading`, `error`, dan `success`.
* **Manifestasi di StudyFlow:**
  - Antarmuka StudyFlow mampu mengambil data tugas secara asinkron dari server/mock endpoint, menampilkan indikator *loading skeleton*, serta menampilkan pesan error yang informatif saat jaringan bermasalah.

---

### Tahap 7: Backend Engineering & REST API (NestJS)
* **Konsep Inti:**
  - Arsitektur Model-View-Controller (MVC) pada lingkungan Node.js/TypeScript.
  - Modul, Controller, dan Service; Dependency Injection (Inversion of Control).
  - Validasi ketat menggunakan Data Transfer Objects (DTO) dan `ValidationPipe` (`class-validator`).
  - Penanganan error terpusat menggunakan global `HttpExceptionFilter`.
  - Kebijakan keamanan peramban: Konfigurasi Cross-Origin Resource Sharing (CORS).
* **Manifestasi di StudyFlow:**
  - StudyFlow memiliki server backend mandiri (`perancangan-pemrograman-be`) yang mengekspos endpoint RESTful `/tasks` untuk operasi CRUD data akademik secara terstandarisasi.

---

### Tahap 8: Persistensi Data Relasional (PostgreSQL & Prisma ORM)
* **Konsep Inti:**
  - Keterbatasan penyimpanan data dalam memori (*in-memory volatile storage*).
  - Desain skema basis data relasional: tabel, tipe kolom, constraint, indeks.
  - Konsep Object-Relational Mapping (ORM) dan abstraksi query.
  - Alur kerja migrasi skema (*schema migration workflow*) dan Prisma Client generator.
* **Manifestasi di StudyFlow:**
  - Seluruh data tugas akademik disimpan secara permanen di basis data PostgreSQL. Perubahan data dicatat dengan timestamp `createdAt` dan `updatedAt` yang otomatis dikelola oleh Prisma ORM.

---

### Tahap 9: Keamanan Web & Autentikasi Pengguna (JWT & Security Hardening)
* **Konsep Inti:**
  - Autentikasi berbasis token (*stateless JWT*) vs sesi berbasis cookie (*stateful session*).
  - Keamanan penyimpanan kata sandi menggunakan salted one-way hashing (`bcrypt`).
  - Proteksi endpoint backend menggunakan NestJS `Guards` dan `PassportStrategy`.
  - Mitigasi kerentanan keamanan web klasik: SQL Injection (SQLi), Cross-Site Scripting (XSS), Cross-Site Request Forgery (CSRF), Brute-Force Rate Limiting (Throttler), dan Security Headers (Helmet).
* **Manifestasi di StudyFlow:**
  - Mahasiswa memiliki akun terdaftar (`/auth/register`, `/auth/login`). Setiap tugas terikat secara aman kepada pemilik akun (*multi-tenant task isolation*), dan endpoint dilindungi oleh `JwtAuthGuard`.

---

### Tahap 10: Penjaminan Kualitas & Optimasi Kinerja (Testing & Tuning)
* **Konsep Inti:**
  - Konsep Piramida Pengujian (*Testing Pyramid*): Unit Test, Integration Test, End-to-End (E2E) Test.
  - Pola Arrange–Act–Assert (AAA) dan pembuatan *Test Doubles* (Mocking Prisma Service).
  - Pengujian E2E menggunakan Jest dan Supertest.
  - Analisis kinerja kueri: mitigasi masalah *Over-fetching*, *Full Table Scan*, dan *N+1 Query*.
  - Optimasi: Pagination offset (`skip`/`take`), pemindahan filter ke level database engine, serta penambahan indeks basis data (`@@index`).
* **Manifestasi di StudyFlow:**
  - Rangkaian pengujian otomatis menjamin keandalan fitur kritis StudyFlow (registrasi, login, pembuatan task). Query daftar tugas berjalan cepat dengan pagination dan indeks pada kolom status dan tanggal.

---

### Tahap 11: Integrasi Kecerdasan Buatan (AI Natural Language Task Composer)
* **Konsep Inti:**
  - Pola arsitektur Model-as-a-Service (MaaS) melalui antarmuka REST API.
  - Backend for Frontend (BFF) sebagai Authenticated Proxy untuk menjaga kerahasiaan API Key.
  - Karakteristik non-deterministik LLM dan prinsip validasi ganda (*Double Validation: JSON schema + runtime normalization*).
  - Prinsip *Human-in-the-Loop*: AI membantu menyusun draf, pengguna yang mengonfirmasi penyimpanan.
* **Manifestasi di StudyFlow:**
  - Mahasiswa dapat mengetikkan teks alami seperti *"Besok sore kumpulkan laporan basis data, prioritas tinggi"*, kemudian asisten AI mengekstrak judul, tanggal tenggat, dan tingkat prioritas secara terstruktur ke dalam form untuk ditinjau sebelum disimpan.

---

### Tahap 12: Penerapan ke Lingkungan Produksi Cloud (Deployment)
* **Konsep Inti:**
  - Perbedaan mendasar antara lingkungan *Development* dan *Production*.
  - Prinsip *The Twelve-Factor App*: Pemisahan konfigurasi dan kredensial dari kode sumber menggunakan environment variables.
  - Pembuatan *Build Artifact* yang teroptimasi (Vite static bundle & compiled NestJS binary).
  - Basis data PostgreSQL terkelola (*Serverless Postgres* via Neon).
  - Hosting layanan backend web service ber-HTTPS (Render).
  - Hosting antarmuka frontend SPA dengan Single-Page Rewrite rules (Vercel).
  - Konfigurasi CORS produksi dan pencegahan *Mixed Content*.
* **Manifestasi di StudyFlow:**
  - StudyFlow dapat diakses secara publik melalui internet dengan domain produksi aman ber-HTTPS, siap digunakan secara nyata oleh mahasiswa di lingkungan kampus.
