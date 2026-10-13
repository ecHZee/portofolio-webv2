# Portofolio Hanif Zhafran

[hanifzhfran.pages.dev](https://hanifzhfran.pages.dev/)

Website portofolio Hanif Zhafran untuk pekerjaan AI/ML dan software engineering. Homepage berisi perkenalan, proyek pilihan, pengalaman di MK RI dan LePKom, serta kontak. Tiap proyek punya halaman studi kasus dengan kontribusi, evaluasi, screenshot aplikasi, dan tautan source code.

Konten situs berbahasa Inggris. README ini menjelaskan cara menjalankan dan mengelola websitenya.

## Proyek yang ditampilkan

| Proyek | Isi studi kasus | Repository |
| --- | --- | --- |
| TashkiFlow | OCR teks Arab, diacritization, backend FastAPI, dan aplikasi pemindai Android | [TashkiFlow](https://github.com/ecHZee/TashkiFlow) |
| TadabburLens | Pengenalan huruf Hijaiyah di Android menggunakan MobileNetV2 dan TensorFlow Lite | [TadabburLens](https://github.com/ecHZee/TadabburLens) |
| YoLiYo Mentai | Pemesanan melalui chatbot Telegram, workflow automation, dan dashboard untuk UMKM makanan | [YoLiYo-Mentai](https://github.com/ecHZee/YoLiYo-Mentai) |

Implementasi aplikasi, model ML, dan backend ada di repository masing-masing. Angka evaluasi di situs mengikuti hasil proyek yang disertakan, beserta konteks sampel dan keterbatasannya.

## Menjalankan lokal

Gunakan Node.js 22 dan npm.

```sh
npm ci
npm run dev
```

Astro menampilkan alamat server di terminal; port default-nya `4321`.

Untuk memeriksa hasil build:

```sh
npm run build
npm run preview -- --host 127.0.0.1 --port 4327
```

Buka `http://127.0.0.1:4327/`. Output build berada di `dist/`.

## Susunan source

Situs memakai Astro 5, TypeScript, dan CSS. Inter dan Space Grotesk dimuat dari file lokal. Astro memproses gambar saat build menjadi WebP responsif.

| Lokasi | Isi |
| --- | --- |
| `src/pages/index.astro` | Homepage |
| `src/pages/work/[slug].astro` | Halaman studi kasus tiap proyek |
| `src/data/portfolio.ts` | Profil, pengalaman, data proyek, dan aset bukti |
| `src/data/case-studies.ts` | Narasi studi kasus, repository, dan pengelompokan galeri |
| `src/components/` | Navigasi, footer, preview proyek, dan dialog gambar |
| `src/styles/global.css` | Layout responsif, warna, font, dan reduced motion |
| `src/assets/` | Foto dan screenshot proyek |
| `public/` | Font, favicon, dan kartu share |

Galeri gambar memakai `<dialog>` dengan zoom, pan, navigasi keyboard, dan pengembalian fokus setelah ditutup. Tautan ke file gambar tetap tersedia. Tombol **Request résumé** membuka email permintaan CV.

## Domain dan Cloudflare Pages

Konfigurasi build untuk Cloudflare Pages:

| Pengaturan | Nilai |
| --- | --- |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node.js | `22` |

Set environment variable `PORTFOLIO_SITE_URL` ke URL utama website sebelum build. Canonical, Open Graph, sitemap, dan robots mengikuti nilai tersebut. Fallback di `astro.config.mjs` masih `https://hanzha-portfolio.vercel.app`.

Kartu share tersimpan di `public/share/portfolio.jpg`. Untuk membuat ulang dari foto yang ada:

```sh
node scripts/generate_share.mjs
```

## Asal source dan lisensi

Website ini dikembangkan dari [portofolio-web](https://github.com/ecHZee/portofolio-web), dengan susunan halaman dan tampilan yang diperbarui. Foto personal dan screenshot berasal dari aset portofolio Hanif dan proyek yang ditampilkan.

Source memakai [MIT License](LICENSE). Lisensi font tersedia di [Inter-OFL.txt](public/fonts/Inter-OFL.txt) dan [SpaceGrotesk-OFL.txt](public/fonts/SpaceGrotesk-OFL.txt).
