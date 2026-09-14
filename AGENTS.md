# StudyFlow - Project Agent Instructions

## 1. Identitas Proyek

**Nama proyek:** StudyFlow
**Deskripsi:** Personal Academic Task Management System
**Domain:** Web Application
**Konteks:** Proyek berkelanjutan untuk mata kuliah Perancangan dan Pemrograman Web pada Program Studi S1 Rekayasa Perangkat Lunak.

StudyFlow adalah aplikasi web yang dirancang untuk membantu mahasiswa mengelola aktivitas akademik dan tugas perkuliahan secara terstruktur.

Contoh aktivitas yang dapat dikelola:

* Tugas mata kuliah
* Jurnal praktikum
* Laporan
* Jadwal pengumpulan
* Persiapan ujian
* Aktivitas belajar
* Proyek kelompok
* Aktivitas akademik lainnya

Proyek ini dirancang sebagai **continuous project**. Artinya, StudyFlow tidak diperlakukan sebagai kumpulan mini-project yang terpisah, tetapi sebagai satu produk yang terus berkembang seiring bertambahnya materi pembelajaran.

Prinsip utama:

> **Satu produk, berkembang secara bertahap mengikuti peningkatan kemampuan teknis.**

---

# 2. Tujuan Proyek

StudyFlow mempunyai dua tujuan utama.

### 2.1. Tujuan Produk

Membangun aplikasi web yang dapat membantu mahasiswa:

* mencatat tugas dan aktivitas akademik,
* menentukan prioritas,
* menetapkan deadline,
* memantau status pengerjaan,
* mengorganisasi pekerjaan,
* serta memperoleh bantuan teknologi tambahan untuk meningkatkan produktivitas.

### 2.2. Tujuan Pembelajaran

StudyFlow digunakan sebagai media untuk menerapkan konsep-konsep pada mata kuliah Perancangan dan Pemrograman Web.

Setiap teknologi yang diperkenalkan harus mempunyai hubungan yang jelas dengan kebutuhan aplikasi.

Contoh:

* HTML digunakan untuk membangun struktur dokumen.
* CSS digunakan untuk presentasi dan layout.
* JavaScript digunakan untuk interaksi dan logika sisi client.
* React digunakan untuk membangun antarmuka berbasis component.
* REST API digunakan untuk komunikasi client-server.
* NestJS digunakan untuk backend.
* PostgreSQL digunakan untuk persistence.
* Prisma digunakan sebagai ORM.
* JWT digunakan untuk authentication.
* Automated testing digunakan untuk memverifikasi perilaku aplikasi.
* AI digunakan untuk fitur yang benar-benar memberikan nilai tambah.
* Deployment digunakan untuk menjadikan aplikasi dapat digunakan pada environment production.

Teknologi tidak boleh ditambahkan hanya karena populer atau terlihat modern.

---

# 3. Prinsip Pengembangan Utama

## 3.1. Progressive Development

StudyFlow harus dikembangkan secara bertahap.

Perubahan aplikasi harus mengikuti kebutuhan pembelajaran dan kebutuhan produk.

Jangan memperkenalkan kompleksitas sebelum kompleksitas tersebut diperlukan.

Contoh prinsip:

