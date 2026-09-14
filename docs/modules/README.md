# Teaching Assistant (TA) Companion & Module Guides — StudyFlow

Dokumen ini ditujukan bagi **Teaching Assistant (Asisten Praktikum)** laboratorium informatika untuk memandu praktikan memahami keterkaitan antara materi perkuliahan dengan implementasi nyata pada proyek **StudyFlow**.

Setiap materi dirancang agar asisten tidak sekadar memberikan instruksi sintaks (*spoon-feeding*), melainkan menstimulasi nalar rekayasa perangkat lunak mahasiswa (*engineering mindset*).

---

## 1. Pedoman Interaksi Asisten Praktikum

Saat mendampingi praktikan di laboratorium:
1. **Jangan Langsung Memberikan Jawaban:** Ketika praktikan menghadapi galat (*error*) atau kebingungan layout, tanyakan apa yang mereka harapkan terjadi vs apa yang sebenarnya muncul di layar/terminal.
2. **Arahkan ke Pemeriksaan Sumber Kebenaran (*Ground Truth*):** Bimbing praktikan memeriksa Developer Tools browser (Elements tab, Console, Network tab) atau terminal Git log sebelum menyimpulkan kode rusak.
3. **Kaitkan ke Prinsip Produk StudyFlow:** Ingatkan praktikan bahwa setiap baris kode bertujuan mempermudah mahasiswa mengelola aktivitas akademiknya.

---

## 2. Peta Konsep Modul Awal & Panduan Asistensi

### Modul 1: Aturan Praktikum & Version Control (Git)

* **Konsep Inti:** Distributed Version Control System (DVCS), Staging area vs Working Tree, Branching strategy, Remote collaboration via GitHub.
* **Mengapa Digunakan:** Memungkinkan kolaborasi tim tanpa saling menimpa kode, mencatat rekam jejak evolusi sistem, dan memberikan jaring pengaman saat terjadi regresi kode.
* **Manifestasi di StudyFlow:**
  - Branching model: `main` (stabil) $\leftarrow$ `dev` (integrasi) $\leftarrow$ `feat/*`, `fix/*`, `docs/*`.
  - Praktikan mengembangkan fitur StudyFlow di feature branch masing-masing sebelum digabungkan ke `dev`.
* **Common Mistakes Praktikan:**
  1. Melakukan commit atau development langsung pada branch `main`.
  2. Menggunakan nama branch generik seperti `coba`, `test`, `baru`.
  3. Lupa melakukan `git add` sebelum `git commit`.
  4. Melakukan `git push --force` saat terjadi *divergence*.
* **Debugging Guidance untuk TA:**
  - Minta praktikan menjalankan `git status` dan `git branch -a`.
  - Jika praktikan keliru membuat branch dari `main` alih-alih `dev`: ajarkan cara `git switch dev` $\rightarrow$ `git switch -c feat/...`.
* **Pertanyaan Pemantik (*Probing Questions*):**
  - *"Apa perbedaan mendasar antara `git status` dan `git log`?"*
  - *"Mengapa kita dilarang melakukan commit langsung ke branch `main` pada alur kerja tim?"*
  - *"Apa risiko fatal dari perintah `git push --force` terhadap repositori bersama?"*

---

### Modul 2: Semantic HTML5 & Aksesibilitas Web Dasar

