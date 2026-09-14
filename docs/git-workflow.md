# Git Workflow & Branching Strategy — StudyFlow

Dokumen ini merupakan panduan resmi bagi praktikan dan Teaching Assistant (TA) dalam mengelola version control proyek **StudyFlow** pada praktikum Perancangan dan Pemrograman Web (S1 Rekayasa Perangkat Lunak).

---

## 1. Filosofi & Branching Strategy

Untuk menjaga stabilitas kode, mencegah konflik antar-developer, serta melatih standar rekayasa perangkat lunak profesional, repository StudyFlow menerapkan strategi branching berbasis **Git Flow sederhana**:

```text
main (stabil / rilis)
 │
 └── dev (integrasi utama)
      ├── feat/*      (pengembangan fitur baru)
      ├── fix/*       (perbaikan bug/kendala)
      ├── refactor/*  (penataan ulang struktur kode)
      └── docs/*      (penambahan / revisi dokumentasi)
```

### Penjelasan Peranan Branch:

| Branch | Sifat & Peran | Aturan Utama |
| :--- | :--- | :--- |
| **`main`** | **Production & Stable Release**.<br>Hanya berisi kode yang sudah teruji, stabil, dan siap dinilai/didemokan. | **Dilarang keras melakukan commit atau push langsung ke `main`**. Seluruh kode masuk ke `main` hanya melalui merge dari `dev`. |
| **`dev`** | **Main Integration Branch**.<br>Pusat integrasi seluruh pengerjaan modul dan fitur StudyFlow. | Menjadi cabang basis (*base branch*) untuk semua branch tugas (`feat/*`, `fix/*`, `docs/*`, `refactor/*`). |
| **`feat/*`** | **Feature Branch**.<br>Digunakan saat mengerjakan fitur baru. Contoh: `feat/html-foundation`, `feat/task-form`, `feat/responsive-layout`. | Selalu dibuat dari `dev` dan digabungkan kembali ke `dev`. |
| **`fix/*`** | **Bug Fix Branch**.<br>Digunakan untuk memperbaiki kesalahan atau bug. Contoh: `fix/mobile-layout`, `fix/form-validation`. | Dibuat dari `dev` saat ditemukan issue, lalu di-merge ke `dev`. |
| **`refactor/*`** | **Refactoring Branch**.<br>Digunakan untuk membersihkan atau merestrukturisasi kode tanpa mengubah perilaku bisnis. Contoh: `refactor/css-organization`. | Dibuat dari `dev` dan di-merge ke `dev`. |
| **`docs/*`** | **Documentation Branch**.<br>Digunakan khusus penulisan atau pembaruan panduan/dokumen. Contoh: `docs/git-workflow`, `docs/html-guide`. | Dibuat dari `dev` dan di-merge ke `dev`. |

---

## 2. Aturan Penamaan Branch (*Branch Naming Rules*)

Gunakan penamaan yang deskriptif dan mencerminkan maksud perubahan.

* **Format yang Benar:**
  - `feat/<nama-fitur>` $\rightarrow$ contoh: `feat/task-card`, `feat/task-filter`
  - `fix/<nama-perbaikan>` $\rightarrow$ contoh: `fix/navbar-overflow`, `fix/form-label`
  - `refactor/<nama-komponen>` $\rightarrow$ contoh: `refactor/html-semantics`, `refactor/css-variables`
  - `docs/<topik-panduan>` $\rightarrow$ contoh: `docs/learning-roadmap`, `docs/api-guide`

* **Dilarang Keras Menggunakan Nama Generik:**
  - `test`, `coba`, `baru`, `fixing`, `update`, `branch1`, `revisi-lagi`

---

## 3. Alur Kerja Praktikan Langkah Demi Langkah (*Standard Developer Workflow*)

Setiap kali praktikan memulai pengerjaan modul baru atau fitur baru, ikuti urutan berikut:

### Langkah 1: Pastikan Berada di `dev` & Sinkronkan dengan Remote
Sebelum membuat cabang baru, pastikan branch `dev` lokal memiliki perubahan paling mutakhir dari remote repository:
```bash
git switch dev
git pull origin dev
```