```text
Struktur
↓
Presentasi
↓
Interaksi
↓
Component
↓
Komunikasi Data
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

Urutan implementasi aktual dapat berkembang sesuai keputusan pengajar, tetapi prinsip layering harus tetap dipertahankan.

---

## 3.2. Same Product, Increasing Technical Depth

Jangan membuat implementasi baru yang tidak berhubungan dengan StudyFlow hanya untuk mendemonstrasikan teknologi tertentu.

Setiap materi sebaiknya menjawab pertanyaan:

> "Bagian mana dari StudyFlow yang menjadi lebih baik atau lebih mampu setelah teknologi ini diterapkan?"

Contoh:

CSS bukan hanya digunakan untuk latihan selector.

CSS digunakan agar struktur HTML StudyFlow menjadi antarmuka yang usable dan responsive.

JavaScript bukan hanya digunakan untuk latihan function.

JavaScript digunakan untuk membuat StudyFlow merespons interaksi pengguna.

React bukan hanya digunakan untuk latihan component.

React digunakan untuk mengorganisasi interface StudyFlow menjadi component yang reusable.

---

# 4. Domain Utama

Domain utama StudyFlow adalah **academic task management**.

Objek domain inti adalah `Task`.

Secara konseptual, sebuah Task dapat memiliki informasi seperti:

* `id`
* `title`
* `description`
* `dueDate`
* `priority`
* `done`
* `createdAt`
* `updatedAt`

Priority secara konseptual terdiri dari:

* `low`
* `medium`
* `high`

Pada tahap arsitektur yang mendukung multi-user, Task dapat berhubungan dengan User.

---

# 5. Konsep Pengguna

StudyFlow ditujukan terutama untuk mahasiswa.

Tujuan pengguna:

* mengetahui apa yang harus dikerjakan,
* mengetahui deadline,
* mengetahui tingkat prioritas,
* melihat tugas yang sudah selesai,
* menemukan tugas yang belum selesai,
* dan mengelola aktivitas akademik secara lebih terorganisir.

Desain dan fitur harus tetap mudah dipahami oleh pengguna yang tidak mempunyai latar belakang teknis.

---

# 6. Arsitektur yang Diharapkan

StudyFlow dapat berkembang menjadi aplikasi full-stack dengan pemisahan tanggung jawab yang jelas.

Secara konseptual:

```text
                USER
                  │
                  ▼
             FRONTEND
             React/Vite
                  │
             HTTP / REST
                  │
                  ▼
              BACKEND
               NestJS
                  │
               Prisma
                  │
                  ▼
             PostgreSQL
```

Untuk integrasi layanan AI:

```text
User
 │
 ▼
Frontend
 │
 ▼
Authenticated Backend Endpoint
 │
 ▼
External AI Provider
 │
 ▼
Structured Result
 │
 ▼
Validation
 │
 ▼
User Confirmation
 │
 ▼
