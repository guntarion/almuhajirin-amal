# Almuhajirin Amal - Dashboard Donasi Ramadhan

Aplikasi ini merupakan dashboard donasi untuk Masjid Al Muhajirin Rewwin selama bulan Ramadhan. Aplikasi dibuat dengan Next.js dan Tailwind CSS, dengan fokus pada kemudahan penggunaan dan tampilan yang menarik.

## Fitur Utama

1. **Dashboard Donasi** - Tampilan mobile-friendly untuk pengguna umum
2. **TV Display** - Tampilan khusus untuk layar TV Masjid dengan ratio 16:9

## Cara Menjalankan Aplikasi

### Prasyarat

- Node.js versi 18.0.0 atau lebih baru
- npm atau yarn

### Langkah Instalasi

1. Clone repository ini

   ```bash
   git clone https://github.com/username/almuhajirin-amal.git
   cd almuhajirin-amal
   ```

2. Install dependensi

   ```bash
   npm install
   # atau
   yarn install
   ```

3. Jalankan aplikasi dalam mode development

   ```bash
   npm run dev
   # atau
   yarn dev
   ```

4. Buka browser dan akses:
   - Dashboard: http://localhost:3000/dashboard
   - TV Display: http://localhost:3000/tv

### Build untuk Production

```bash
npm run build
npm run start
# atau
yarn build
yarn start
```

## Struktur Folder

```
almuhajirin-amal/
├── src/
│   ├── app/                # Routes Next.js App Router
│   │   ├── page.js         # Redirects ke dashboard
│   │   ├── dashboard/
│   │   │   └── page.js     # Halaman Dashboard
│   │   ├── tv/
│   │   │   └── page.js     # Halaman TV Display
│   │   └── layout.js
│   ├── components/         # Komponen React
│   │   ├── dashboard/      # Komponen untuk Dashboard
│   │   ├── tv/             # Komponen untuk TV Display
│   │   └── shared/         # Komponen bersama
│   └── data/               # Data yang dapat diedit manual
│       ├── programs.js     # Data program donasi
│       ├── infaq.js        # Data infaq harian
│       ├── donatur.js      # Data donatur
│       └── ucapan.js       # Ucapan terima kasih
├── public/
├── next.config.js
└── package.json
```

## Cara Mengubah Data

Semua data dapat diedit secara manual melalui file-file di folder `src/data/`. Berikut panduan untuk mengubah berbagai jenis data:

### 1. Data Program Donasi (`src/data/programs.js`)

Berisi data untuk program Ifthar, Qiyamul Lail, dan Tadarrus. Ubah nilai seperti:

- `targetPerHari` - Target per hari dalam porsi atau rupiah
- `progress` - Persentase progres pencapaian
- `totalKebutuhan` - Total kebutuhan dalam 1 bulan
- `terkumpul` - Jumlah yang sudah terkumpul

### 2. Data Infaq Harian (`src/data/infaq.js`)

Berisi data infaq harian. Format:

```javascript
{ hari: 1, jumlah: 2000000 }
```

### 3. Data Donatur (`src/data/donatur.js`)

Berisi data donatur yang ditampilkan di TV Display. Format:

```javascript
{ nama: "P****** D", program: "Ifthar", jumlah: 450000 }
```

### 4. Ucapan Terima Kasih (`src/data/ucapan.js`)

Berisi ucapan terima kasih yang ditampilkan secara bergantian. Format:

```javascript
{
  nama: "Pak Djatmiko",
  program: "Ifthar",
  doa: "Semoga Allah memberikan kebarokahan pada harta bapak"
}
```

### 5. Konfigurasi Dashboard dan TV Display

Konfigurasi umum seperti nomor rekening, hari Ramadhan saat ini, dll dapat diubah di:

- `src/data/dashboardConfig.js` - Untuk Dashboard
- `src/data/tvConfig.js` - Untuk TV Display

## Lisensi

Aplikasi ini dibuat untuk keperluan internal Masjid Al Muhajirin Rewwin.

## Kontak

Untuk pertanyaan atau dukungan, silakan hubungi pengembang di [email atau kontak lainnya].