* **Konsep Inti:** Makna struktural elemen HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<form>`, `<footer>`), hierarki heading (`<h1>`–`<h6>`), aksesibilitas (`alt`, `label[for]`).
* **Mengapa Digunakan:** Membantu mesin pencari (SEO), memudahkan pembaca layar (*screen reader* bagi pengguna disabilitas), dan menjaga kode tetap mudah dirawat oleh pengembang lain.
* **Manifestasi di StudyFlow:**
  - `<header>` memuat branding dan navigasi sistem.
  - `<main>` menjadi pembungkus tunggal seluruh konten utama halaman.
  - Setiap task akademik diwadahi dalam tag `<article>` karena merupakan unit konten mandiri yang memiliki makna utuh.
  - Form penambahan tugas menggunakan pasangan `<label for="task-title">` dan `<input id="task-title">` yang saling terikat secara eksplisit.
* **Common Mistakes Praktikan:**
  1. Menggunakan tag non-semantik `<div>` untuk seluruh wadah antarmuka (*"div soup"*).
  2. Menggunakan lebih dari satu tag `<h1>` dalam satu halaman atau melompati tingkat heading (misal dari `<h1>` langsung ke `<h4>`).
  3. Menggunakan tag `<a>` untuk aksi yang seharusnya berupa tombol `<button>`, atau sebaliknya.
  4. Form input tidak memiliki `<label>`, atau `for` pada label tidak cocok dengan `id` pada input.
* **Debugging Guidance untuk TA:**
  - Nonaktifkan CSS sementara di browser (Inspect Element $\rightarrow$ matikan `<link rel="stylesheet">`). Jika urutan dan makna konten halaman tetap terbaca rapi dan logis, struktur semantiknya sudah benar.
* **Pertanyaan Pemantik (*Probing Questions*):**
  - *"Mengapa kartu tugas di StudyFlow lebih tepat menggunakan tag `<article>` daripada sekadar `<div>`?"*
  - *"Apa yang terjadi pada pengguna tunanetra dengan screen reader jika kita membuat tombol menggunakan `<div onclick="...">` alih-alih elemen `<button>`?"*
  - *"Apa fungsi atribut `for` pada elemen `<label>` saat diklik oleh pengguna di layar sentuh?"*

---

### Modul 3: Cascading Style Sheets (CSS) Native & Desain Responsif

* **Konsep Inti:** CSS Selectors, Box Model (Margin, Border, Padding, Content), `box-sizing: border-box`, Flexbox (1 dimensi), CSS Grid (2 dimensi), Media Queries (`@media`), Desain Adaptif Mobile-First.
* **Mengapa Digunakan:** Memisahkan konten dan presentasi, menciptakan antarmuka yang bersih, mudah dibaca, serta nyaman digunakan di perangkat layar kecil (ponsel) maupun layar besar (desktop).
* **Manifestasi di StudyFlow:**
  - Tata letak navbar dan tombol aksi form ditata menggunakan Flexbox (`display: flex; justify-content: space-between; gap: ...`).
  - Metrik statistik dashboard dan daftar kartu tugas ditata menggunakan CSS Grid (`display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));`).
  - Responsivitas diatur dengan `@media (max-width: 768px)` dan `@media (max-width: 576px)` agar navbar beralih vertikal dan kartu tugas menyesuaikan lebar layar ponsel.
* **Common Mistakes Praktikan:**
  1. Lupa menyertakan `<meta name="viewport" content="width=device-width, initial-scale=1.0">` sehingga tampilan ponsel otomatis ter-zoom-out kecil.
  2. Lupa mengatur `box-sizing: border-box` sehingga padding menyebabkan elemen meluap (*overflow*).
  3. Menggunakan `display: flex` ketika yang dibutuhkan adalah layout baris-dan-kolom dua dimensi (Grid), atau sebaliknya.
  4. Menumpuk aturan CSS dengan `!important` karena bingung dengan konsep *specificity*.
* **Debugging Guidance untuk TA:**
  - Arahkan praktikan ke tab *Computed* dan *Layout* pada DevTools browser untuk memeriksa box model elemen (margin, padding, border) dan garis panduan flexbox/grid.
* **Pertanyaan Pemantik (*Probing Questions*):**
  - *"Kapan kita sebaiknya memilih CSS Grid daripada Flexbox di halaman StudyFlow?"*
  - *"Bagaimana properti `box-sizing: border-box` mencegah elemen form kita meluap keluar dari kontainernya?"*
  - *"Mengapa pendekatan mobile-first lebih disarankan dalam rekayasa web modern?"*

---

## 3. Struktur Modul Lanjutan

Dokumentasi untuk modul-modul berikutnya (Modul 4 s.d. 16) akan ditambahkan secara bertahap mengikuti silabus praktikum pada folder ini:
- `docs/modules/module-04-frameworks.md`
- `docs/modules/module-05-javascript.md`
- `docs/modules/module-06-07-react-api.md`
- `docs/modules/module-09-10-nestjs-database.md`
- `docs/modules/module-11-security.md`
- `docs/modules/module-12-testing.md`
- `docs/modules/module-13-ai.md`
- `docs/modules/module-14-deployment.md`