Application Data
```

Arsitektur konkret dapat berkembang, tetapi batas tanggung jawab setiap layer harus tetap jelas.

---

# 7. Prinsip Separation of Concerns

Setiap layer harus mempunyai tanggung jawab yang jelas.

### Frontend

Bertanggung jawab terhadap:

* presentation,
* user interaction,
* client-side state,
* pengalaman pengguna,
* komunikasi dengan backend.

### Backend

Bertanggung jawab terhadap:

* business logic,
* request handling,
* validation,
* authentication,
* authorization,
* komunikasi dengan database,
* integrasi layanan eksternal.

### Database

Bertanggung jawab terhadap:

* persistent data,
* relational integrity,
* constraints,
* indexing,
* data consistency.

### External Services

Digunakan untuk kapabilitas yang memang tidak perlu atau tidak tepat diimplementasikan sendiri oleh aplikasi.

---

# 8. Prinsip Kode

Kode harus memenuhi standar berikut:

* mudah dibaca,
* memiliki penamaan yang bermakna,
* memiliki struktur yang konsisten,
* mempunyai tanggung jawab yang jelas,
* tidak memiliki duplikasi yang tidak perlu,
* tidak memiliki abstraksi yang premature,
* mempunyai error handling yang sesuai,
* dapat dipelihara oleh developer lain.

Prioritaskan readability sebelum cleverness.

Jangan menggunakan pola kompleks hanya untuk membuat kode terlihat lebih profesional.

Kode yang sederhana tetapi tepat lebih baik daripada kode yang kompleks tanpa alasan.

---

# 9. Prinsip HTML

HTML harus digunakan untuk menggambarkan **struktur dan makna konten**, bukan sekadar sebagai wadah styling.

Prioritaskan semantic HTML jika elemen semantic tersedia.

Contoh elemen yang relevan:

```html
<header>
<nav>
<main>
<section>
<article>
<aside>
<footer>
```

Gunakan elemen berdasarkan makna dan tanggung jawabnya.

Gunakan:

* heading secara hierarkis,
* label untuk form control,
* atribut `alt` untuk gambar yang bermakna,
* struktur form yang benar,
* link untuk navigasi,
* button untuk aksi.

Jangan menggunakan `<div>` untuk semua hal hanya karena mudah digunakan.

HTML harus tetap masuk akal ketika CSS dihilangkan.

---

# 10. Prinsip CSS

CSS harus digunakan untuk mengatur presentasi dan layout tanpa mengambil alih tanggung jawab semantic HTML.

Prioritaskan:

* consistency,
* responsive layout,
* accessibility,
* maintainability,
* reusable styling patterns.

Hindari:

* styling yang berulang tanpa alasan,
* selector yang terlalu spesifik,
* penggunaan `!important` secara sembarangan,
* dependency terhadap posisi DOM yang rapuh,
* visual complexity yang tidak memberikan nilai tambah.

Layout harus mempertimbangkan:

* desktop,
* tablet,
* mobile.

---

# 11. Prinsip Frontend

Untuk implementasi frontend modern:

* gunakan component yang memiliki tanggung jawab jelas,
* gunakan TypeScript ketika stack mendukungnya,
* gunakan props untuk komunikasi data antar-component,
* gunakan state untuk data yang benar-benar dinamis,
* gunakan reusable component ketika pola benar-benar berulang.

Jangan menjadikan satu file sebagai tempat seluruh UI dan seluruh business logic.

Struktur component harus tetap dapat dipahami oleh mahasiswa.

---

# 12. Prinsip Backend

Jika backend digunakan:

### Controller

Bertanggung jawab terhadap:

* menerima request,
* menentukan endpoint,
* mengembalikan response.

### Service

Bertanggung jawab terhadap:

* business logic,
* orkestrasi proses,
* komunikasi dengan persistence layer atau service lainnya.

### DTO

Bertanggung jawab terhadap:

* bentuk input,
* validation contract,
* boundary data.

### Database layer

Bertanggung jawab terhadap:

* persistence,
* query,
* relational data.

Business logic tidak boleh ditumpuk seluruhnya di controller.

---

# 13. Prinsip Database

Database merupakan source of truth untuk data persistent.

Schema database harus dirancang berdasarkan kebutuhan domain.

Hindari membuat tabel, field, relation, atau index hanya karena "mungkin nanti dipakai".

Setiap perubahan schema harus:

1. mempunyai alasan,
2. tercatat dalam migration,
3. diuji,
4. tidak merusak data existing tanpa alasan yang jelas.

Migration merupakan bagian dari source code dan harus diperlakukan sebagai artefak penting proyek.

---

# 14. Authentication dan Security

Ketika authentication diterapkan:

* password tidak boleh disimpan sebagai plaintext,
* secret tidak boleh hard-coded,
* token harus diproses dengan aman,
* endpoint protected harus memverifikasi authentication,
* authorization harus diterapkan berdasarkan kebutuhan akses.

Secret tidak boleh dimasukkan ke repository.

Contoh secret yang harus dilindungi:

```text
DATABASE_URL
JWT_SECRET
API Keys
External Service Credentials
```

Jangan memasukkan nilai secret asli ke:

* source code,
* README,
* documentation,
* frontend bundle,
* Git history.

Gunakan environment variable.

---

# 15. Integrasi AI

AI merupakan fitur tambahan yang harus mempunyai nilai produk yang jelas.

AI tidak boleh menjadi dekorasi.

Contoh use case:

> pengguna menulis instruksi akademik menggunakan bahasa natural, kemudian sistem membantu mengubahnya menjadi struktur Task.

Alur konseptual:

```text
Natural Language
      ↓
AI Service
      ↓
Structured Data
      ↓
Validation
      ↓
User Review
      ↓
