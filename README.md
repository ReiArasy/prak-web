# StudyFlow

**Personal Academic Task Management System**

StudyFlow adalah aplikasi web untuk membantu mahasiswa mengelola tugas, aktivitas, dan tanggung jawab akademik secara lebih terstruktur.

Proyek ini dikembangkan sebagai **proyek berkelanjutan** untuk mata kuliah **Perancangan dan Pemrograman Web** pada Program Studi S1 Rekayasa Perangkat Lunak.

Alih-alih membuat proyek yang berbeda pada setiap materi, StudyFlow dikembangkan secara bertahap. Setiap materi memberikan kemampuan teknis baru yang kemudian diterapkan pada produk yang sama.

> **Satu produk, berkembang bersama materi pembelajaran.**

---

# 1. Tentang StudyFlow

Mahasiswa menghadapi berbagai aktivitas akademik seperti:

* tugas mata kuliah,
* jurnal praktikum,
* laporan,
* proyek kelompok,
* deadline pengumpulan,
* persiapan ujian,
* dan aktivitas belajar lainnya.

StudyFlow dirancang sebagai tempat untuk mencatat dan mengelola aktivitas tersebut.

Konsep dasar aplikasi berpusat pada **Task**.

Contoh:

```text
Kerjakan Jurnal Pemrograman Web
Priority: High
Deadline: 20 September 2026
Status: Pending
```

atau:

```text
Belajar React Component
Priority: Medium
Deadline: 25 September 2026
Status: Completed
```

Tujuan utama StudyFlow bukan membuat sistem manajemen proyek yang kompleks, tetapi menyediakan domain aplikasi yang cukup nyata untuk menerapkan berbagai konsep pengembangan web secara bertahap.

---

# 2. Tujuan Proyek

## Tujuan Produk

StudyFlow bertujuan membantu mahasiswa:

* mencatat aktivitas akademik,
* mengatur prioritas,
* menetapkan deadline,
* memantau progress,
* menemukan tugas yang belum selesai,
* dan mengelola aktivitas akademik dalam satu tempat.

## Tujuan Pembelajaran

StudyFlow juga berfungsi sebagai media praktik untuk mempelajari proses pengembangan aplikasi web secara bertahap.

Konsep pembelajaran diterapkan langsung pada produk sehingga mahasiswa dapat melihat hubungan antara teori, kode, dan kebutuhan aplikasi.

---

# 3. Filosofi Pengembangan

StudyFlow menggunakan prinsip:

> **Same Product, Increasing Technical Depth**

Produk tetap sama, tetapi kemampuan teknisnya berkembang.

Contoh evolusi:

```text
HTML
  ↓
CSS
  ↓
JavaScript
  ↓
React
  ↓
API Consumption
  ↓
NestJS
  ↓
PostgreSQL + Prisma
  ↓
JWT Authentication
  ↓
Testing + Performance
  ↓
AI Integration
  ↓
Deployment
```

Dengan pendekatan tersebut, setiap materi tidak berdiri sendiri.

Mahasiswa dapat melihat bagaimana satu aplikasi berkembang dari sebuah halaman web sederhana menjadi aplikasi full-stack.

---

# 4. Konsep Produk

Secara konseptual, StudyFlow memiliki beberapa area utama.

## Dashboard

Tempat pengguna melihat ringkasan aktivitas akademik.

Contoh informasi:

* total task,
* task yang selesai,
* task yang belum selesai,
* task berprioritas tinggi.

## Task Management

Pengguna dapat mengelola task akademik.

Informasi task dapat meliputi:

* judul,
* deskripsi,
* deadline,
* prioritas,
* status penyelesaian.

## Task Overview

Menampilkan task dalam bentuk yang mudah dipindai dan dikelola.

## Task Form

Digunakan untuk membuat atau memperbarui task.

## Authentication

Pada arsitektur yang mendukung multi-user, pengguna dapat memiliki akun sehingga task dapat dikaitkan dengan pemiliknya.