### Langkah 2: Buat Branch Kerja dari `dev`
Gunakan flag `-c` pada `git switch` (atau `git checkout -b`):
```bash
git switch -c feat/html-foundation
```
*Catatan:* Jangan pernah membuat feature branch dari `main`.

### Langkah 3: Lakukan Pengembangan & Cek Status Secara Berkala
Saat bekerja, periksa file mana saja yang berubah:
```bash
git status
```
Untuk melihat perbedaan kode baris per baris:
```bash
git diff
```

### Langkah 4: Simpan Perubahan Secara Atomic (Commit)
Kelompokkan file yang berkaitan logis ke dalam *staging area*, lalu buat commit dengan pesan yang jelas (*Conventional Commits*):
```bash
git add src/index.html
git commit -m "feat: add semantic task list article structure"
```

### Langkah 5: Push Branch Kerja ke Remote GitHub
Kirim branch kerja ke remote repository:
```bash
git push -u origin feat/html-foundation
```

### Langkah 6: Integrasi ke Branch `dev` (Merge / Pull Request)
Setelah fitur selesai dan divalidasi:
1. Pindah kembali ke branch `dev`:
   ```bash
   git switch dev
   git pull origin dev
   ```
2. Gabungkan branch fitur ke `dev`:
   ```bash
   git merge --no-ff feat/html-foundation
   ```
3. Push branch `dev` yang sudah terintegrasi ke remote:
   ```bash
   git push origin dev
   ```
4. Hapus branch fitur lokal yang sudah selesai (opsional / opsional setelah merge):
   ```bash
   git branch -d feat/html-foundation
   ```

### Langkah 7: Rilis Stabil ke `main` (Dilakukan pada Milestone/Modul Selesai)
Ketika tahap pembelajaran atau modul tertentu sudah selesai diuji di `dev`:
```bash
git switch main
git pull origin main
git merge --no-ff dev
git push origin main
git switch dev
```

---

## 4. Konvensi Pesan Commit (*Commit Conventions*)

Setiap pesan commit wajib diawali dengan tipe perubahan dan diikuti deskripsi ringkas berbahasa baku:

* `feat:` penambahan fitur atau struktur antarmuka baru.
* `fix:` perbaikan bug tampilan, logika, atau markup.
* `docs:` pembuatan atau revisi file dokumentasi markdown.
* `style:` penyesuaian estetika CSS (spacing, warna, font) tanpa mengubah logika.
* `refactor:` perapian kode tanpa mengubah fungsionalitas.
* `test:` penambahan skenario uji (automated testing).
* `chore:` pemeliharaan konfigurasi repository (`.gitignore`, package setup).

**Contoh yang Baik:**
```text
feat: add academic task summary metrics section
style: implement responsive flexbox navigation for mobile
docs: add guide for teaching assistants on semantic HTML
fix: resolve label association on task priority dropdown
```

**Contoh yang Dilarang:**
```text
update file
fix
selesai
bismillah
revisi 2
```

---

## 5. Peraturan Keselamatan Git (*Git Safety Rules*)

Untuk mencegah kehilangan riwayat commit (*commit history*) atau data pekerjaan teman sekelompok:

1. **Dilarang Force Push:**
   ```bash
   # DILARANG KERAS
   git push --force
   git push -f
   ```
   *Alasan:* Force push menimpa riwayat di GitHub dan dapat menghapus pekerjaan orang lain secara permanen.
2. **Dilarang Hard Reset Tanpa Koordinasi:**
   ```bash
   # DILARANG KERAS
   git reset --hard HEAD~1
   ```
3. **Dilarang Membersihkan File Tanpa Verifikasi:**
   ```bash
   # DILARANG KERAS
   git clean -fd
   ```
4. **Periksa Sebelum Bertindak:**
   Gunakan perintah diagnostik untuk memastikan kondisi sebelum melakukan aksi besar:
   ```bash
   git branch --show-current   # Melihat branch yang sedang aktif
   git branch -a               # Melihat seluruh branch lokal dan remote
   git status                  # Melihat status file working tree
   git log --oneline --graph -10 # Melihat riwayat 10 commit terakhir
   ```