Persist
```

AI output tidak boleh dianggap selalu benar.

Semua output AI yang akan memengaruhi data aplikasi harus divalidasi.

API key AI hanya boleh berada di backend.

Frontend tidak boleh mengakses secret AI secara langsung.

---

# 16. Testing

Testing merupakan bagian dari kualitas software, bukan tahap tambahan yang hanya dilakukan ketika aplikasi selesai.

Jenis pengujian dapat meliputi:

* unit test,
* integration test,
* end-to-end test.

Prioritas pengujian diberikan pada:

* business logic,
* API contract,
* authentication,
* validation,
* error handling,
* edge cases.

Contoh edge case:

* input kosong,
* input tidak valid,
* id tidak ditemukan,
* user tidak authenticated,
* credential salah,
* task tidak dimiliki user,
* pagination di luar batas,
* filter tanpa hasil,
* external service gagal.

---

# 17. Performance

Optimisasi harus dilakukan berdasarkan kebutuhan dan evidence.

Jangan melakukan premature optimization.

Jika terjadi masalah performance, analisis terlebih dahulu.

Hal yang dapat diperhatikan:

* over-fetching,
* query berulang,
* pagination,
* filtering,
* indexing,
* unnecessary rendering,
* payload terlalu besar.

Optimisasi harus tetap mempertahankan readability dan maintainability.

---

# 18. Accessibility

Accessibility merupakan bagian dari kualitas interface.

Perhatikan:

* semantic HTML,
* label form,
* alternative text,
* keyboard navigation,
* color contrast,
* focus state,
* struktur heading,
* tombol dan link yang memiliki tujuan jelas.

Jangan mengandalkan warna sebagai satu-satunya cara menyampaikan informasi.

---

# 19. Responsive Design

StudyFlow harus dapat digunakan pada berbagai ukuran layar.

Responsiveness tidak boleh hanya berarti "layout mengecil".

Pertimbangkan:

* perubahan jumlah kolom,
* perubahan arah layout,
* ukuran text,
* spacing,
* ukuran tombol,
* navigation,
* form,
* task card,
* tabel atau konten dengan lebar besar.

Gunakan pendekatan responsive yang konsisten dengan teknologi yang sedang digunakan.

---

# 20. Design Philosophy

StudyFlow harus memiliki visual yang:

* clean,
* modern,
* professional,
* accessible,
* consistent,
* tidak berlebihan.

Hindari desain yang:

* terlalu dekoratif,
* penuh gradient tanpa tujuan,
* penuh shadow,
* menggunakan terlalu banyak warna,
* penuh animasi,
* terlalu menyerupai template generatif.

Desain harus mendukung usability dan pembelajaran.

---

# 21. Dokumentasi

Dokumentasi merupakan bagian resmi dari proyek.

Dokumentasi minimal dapat mencakup:

* project overview,
* setup,
* architecture,
* folder structure,
* development conventions,
* learning roadmap,
* module documentation,
* troubleshooting,
* testing,
* deployment.

Dokumentasi harus menjelaskan:

**apa yang dilakukan, mengapa dilakukan, dan bagaimana memverifikasinya.**

Jangan hanya mendokumentasikan langkah tanpa menjelaskan konsep.

---

# 22. Dokumentasi untuk Pengajaran

Karena StudyFlow digunakan dalam konteks praktikum, dokumentasi juga harus dapat membantu Teaching Assistant.

Dokumentasi idealnya menyediakan:

* tujuan pembelajaran,
* konsep teknis,
* alasan penggunaan sebuah teknologi,
* contoh penerapan pada StudyFlow,
* common mistakes,
* debugging hints,
* edge cases,
* pertanyaan pemantik untuk mahasiswa,
* kriteria keberhasilan.

Dokumentasi pengajaran tidak boleh berubah menjadi spoon-feeding.

Tujuannya adalah membantu mahasiswa memahami dan menalar.

---

# 23. Prinsip Pengembangan untuk Coding Agent

Coding agent harus:

1. membaca dokumentasi proyek sebelum melakukan perubahan besar,
2. memahami struktur repository sebelum membuat file baru,
3. memeriksa file existing sebelum membuat ulang,
4. menggunakan pola yang sudah dipakai proyek,
5. menghindari perubahan yang tidak berhubungan,
6. mempertahankan backward compatibility ketika memungkinkan,
7. menjalankan validation setelah perubahan,
8. melaporkan hasil secara faktual.

Agent tidak boleh mengklaim test, build, migration, deployment, atau Git operation berhasil apabila belum benar-benar diverifikasi.

---

# 24. Hindari Overengineering

Jangan membuat:

* abstraction layer tanpa kebutuhan,
* generic utility yang hanya digunakan sekali,
* design system terlalu kompleks,
* state management global ketika local state sudah cukup,
* database relation yang belum diperlukan,
* service tambahan tanpa alasan,
* dependency tambahan hanya untuk menggantikan beberapa baris kode sederhana.

Setiap dependency harus memiliki alasan yang jelas.

---

# 25. Dependency Management

Sebelum menambahkan library:

1. periksa apakah kebutuhan dapat diselesaikan dengan kemampuan native,
2. periksa dependency yang sudah tersedia,
3. pastikan library memang relevan,
4. pertimbangkan maintenance,
5. pertimbangkan dampaknya terhadap pembelajaran.

Jangan menambahkan dependency hanya karena agent mengenalnya.

---

# 26. Git Workflow

Git digunakan sebagai version control utama.

Commit harus:

* kecil ketika perubahan memang terpisah,
* memiliki message yang jelas,
* menggambarkan intent perubahan.

Gunakan conventional commit style ketika sesuai:

```text
feat:
fix:
refactor:
docs:
test:
chore:
style:
```

Contoh:

```text
feat: add task overview layout
feat: add responsive task grid
fix: correct task form markup
docs: update html learning guide
```

### Branching Strategy

Repository menggunakan alur percabangan terstruktur:
* `main`: branch stabil / rilis produksi. Dilarang melakukan development langsung di `main`.
* `dev`: branch integrasi utama untuk seluruh pengembangan fitur StudyFlow.
* `feat/*`, `fix/*`, `refactor/*`, `docs/*`: branch tugas yang dibuat dari `dev` dan di-merge kembali ke `dev`.

Alur standar:
```text
dev -> feat/* -> development & commit -> push -> merge/PR -> dev -> main (saat stabil)
```

Jangan:

* force push tanpa instruksi eksplisit,
* menghapus branch sembarangan,
* mengubah history hanya untuk merapikan commit,
* menjalankan destructive Git operation tanpa memahami konsekuensinya.

Sebelum operasi Git yang berisiko, selalu periksa:

```bash
git status
git branch
git log
git remote -v
```

---

# 27. Aturan Perubahan File

Sebelum mengubah file:

1. baca file terkait,
2. pahami konteks,
3. identifikasi bagian yang relevan,
4. ubah seminimal mungkin,
5. validasi hasilnya.

Jangan melakukan massive rewrite tanpa alasan.

Jika perubahan sederhana dapat dilakukan secara lokal, jangan mengganti seluruh file.

---

# 28. Aturan untuk Fitur Baru

Setiap fitur baru harus dapat menjawab:

1. Masalah apa yang diselesaikan?
2. Siapa yang menggunakan?
3. Data apa yang dibutuhkan?
4. Layer mana yang berubah?
5. Apakah fitur memengaruhi API?
6. Apakah fitur memengaruhi database?
7. Apakah fitur membutuhkan test?
8. Apakah dokumentasi perlu diperbarui?

---

# 29. Aturan untuk Debugging

Ketika terjadi error:

1. baca pesan error sebenarnya,
2. identifikasi file dan baris,
3. reproduksi error,
4. cari root cause,
5. perbaiki penyebab,
6. jalankan kembali validasi.

Jangan langsung mengganti banyak file hanya untuk menghilangkan error.

Jangan menyembunyikan error dengan:

* `any` tanpa alasan,
* `try/catch` kosong,
* suppress warning,
* disable lint,
* menghapus test,
* bypass validation.

---

# 30. Aturan Komunikasi Agent

Ketika menjelaskan perubahan:

### Sebelum implementasi besar

Jelaskan:

* apa yang dipahami,
* pendekatan yang dipilih,
* file yang akan terpengaruh,
* risiko atau trade-off.

### Setelah implementasi

Laporkan:

* file yang berubah,
* perubahan utama,
* validation yang dijalankan,
* hasil validation,
* hal yang belum dapat diverifikasi.

Gunakan istilah teknis yang tepat tetapi tetap mudah dipahami.

---

# 31. Prinsip Utama Proyek

Semua keputusan teknis harus mempertahankan tiga prinsip:

### Understandable

Mahasiswa dapat memahami apa yang terjadi.

### Maintainable

Developer lain dapat melanjutkan pekerjaan.

### Justifiable

Setiap keputusan teknis mempunyai alasan yang dapat dijelaskan.

Jika sebuah solusi lebih kompleks tetapi tidak memberikan manfaat yang jelas terhadap ketiga prinsip tersebut, pilih solusi yang lebih sederhana.

---

# 32. Final Principle

StudyFlow bukan sekadar website.

StudyFlow adalah:

> **satu produk yang digunakan untuk menunjukkan bagaimana sebuah aplikasi web berkembang dari struktur halaman sederhana menjadi sistem full-stack yang terintegrasi.**

Karena itu, jangan kehilangan hubungan antara:

```text
Konsep pembelajaran
        ↓
Implementasi teknis
        ↓
Kebutuhan produk
        ↓
Pengalaman pengguna
```

Setiap perubahan sebaiknya memperkuat hubungan tersebut.

## Project Mantra

**One product. Progressive development. Clear engineering. Meaningful learning.**