## AI Assistance

Pada tahap pengembangan yang relevan, AI dapat digunakan untuk membantu mengubah instruksi bahasa natural menjadi task terstruktur.

Contoh:

> "Besok jam 10 pagi kumpulkan jurnal web, prioritas tinggi."

menjadi informasi task yang dapat ditinjau oleh pengguna sebelum disimpan.

---

# 5. Model Domain

Objek utama dalam StudyFlow adalah `Task`.

Secara konseptual:

```text
Task
├── id
├── title
├── description
├── dueDate
├── priority
├── done
├── createdAt
└── updatedAt
```

Prioritas:

```text
low
medium
high
```

Pada arsitektur multi-user, Task dapat dimiliki oleh User tertentu.

---

# 6. Arsitektur

StudyFlow dirancang agar dapat berkembang menjadi aplikasi full-stack.

Arsitektur konseptual:

```text
┌─────────────────────────┐
│         User            │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│       Frontend          │
│     React / Vite        │
└────────────┬────────────┘
             │
             │ HTTP / REST
             ▼
┌─────────────────────────┐
│        Backend          │
│         NestJS          │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│       Prisma ORM        │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│       PostgreSQL        │
└─────────────────────────┘
```

Integrasi layanan AI mengikuti pola:

```text
Frontend
   ↓
Authenticated Backend
   ↓
External AI Provider
   ↓
Structured Result
   ↓
Validation
   ↓
User Confirmation
   ↓
Application Data
```

Arsitektur tersebut menjaga agar credential eksternal tidak terekspos ke browser.

---

# 7. Teknologi

Teknologi yang dapat digunakan sepanjang perkembangan proyek mencakup:

### Frontend

* HTML
* CSS
* JavaScript
* React
* Vite
* TypeScript

### Styling

* Native CSS
* Bootstrap
* Tailwind CSS

Teknologi styling digunakan sesuai kebutuhan pembelajaran dan tidak harus digunakan bersamaan.

### Backend

* Node.js
* NestJS
* TypeScript

### Data Layer

* PostgreSQL
* Prisma ORM

### Authentication

* JWT
* bcrypt

### Testing

* Jest
* Supertest

### AI Integration

* External LLM API

### Deployment

* Production PostgreSQL provider
* Backend hosting
* Frontend hosting

Tool dan provider konkret dapat ditentukan sesuai kebutuhan pengembangan dan kebijakan pembelajaran.

---

# 8. Struktur Pengembangan

StudyFlow dikembangkan secara bertahap.

## Foundation

Membangun struktur dan identitas aplikasi.

## Interface

Mengembangkan semantic HTML, styling, layout, responsive design, dan usability.

## Interaction

Menambahkan JavaScript dan interaksi pengguna.

## Component Architecture

Mengembangkan frontend menggunakan component-based architecture.

## API Integration

Menghubungkan frontend dengan sumber data melalui HTTP API.

## Backend

Membangun REST API dan business logic.

## Persistence

Memindahkan data dari penyimpanan sementara ke database relasional.

## Authentication

Menambahkan identitas pengguna dan proteksi resource.

## Quality

Menambahkan automated testing dan optimisasi.

## AI

Menambahkan kemampuan AI sebagai fitur pendukung.

## Deployment

Menjadikan aplikasi tersedia pada environment production.

---

# 9. Prinsip Desain

StudyFlow mengutamakan:

* clarity,
* usability,
* accessibility,
* consistency,
* maintainability,
* responsive design.

Visual interface sebaiknya:

* clean,
* modern,
* professional,
* sederhana,
* mudah dipahami,
* tidak terlalu dekoratif.

Desain tidak boleh mengorbankan keterbacaan kode dan kemudahan pembelajaran hanya demi estetika.

---

# 10. Accessibility

Accessibility merupakan bagian dari kualitas aplikasi.

Prinsip yang diperhatikan meliputi:

* semantic HTML,
* struktur heading,
* label form,
* alternative text,
* keyboard accessibility,
* color contrast,
* focus state,
* button dan link yang memiliki tujuan jelas.

Accessibility tidak diperlakukan sebagai fitur tambahan, tetapi sebagai bagian dari kualitas dasar interface.

---

# 11. Responsive Design

StudyFlow dirancang agar dapat digunakan pada berbagai ukuran layar.

Responsive design harus mempertimbangkan:

* desktop,
* tablet,
* mobile.

Perubahan responsive dapat mencakup:

* jumlah kolom,
* layout navigation,
* ukuran spacing,
* typography,
* task card,
* form layout,
* tabel,
* button group.

---

# 12. Security

Keamanan menjadi bagian dari arsitektur ketika aplikasi berkembang menjadi full-stack.

Prinsip dasar:

* jangan menyimpan password sebagai plaintext,
* jangan menyimpan secret di source code,
* gunakan environment variable untuk credential,
* validasi input,
* lindungi endpoint yang membutuhkan authentication,
* jangan mengekspos API key layanan eksternal ke frontend.

Credential yang bersifat sensitif tidak boleh dimasukkan ke repository.

---

# 13. AI Philosophy

AI dalam StudyFlow diposisikan sebagai **assistant**, bukan sumber kebenaran absolut.

Output AI harus:

1. diterima oleh backend,
2. divalidasi,
3. ditampilkan untuk ditinjau,
4. dikonfirmasi pengguna,
5. baru disimpan sebagai data aplikasi.

Contoh alur:

```text
User Input
     ↓
AI Processing
     ↓
Structured Task
     ↓
Validation
     ↓
User Review
     ↓
Save
```

Dengan pendekatan ini, pengguna tetap berada dalam kontrol terhadap data yang dibuat AI.

---

# 14. Testing

Testing digunakan untuk memastikan bahwa perilaku aplikasi tetap sesuai dengan requirement.

Area pengujian dapat mencakup:

* business logic,
* API,
* authentication,
* validation,
* error handling,
* database interaction,
* end-to-end flow.

Testing juga digunakan sebagai dokumentasi perilaku sistem.

---

# 15. Dokumentasi

Dokumentasi proyek disimpan di repository dan dapat berkembang seiring pertumbuhan sistem:

```text
docs/
├── project-overview.md     # Latar belakang, persona, domain, dan fitur StudyFlow
├── learning-roadmap.md     # Roadmap kurikulum berjenjang (HTML -> Deployment)
├── git-workflow.md         # Panduan alur Git dan branching strategy
└── modules/                # Panduan materi bagi Teaching Assistant (TA)
    └── README.md
```

Tautan dokumentasi resmi:
* [Project Overview](docs/project-overview.md)
* [Learning Roadmap](docs/learning-roadmap.md)
* [Git Workflow & Branching Guide](docs/git-workflow.md)
* [Teaching Assistant Guide](docs/modules/README.md)

Dokumentasi tidak hanya menjelaskan "cara menjalankan", melainkan juga alasan desain, konsep teknis, hubungan antar-layer, dan panduan pengajaran.

---

# 16. Dokumentasi Pembelajaran

Karena StudyFlow digunakan dalam lingkungan praktikum, repository dapat memiliki dokumentasi khusus untuk Teaching Assistant.

Dokumentasi tersebut dapat berisi:

* learning objectives,
* konsep teknis,
* contoh implementasi,
* common mistakes,
* debugging guidance,
* edge cases,
* pertanyaan diskusi,
* kriteria penilaian.

Tujuannya adalah membantu mahasiswa memahami konsep, bukan memberikan jawaban secara instan.

---

# 17. Prinsip & Alur Kerja Git

Repository menggunakan Git sebagai version control dengan model percabangan terstruktur:

```text
main (rilis stabil / production)
 │
 └── dev (integrasi utama pengembangan)
      ├── feat/*      (fitur baru)
      ├── fix/*       (perbaikan bug)
      ├── refactor/*  (refaktor struktur kode)
      └── docs/*      (dokumentasi)
```

Panduan lengkap mengenai alur kerja, penamaan branch, dan keselamatan Git tersedia di [docs/git-workflow.md](docs/git-workflow.md).

Commit sebaiknya memiliki tujuan yang jelas dan mengikuti format Conventional Commits:

```text
feat: add task overview section
fix: fix responsive navigation
refactor: simplify task component
docs: update project architecture
test: add task service tests
```

Perubahan besar sebaiknya tidak digabung dengan perubahan yang tidak berkaitan. Dilarang melakukan force push atau modifikasi langsung pada branch `main`.

---

# 18. Prinsip Kontribusi

Sebelum melakukan perubahan besar:

1. pahami konteks proyek,
2. baca dokumentasi terkait,
3. periksa implementasi yang sudah ada,
4. tentukan layer yang terpengaruh,
5. implementasikan perubahan,
6. lakukan validation,
7. perbarui dokumentasi jika diperlukan.

Jangan melakukan refactor besar tanpa alasan.

Jangan mengubah arsitektur hanya karena ada pendekatan lain yang lebih populer.

---

# 19. Project Quality Standard

Sebuah fitur dianggap selesai apabila:

* requirement terpenuhi,
* implementasi dapat dijalankan,
* error ditangani dengan baik,
* tidak merusak fitur existing,
* kode dapat dibaca,
* perubahan dapat diverifikasi,
* dokumentasi diperbarui jika relevan.

"Berfungsi di komputer developer" bukan satu-satunya ukuran keberhasilan.

---

# 20. Repository Structure

Struktur repository dapat berkembang sesuai kebutuhan, tetapi secara umum dapat mengikuti pola:

```text
prak-web/
│
├── AGENTS.md
├── README.md
│
├── docs/
│   ├── project-overview.md
│   ├── learning-roadmap.md
│   ├── architecture.md
│   ├── modules/
│   └── troubleshooting/
│
├── src/
│   ├── frontend/
│   └── backend/
│
├── assets/
│
└── ...
```

Struktur aktual dapat berubah ketika kebutuhan teknis berkembang.

Jangan membuat struktur folder hanya untuk memenuhi pola tertentu.

Struktur harus mengikuti tanggung jawab dan kebutuhan proyek.

---

# 21. Development Philosophy

StudyFlow dibangun dengan prinsip:

### Simplicity

Gunakan solusi sesederhana mungkin tanpa mengorbankan correctness.

### Clarity

Kode harus mudah dibaca dan dijelaskan.

### Consistency

Ikuti pola yang telah digunakan dalam project.

### Accessibility

Interface harus dapat digunakan oleh sebanyak mungkin pengguna.

### Security

Secret, credential, dan data sensitif harus ditangani secara tepat.

### Maintainability

Perubahan di masa depan harus dapat dilakukan tanpa membongkar seluruh sistem.

### Educational Value

Setiap teknologi yang digunakan harus dapat dijelaskan alasan dan manfaatnya.

---

# 22. Penutup

StudyFlow bukan hanya sebuah aplikasi manajemen tugas.

StudyFlow adalah representasi dari proses pengembangan sebuah aplikasi web:

```text
Ide
 ↓
Struktur
 ↓
Interface
 ↓
Interaction
 ↓
Component
 ↓
API
 ↓
Backend
 ↓
Database
 ↓
Authentication
 ↓
Testing
 ↓
AI
 ↓
Deployment
```

Dengan mempertahankan satu produk yang sama, hubungan antara teori dan praktik dapat terlihat dengan lebih jelas.

Tujuan akhirnya bukan hanya menghasilkan aplikasi yang berjalan, tetapi memahami bagaimana sebuah aplikasi web dirancang, dibangun, diuji, diamankan, dan dikembangkan secara bertahap.

---

**StudyFlow**

*One product. Progressive development. Meaningful learning.*
