import pptxgen from 'pptxgenjs';

// Color palette constants (Hex without # for pptxgenjs)
const C = {
  bg: '220522',
  cardBg: '331044',
  cardBorder: '5C43A9',
  teal: '0CA8A4',
  lime: 'A1DF2A',
  mint: 'C5FFC9',
  yellow: 'E5CC21',
  crimson: 'C93267',
  magenta: 'DC32A6',
  orchid: 'E183CF',
  purple: 'AC4CFF',
  lavender: 'C9C4E8',
  white: 'FFFFFF',
  darkBox: '1A031E',
};

export async function exportSlidesToPptx(onProgress?: (msg: string) => void) {
  onProgress?.('Menyiapkan presentasi PowerPoint...');
  const pptx = new pptxgen();

  pptx.layout = 'LAYOUT_16x9';
  pptx.title = 'Cara Komputer Membaca Angka';
  pptx.author = 'Bolt Slides';
  pptx.subject = 'Logika Percabangan & Modulo';

  // Helper to add standard dark background
  const setBg = (slide: pptxgen.Slide) => {
    slide.background = { color: C.bg };
  };

  // Helper for slide header
  const addHeader = (
    slide: pptxgen.Slide,
    kicker: string,
    title: string,
    subtitle?: string
  ) => {
    slide.addText(kicker.toUpperCase(), {
      x: 0.8,
      y: 0.4,
      w: 8.4,
      h: 0.3,
      fontSize: 11,
      bold: true,
      color: C.orchid,
      fontFace: 'Arial',
      align: 'center',
    });

    slide.addText(title, {
      x: 0.8,
      y: 0.7,
      w: 8.4,
      h: 0.6,
      fontSize: 24,
      bold: true,
      color: C.white,
      fontFace: 'Arial',
      align: 'center',
    });

    if (subtitle) {
      slide.addText(subtitle, {
        x: 0.8,
        y: 1.3,
        w: 8.4,
        h: 0.45,
        fontSize: 13,
        color: C.lavender,
        fontFace: 'Arial',
        align: 'center',
      });
    }
  };

  // ─────────────────────────────────────────────────────────────
  // SLIDE 1: Kelompok 7 Algoritma
  // ─────────────────────────────────────────────────────────────
  onProgress?.('Membuat Slide 1: Kelompok 7 Algoritma...');
  {
    const slide = pptx.addSlide();
    setBg(slide);

    slide.addText('PRESENTASI KELOMPOK', {
      x: 1.0,
      y: 0.6,
      w: 8.0,
      h: 0.35,
      fontSize: 12,
      bold: true,
      color: C.orchid,
      align: 'center',
      fontFace: 'Arial',
    });

    slide.addText('Kelompok 7 Algoritma', {
      x: 0.8,
      y: 0.95,
      w: 8.4,
      h: 0.7,
      fontSize: 32,
      bold: true,
      color: C.white,
      align: 'center',
      fontFace: 'Arial',
    });

    slide.addText('Daftar Anggota Tim & Nomor Pokok Mahasiswa (NPM)', {
      x: 1.0,
      y: 1.65,
      w: 8.0,
      h: 0.35,
      fontSize: 13,
      color: C.lavender,
      align: 'center',
      fontFace: 'Arial',
    });

    // Table of Members
    const tableHeaders: pptxgen.TableCell[] = [
      { text: 'NO', options: { bold: true, color: C.white, fill: { color: C.cardBorder }, align: 'left', fontSize: 12 } },
      { text: 'Nama Lengkap', options: { bold: true, color: C.white, fill: { color: C.cardBorder }, fontSize: 12 } },
      { text: 'NPM', options: { bold: true, color: C.lime, fill: { color: C.cardBorder }, align: 'center', fontSize: 12 } },
    ];

    const members: pptxgen.TableCell[][] = [
      ['1', 'Daniel Marselano Sukarsah', '50426218'],
      ['2', 'Muhamad Fharel Baehaqi', '50426536'],
      ['3', 'Rizki Arafi Zaidan', '50426848'],
    ].map((m, idx) => [
      { text: m[0], options: { color: C.teal, fill: { color: idx % 2 === 0 ? C.darkBox : C.cardBg }, bold: true, align: 'left', fontSize: 13 } },
      { text: m[1], options: { color: C.white, fill: { color: idx % 2 === 0 ? C.darkBox : C.cardBg }, bold: true, fontSize: 13 } },
      { text: m[2], options: { color: C.mint, fill: { color: idx % 2 === 0 ? C.darkBox : C.cardBg }, bold: true, align: 'center', fontSize: 13, fontFace: 'Courier New' } },
    ]);

    slide.addTable([tableHeaders, ...members], {
      x: 1.2,
      y: 2.2,
      w: 7.6,
      h: 2.4,
      colW: [0.9, 4.7, 2.0],
      border: { pt: 1, color: C.cardBorder },
      fontFace: 'Arial',
    });

    slide.addNotes(
      'Selamat datang. Presentasi ini disusun oleh Kelompok 7 Algoritma: 1. Daniel Marselano Sukarsah (50426218), 2. Muhamad Fharel Baehaqi (50426536), dan 3. Rizki Arafi Zaidan (50426848).'
    );
  }

  // ─────────────────────────────────────────────────────────────
  // SLIDE 2: Cover
  // ─────────────────────────────────────────────────────────────
  onProgress?.('Membuat Slide 2: Cover...');
  {
    const slide = pptx.addSlide();
    setBg(slide);

    slide.addText('BELAJAR LOGIKA PEMROGRAMAN', {
      x: 1.0,
      y: 1.5,
      w: 8.0,
      h: 0.35,
      fontSize: 13,
      bold: true,
      color: C.teal,
      align: 'center',
      fontFace: 'Arial',
    });

    slide.addText('Cara Kita Membaca Angka', {
      x: 0.8,
      y: 1.9,
      w: 8.4,
      h: 1.1,
      fontSize: 34,
      bold: true,
      color: C.white,
      align: 'center',
      fontFace: 'Arial',
    });

    slide.addText(
      'Gimana caranya kita tahu angka itu positif, negatif, nol, genap, atau ganjil?',
      {
        x: 1.2,
        y: 3.1,
        w: 7.6,
        h: 0.7,
        fontSize: 15,
        color: C.lavender,
        align: 'center',
        fontFace: 'Arial',
      }
    );

    // Pill badge at bottom
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 2.8,
      y: 4.4,
      w: 4.4,
      h: 0.45,
      fill: { color: C.cardBg },
      line: { color: C.cardBorder, width: 1 },
      rectRadius: 0.2,
    });
    slide.addText('Panduan Praktis Logika Klasifikasi Bilangan', {
      x: 2.8,
      y: 4.4,
      w: 4.4,
      h: 0.45,
      fontSize: 11,
      color: C.orchid,
      align: 'center',
      fontFace: 'Arial',
    });

    slide.addNotes(
      'Selamat datang! Di presentasi kali ini, kita bakal belajar santai gimana cara komputer mengenali angka: apakah positif, negatif, nol, atau genap dan ganjil.'
    );
  }

  // ─────────────────────────────────────────────────────────────
  // SLIDE 2: Agenda
  // ─────────────────────────────────────────────────────────────
  onProgress?.('Membuat Slide 2: Agenda...');
  {
    const slide = pptx.addSlide();
    setBg(slide);
    addHeader(slide, 'Rencana Kita Hari Ini', 'Apa aja yang bakal kita bahas?');

    const agendaItems = [
      { no: '01', title: 'Pikirkan Angka Apa yang Mau Kita Cek', desc: 'Langkah awal input data' },
      { no: '02', title: 'Ngecek Positif vs Negatif', desc: 'Bandingin angka sama 0' },
      { no: '03', title: 'Kapan Angka Dibilang Nol?', desc: 'Mengenal titik netral' },
      { no: '04', title: 'Gantian Cek Genap vs Ganjil', desc: 'Masukin angka baru untuk paritas' },
      { no: '05', title: 'Kenapa Bisa Genap atau Ganjil?', desc: 'Rahasia operasi sisa bagi (modulo 2)' },
      { no: '06', title: 'Rangkuman & Cobain Sendiri', desc: 'Matriks kasus & uji mandiri' },
    ];

    agendaItems.forEach((item, i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const x = col === 0 ? 1.0 : 5.1;
      const y = 1.8 + row * 1.15;

      slide.addShape(pptx.ShapeType.roundRect, {
        x,
        y,
        w: 3.9,
        h: 0.95,
        fill: { color: C.cardBg },
        line: { color: C.cardBorder, width: 1 },
        rectRadius: 0.15,
      });

      slide.addText(item.no, {
        x: x + 0.15,
        y: y + 0.15,
        w: 0.6,
        h: 0.6,
        fontSize: 16,
        bold: true,
        color: C.teal,
        fontFace: 'Courier New',
      });

      slide.addText(
        [
          { text: item.title + '\n', options: { bold: true, color: C.white, fontSize: 13 } },
          { text: item.desc, options: { color: C.lavender, fontSize: 10.5 } },
        ],
        { x: x + 0.75, y: y + 0.12, w: 3.0, h: 0.7, fontFace: 'Arial' }
      );
    });

    slide.addNotes(
      'Ini alur presentasi kita hari ini. Kita mulai dari input, cek tanda, sampai operasi modulo.'
    );
  }

  // ─────────────────────────────────────────────────────────────
  // SLIDE 3: Langkah Awal — Memasukkan Angka (Material Slide 1)
  // ─────────────────────────────────────────────────────────────
  onProgress?.('Membuat Slide 3: Masukin Angka...');
  {
    const slide = pptx.addSlide();
    setBg(slide);
    addHeader(
      slide,
      'Langkah Pertama · Bagian 1',
      'Pertama, Masukin Angkanya Dulu.',
      'Semuanya dimulai saat kita masukin satu angka. Dari angka ini, kita bakal langsung mikir apakah nilainya positif, negatif, atau malah pas nol?'
    );

    // Left card: Description
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.8,
      y: 1.9,
      w: 4.1,
      h: 3.2,
      fill: { color: C.cardBg },
      line: { color: C.cardBorder, width: 1 },
      rectRadius: 0.15,
    });
    slide.addText('Input Data Masukan', {
      x: 1.1,
      y: 2.1,
      w: 3.5,
      h: 0.3,
      fontSize: 12,
      bold: true,
      color: C.teal,
      fontFace: 'Arial',
    });
    slide.addText(
      'Kita memasukkan sebuah angka ke program.\n\nNilai ini akan diuji terhadap titik nol untuk mengetahui kategorinya: apakah positif, negatif, atau pas nol.',
      {
        x: 1.1,
        y: 2.5,
        w: 3.5,
        h: 2.2,
        fontSize: 13,
        color: C.lavender,
        fontFace: 'Arial',
      }
    );

    // Right card: Interactive Example
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 5.1,
      y: 1.9,
      w: 4.1,
      h: 3.2,
      fill: { color: C.cardBg },
      line: { color: C.teal, width: 1.5 },
      rectRadius: 0.15,
    });

    // Terminal box
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 5.4,
      y: 2.15,
      w: 3.5,
      h: 0.6,
      fill: { color: C.darkBox },
      line: { color: C.cardBorder, width: 1 },
      rectRadius: 0.1,
    });
    slide.addText('> Masukkan angka: 7', {
      x: 5.6,
      y: 2.25,
      w: 3.1,
      h: 0.4,
      fontSize: 14,
      bold: true,
      color: C.lime,
      fontFace: 'Courier New',
    });

    slide.addText('Kemungkinan Jawabannya:', {
      x: 5.4,
      y: 2.85,
      w: 3.5,
      h: 0.3,
      fontSize: 11,
      bold: true,
      color: C.orchid,
      fontFace: 'Arial',
    });

    const opts = [
      { label: '1. Positif', cond: 'kalau angka > 0', col: C.teal },
      { label: '2. Negatif', cond: 'kalau angka < 0', col: C.crimson },
      { label: '3. Angka Nol', cond: 'kalau angka == 0', col: C.yellow },
    ];
    opts.forEach((opt, idx) => {
      const oy = 3.2 + idx * 0.55;
      slide.addShape(pptx.ShapeType.roundRect, {
        x: 5.4,
        y: oy,
        w: 3.5,
        h: 0.45,
        fill: { color: C.darkBox },
        line: { color: opt.col, width: 1 },
        rectRadius: 0.08,
      });
      slide.addText(`${opt.label} (${opt.cond})`, {
        x: 5.6,
        y: oy + 0.07,
        w: 3.1,
        h: 0.3,
        fontSize: 11,
        color: C.white,
        fontFace: 'Arial',
      });
    });

    slide.addNotes(
      'Langkah pertama: minta pengguna memasukkan angka (contoh: 7). Nilai ini akan disimpan dan diuji.'
    );
  }

  // ─────────────────────────────────────────────────────────────
  // SLIDE 4: Memeriksa Nilai Angka — Positif vs Negatif (Material Slide 2)
  // ─────────────────────────────────────────────────────────────
  onProgress?.('Membuat Slide 4: Positif vs Negatif...');
  {
    const slide = pptx.addSlide();
    setBg(slide);
    addHeader(
      slide,
      'Cek Nilai Angkanya',
      'Positif atau Negatif, nih?',
      'Kita tinggal ngebandingin angkanya sama angka 0. Caranya simpel banget!'
    );

    // Card Positif
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.8,
      y: 1.9,
      w: 4.1,
      h: 3.2,
      fill: { color: C.cardBg },
      line: { color: C.teal, width: 1.5 },
      rectRadius: 0.15,
    });
    slide.addText('KONDISI 1 · angka > 0', {
      x: 1.1,
      y: 2.1,
      w: 3.5,
      h: 0.25,
      fontSize: 10,
      bold: true,
      color: C.lime,
      fontFace: 'Arial',
    });
    slide.addText('Bilangan Positif', {
      x: 1.1,
      y: 2.4,
      w: 3.5,
      h: 0.4,
      fontSize: 18,
      bold: true,
      color: C.white,
      fontFace: 'Arial',
    });
    slide.addText(
      'Kalau angkanya lebih besar dari 0, berarti dia positif. Di garis bilangan posisinya di sebelah kanan nol.',
      {
        x: 1.1,
        y: 2.85,
        w: 3.5,
        h: 1.1,
        fontSize: 12.5,
        color: C.lavender,
        fontFace: 'Arial',
      }
    );
    // Contoh box
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 1.1,
      y: 4.1,
      w: 3.5,
      h: 0.65,
      fill: { color: C.darkBox },
      line: { color: C.teal, width: 1 },
      rectRadius: 0.1,
    });
    slide.addText('Contoh: 7 → Positif\n(✓ Cocok karena 7 > 0)', {
      x: 1.25,
      y: 4.15,
      w: 3.2,
      h: 0.55,
      fontSize: 11.5,
      color: C.lime,
      fontFace: 'Arial',
      bold: true,
    });

    // Card Negatif
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 5.1,
      y: 1.9,
      w: 4.1,
      h: 3.2,
      fill: { color: C.cardBg },
      line: { color: C.crimson, width: 1.5 },
      rectRadius: 0.15,
    });
    slide.addText('KONDISI 2 · angka < 0', {
      x: 5.4,
      y: 2.1,
      w: 3.5,
      h: 0.25,
      fontSize: 10,
      bold: true,
      color: C.orchid,
      fontFace: 'Arial',
    });
    slide.addText('Bilangan Negatif', {
      x: 5.4,
      y: 2.4,
      w: 3.5,
      h: 0.4,
      fontSize: 18,
      bold: true,
      color: C.white,
      fontFace: 'Arial',
    });
    slide.addText(
      'Kalau angkanya lebih kecil dari 0 (ada tanda minusnya), berarti dia negatif. Di garis bilangan posisinya di sebelah kiri nol.',
      {
        x: 5.4,
        y: 2.85,
        w: 3.5,
        h: 1.1,
        fontSize: 12.5,
        color: C.lavender,
        fontFace: 'Arial',
      }
    );
    // Contoh box
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 5.4,
      y: 4.1,
      w: 3.5,
      h: 0.65,
      fill: { color: C.darkBox },
      line: { color: C.crimson, width: 1 },
      rectRadius: 0.1,
    });
    slide.addText('Contoh: -3 → Negatif\n(✓ Cocok karena -3 < 0)', {
      x: 5.55,
      y: 4.15,
      w: 3.2,
      h: 0.55,
      fontSize: 11.5,
      color: C.crimson,
      fontFace: 'Arial',
      bold: true,
    });

    slide.addNotes(
      'Sesuai materi slide 2: jika angka > 0 maka positif (contoh: 7). Jika angka < 0 maka negatif (contoh: -3).'
    );
  }

  // ─────────────────────────────────────────────────────────────
  // SLIDE 5: Menentukan Angka Nol (Material Slide 3)
  // ─────────────────────────────────────────────────────────────
  onProgress?.('Membuat Slide 5: Angka Nol...');
  {
    const slide = pptx.addSlide();
    setBg(slide);
    addHeader(
      slide,
      'Titik Tengah yang Netral',
      'Kalau Bukan Keduanya, Pasti Nol!',
      'Kalau angkanya nggak lebih besar dari 0 dan nggak lebih kecil dari 0, berarti angka itu adalah 0.'
    );

    const cards = [
      {
        k: 'KONDISI',
        v: 'Bukan Keduanya',
        desc: 'Pilihan terakhir saat dicek > 0 bukan, dan < 0 juga bukan.',
        col: C.yellow,
      },
      {
        k: 'SIFAT ANGKANYA',
        v: 'Serba Netral',
        desc: 'Nol itu unik! Bukan positif dan bukan negatif. Berdiri di perbatasan tengah.',
        col: C.mint,
      },
      {
        k: 'HASIL',
        v: '"Angka Nol"',
        desc: 'Kita bisa langsung simpulkan bahwa angka tersebut "Angka Nol".',
        col: C.teal,
      },
    ];

    cards.forEach((c, i) => {
      const x = 0.8 + i * 2.85;
      slide.addShape(pptx.ShapeType.roundRect, {
        x,
        y: 1.9,
        w: 2.7,
        h: 2.1,
        fill: { color: C.cardBg },
        line: { color: c.col, width: 1.2 },
        rectRadius: 0.12,
      });

      slide.addText(c.k, {
        x: x + 0.15,
        y: 2.05,
        w: 2.4,
        h: 0.25,
        fontSize: 9.5,
        bold: true,
        color: c.col,
        fontFace: 'Arial',
      });
      slide.addText(c.v, {
        x: x + 0.15,
        y: 2.35,
        w: 2.4,
        h: 0.45,
        fontSize: 16,
        bold: true,
        color: C.white,
        fontFace: 'Arial',
      });
      slide.addText(c.desc, {
        x: x + 0.15,
        y: 2.85,
        w: 2.4,
        h: 0.95,
        fontSize: 11,
        color: C.lavender,
        fontFace: 'Arial',
      });
    });

    // Number line at bottom
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.8,
      y: 4.3,
      w: 8.4,
      h: 0.65,
      fill: { color: C.darkBox },
      line: { color: C.cardBorder, width: 1 },
      rectRadius: 0.1,
    });
    slide.addText(
      '← Sebelah Kiri : -3, -2, -1 (Negatif)      |      [ 0 ] Pas di Tengah (Netral)      |      Sebelah Kanan : +1, +2, +7 (Positif) →',
      {
        x: 0.9,
        y: 4.4,
        w: 8.2,
        h: 0.45,
        fontSize: 10.5,
        bold: true,
        color: C.yellow,
        align: 'center',
        fontFace: 'Courier New',
      }
    );

    slide.addNotes(
      'Slide 3 materi: jika tidak > 0 dan tidak < 0, berarti angka tersebut adalah 0. Tampilkan keterangan "Angka Nol".'
    );
  }

  // ─────────────────────────────────────────────────────────────
  // SLIDE 6: Alur Algoritma 1 — Positif, Negatif, Nol (Material Slide 3)
  // ─────────────────────────────────────────────────────────────
  onProgress?.('Membuat Slide 6: Alur Algoritma 1...');
  {
    const slide = pptx.addSlide();
    setBg(slide);
    addHeader(slide, 'Langkah demi Langkah', 'Alur Kerja: Positif, Negatif, Nol.');

    const steps = [
      { no: '01', t: 'Masukin Angka', d: 'Minta angka dari user' },
      { no: '02', t: 'Cek Nilainya', d: 'Bandingkan > 0, < 0, == 0' },
      { no: '03', t: 'Tahu Jenisnya', d: 'Positif, Negatif, atau Nol' },
      { no: '04', t: 'Simpulkan Hasil', d: 'Hasil klasifikasi angka' },
    ];
    steps.forEach((s, idx) => {
      const x = 0.8 + idx * 2.15;
      slide.addShape(pptx.ShapeType.roundRect, {
        x,
        y: 1.55,
        w: 2.0,
        h: 1.0,
        fill: { color: C.cardBg },
        line: { color: C.cardBorder, width: 1 },
        rectRadius: 0.1,
      });
      slide.addText(s.no, {
        x: x + 0.1,
        y: 1.65,
        w: 0.4,
        h: 0.3,
        fontSize: 12,
        bold: true,
        color: C.teal,
        fontFace: 'Courier New',
      });
      slide.addText(s.t, {
        x: x + 0.5,
        y: 1.65,
        w: 1.4,
        h: 0.3,
        fontSize: 11,
        bold: true,
        color: C.white,
        fontFace: 'Arial',
      });
      slide.addText(s.d, {
        x: x + 0.1,
        y: 2.0,
        w: 1.8,
        h: 0.45,
        fontSize: 9.5,
        color: C.lavender,
        fontFace: 'Arial',
      });
    });

    // Code Window
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 1.5,
      y: 2.8,
      w: 7.0,
      h: 2.4,
      fill: { color: C.darkBox },
      line: { color: C.teal, width: 1.2 },
      rectRadius: 0.12,
    });
    slide.addText('cek_tanda_angka.js', {
      x: 1.8,
      y: 2.9,
      w: 6.4,
      h: 0.25,
      fontSize: 10,
      bold: true,
      color: C.orchid,
      fontFace: 'Courier New',
    });
    const code1 = [
      '// 1. Masukin angka yang mau dicek',
      'const angka = 7;',
      '',
      '// 2 & 3. Periksa nilainya satu per satu',
      'if (angka > 0) {',
      '  console.log("Bilangan Positif"); // 4. Hasil',
      '} else if (angka < 0) {',
      '  console.log("Bilangan Negatif");',
      '} else {',
      '  console.log("Angka Nol");',
      '}',
    ].join('\n');
    slide.addText(code1, {
      x: 1.8,
      y: 3.2,
      w: 6.4,
      h: 1.85,
      fontSize: 10.5,
      color: C.mint,
      fontFace: 'Courier New',
    });

    slide.addNotes(
      'Alur algoritma: Masukkan Angka → Periksa Nilai → Tentukan Jenis Bilangan → Tampilkan Hasil.'
    );
  }

  // ─────────────────────────────────────────────────────────────
  // SLIDE 7: Memasukkan Angka untuk Paritas (Material Slide 4)
  // ─────────────────────────────────────────────────────────────
  onProgress?.('Membuat Slide 7: Paritas Angka...');
  {
    const slide = pptx.addSlide();
    setBg(slide);
    addHeader(
      slide,
      'Langkah Pertama · Bagian 2',
      'Sekarang, Genap atau Ganjil?',
      'Pikirkan satu angka bulat lagi. Nah, kali ini kita bakal cari tahu apakah angka ini genap atau ganjil lewat trik pembagian dengan angka 2.'
    );

    // Left card
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.8,
      y: 1.9,
      w: 4.1,
      h: 3.2,
      fill: { color: C.cardBg },
      line: { color: C.cardBorder, width: 1 },
      rectRadius: 0.15,
    });
    slide.addText('Input Data Paritas', {
      x: 1.1,
      y: 2.1,
      w: 3.5,
      h: 0.3,
      fontSize: 12,
      bold: true,
      color: C.magenta,
      fontFace: 'Arial',
    });
    slide.addText(
      'Pada tahap ini, kita ingin menentukan apakah suatu bilangan tergolong genap atau ganjil.\n\nKuncinya menggunakan operasi pembagian dengan angka 2 (disebut juga operasi Modulo atau % dalam pemrograman).',
      {
        x: 1.1,
        y: 2.5,
        w: 3.5,
        h: 2.2,
        fontSize: 13,
        color: C.lavender,
        fontFace: 'Arial',
      }
    );

    // Right card
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 5.1,
      y: 1.9,
      w: 4.1,
      h: 3.2,
      fill: { color: C.cardBg },
      line: { color: C.magenta, width: 1.5 },
      rectRadius: 0.15,
    });
    // Terminal input
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 5.4,
      y: 2.15,
      w: 3.5,
      h: 0.6,
      fill: { color: C.darkBox },
      line: { color: C.cardBorder, width: 1 },
      rectRadius: 0.1,
    });
    slide.addText('> Masukkan angka: 8', {
      x: 5.6,
      y: 2.25,
      w: 3.1,
      h: 0.4,
      fontSize: 14,
      bold: true,
      color: C.teal,
      fontFace: 'Courier New',
    });

    slide.addText('Kunci Rahasia Modulo 2:', {
      x: 5.4,
      y: 2.9,
      w: 3.5,
      h: 0.3,
      fontSize: 11,
      bold: true,
      color: C.orchid,
      fontFace: 'Arial',
    });

    slide.addShape(pptx.ShapeType.roundRect, {
      x: 5.4,
      y: 3.25,
      w: 1.7,
      h: 1.2,
      fill: { color: C.darkBox },
      line: { color: C.lime, width: 1.2 },
      rectRadius: 0.1,
    });
    slide.addText('Sisanya 0\n\nJelas Genap\n(habis dibagi)', {
      x: 5.5,
      y: 3.35,
      w: 1.5,
      h: 1.0,
      fontSize: 11,
      bold: true,
      color: C.lime,
      align: 'center',
      fontFace: 'Arial',
    });

    slide.addShape(pptx.ShapeType.roundRect, {
      x: 7.2,
      y: 3.25,
      w: 1.7,
      h: 1.2,
      fill: { color: C.darkBox },
      line: { color: C.magenta, width: 1.2 },
      rectRadius: 0.1,
    });
    slide.addText('Ada Sisa 1\n\nPasti Ganjil\n(tidak habis)', {
      x: 7.3,
      y: 3.35,
      w: 1.5,
      h: 1.0,
      fontSize: 11,
      bold: true,
      color: C.magenta,
      align: 'center',
      fontFace: 'Arial',
    });

    slide.addNotes(
      'Slide 4 materi: masukkan sebuah angka untuk diperiksa apakah genap atau ganjil (contoh: 8).'
    );
  }

  // ─────────────────────────────────────────────────────────────
  // SLIDE 8: Memeriksa Bilangan Genap (Material Slide 5)
  // ─────────────────────────────────────────────────────────────
  onProgress?.('Membuat Slide 8: Bilangan Genap...');
  {
    const slide = pptx.addSlide();
    setBg(slide);
    addHeader(
      slide,
      'Habis Dibagi Dua',
      'Ciri-Ciri Bilangan Genap.',
      'Kalau angka kita bagi 2 dan sisanya 0 (habis pas), berarti angka itu adalah bilangan genap.'
    );

    // Box 1: 8
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.8,
      y: 1.9,
      w: 4.1,
      h: 2.3,
      fill: { color: C.cardBg },
      line: { color: C.lime, width: 1.5 },
      rectRadius: 0.15,
    });
    slide.addText('CONTOH 1 · 8 % 2 == 0', {
      x: 1.1,
      y: 2.05,
      w: 3.5,
      h: 0.25,
      fontSize: 10,
      bold: true,
      color: C.mint,
      fontFace: 'Arial',
    });
    slide.addText('8 ÷ 2 = 4 (sisa 0)', {
      x: 1.1,
      y: 2.35,
      w: 3.5,
      h: 0.45,
      fontSize: 20,
      bold: true,
      color: C.white,
      fontFace: 'Courier New',
    });
    slide.addText('→ Status: Bilangan Genap', {
      x: 1.1,
      y: 2.85,
      w: 3.5,
      h: 0.35,
      fontSize: 14,
      bold: true,
      color: C.lime,
      fontFace: 'Arial',
    });
    slide.addText(
      'Angka 8 bisa dibagi rata jadi 4 pasang yang utuh. Nggak ada satu pun yang ketinggalan!',
      {
        x: 1.1,
        y: 3.25,
        w: 3.5,
        h: 0.8,
        fontSize: 11.5,
        color: C.lavender,
        fontFace: 'Arial',
      }
    );

    // Box 2: 12
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 5.1,
      y: 1.9,
      w: 4.1,
      h: 2.3,
      fill: { color: C.cardBg },
      line: { color: C.lime, width: 1.5 },
      rectRadius: 0.15,
    });
    slide.addText('CONTOH 2 · 12 % 2 == 0', {
      x: 5.4,
      y: 2.05,
      w: 3.5,
      h: 0.25,
      fontSize: 10,
      bold: true,
      color: C.mint,
      fontFace: 'Arial',
    });
    slide.addText('12 ÷ 2 = 6 (sisa 0)', {
      x: 5.4,
      y: 2.35,
      w: 3.5,
      h: 0.45,
      fontSize: 20,
      bold: true,
      color: C.white,
      fontFace: 'Courier New',
    });
    slide.addText('→ Status: Bilangan Genap', {
      x: 5.4,
      y: 2.85,
      w: 3.5,
      h: 0.35,
      fontSize: 14,
      bold: true,
      color: C.lime,
      fontFace: 'Arial',
    });
    slide.addText(
      'Angka 12 bisa dibagi rata jadi 6 pasang pas tanpa menyisakan apa pun.',
      {
        x: 5.4,
        y: 3.25,
        w: 3.5,
        h: 0.8,
        fontSize: 11.5,
        color: C.lavender,
        fontFace: 'Arial',
      }
    );

    // Rumus Box
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.8,
      y: 4.4,
      w: 8.4,
      h: 0.65,
      fill: { color: C.darkBox },
      line: { color: C.lime, width: 1 },
      rectRadius: 0.1,
    });
    slide.addText(
      'Kriteria Komputer:  angka % 2 === 0   →   Tampilkan keterangan: "Bilangan Genap"',
      {
        x: 0.9,
        y: 4.5,
        w: 8.2,
        h: 0.45,
        fontSize: 12,
        bold: true,
        color: C.lime,
        align: 'center',
        fontFace: 'Courier New',
      }
    );

    slide.addNotes(
      'Slide 5 materi: angka dibagi 2, jika sisa 0 maka bilangan genap. Contoh: 8 ÷ 2 sisa 0, 12 ÷ 2 sisa 0.'
    );
  }

  // ─────────────────────────────────────────────────────────────
  // SLIDE 9: Menentukan Bilangan Ganjil (Material Slide 6)
  // ─────────────────────────────────────────────────────────────
  onProgress?.('Membuat Slide 9: Bilangan Ganjil...');
  {
    const slide = pptx.addSlide();
    setBg(slide);
    addHeader(
      slide,
      'Ada Sisa Pembagian',
      'Kapan Dibilang Bilangan Ganjil?',
      'Kebalikannya, kalau angka dibagi 2 dan masih ada sisa (sisa 1), berarti itu bilangan ganjil.'
    );

    // Box 1: 13
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.8,
      y: 1.9,
      w: 4.1,
      h: 2.3,
      fill: { color: C.cardBg },
      line: { color: C.magenta, width: 1.5 },
      rectRadius: 0.15,
    });
    slide.addText('CONTOH UTAMA · 13 % 2 == 1', {
      x: 1.1,
      y: 2.05,
      w: 3.5,
      h: 0.25,
      fontSize: 10,
      bold: true,
      color: C.orchid,
      fontFace: 'Arial',
    });
    slide.addText('13 ÷ 2 = 6 (sisa 1)', {
      x: 1.1,
      y: 2.35,
      w: 3.5,
      h: 0.45,
      fontSize: 20,
      bold: true,
      color: C.white,
      fontFace: 'Courier New',
    });
    slide.addText('→ Status: Bilangan Ganjil', {
      x: 1.1,
      y: 2.85,
      w: 3.5,
      h: 0.35,
      fontSize: 14,
      bold: true,
      color: C.magenta,
      fontFace: 'Arial',
    });
    slide.addText(
      'Angka 13 dapet 6 pasang (12), tapi masih ada 1 angka yang sendirian dan nggak dapet pasangan.',
      {
        x: 1.1,
        y: 3.25,
        w: 3.5,
        h: 0.8,
        fontSize: 11.5,
        color: C.lavender,
        fontFace: 'Arial',
      }
    );

    // Box 2: 7
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 5.1,
      y: 1.9,
      w: 4.1,
      h: 2.3,
      fill: { color: C.cardBg },
      line: { color: C.magenta, width: 1.5 },
      rectRadius: 0.15,
    });
    slide.addText('CONTOH TAMBAHAN · 7 % 2 == 1', {
      x: 5.4,
      y: 2.05,
      w: 3.5,
      h: 0.25,
      fontSize: 10,
      bold: true,
      color: C.orchid,
      fontFace: 'Arial',
    });
    slide.addText('7 ÷ 2 = 3 (sisa 1)', {
      x: 5.4,
      y: 2.35,
      w: 3.5,
      h: 0.45,
      fontSize: 20,
      bold: true,
      color: C.white,
      fontFace: 'Courier New',
    });
    slide.addText('→ Status: Bilangan Ganjil', {
      x: 5.4,
      y: 2.85,
      w: 3.5,
      h: 0.35,
      fontSize: 14,
      bold: true,
      color: C.magenta,
      fontFace: 'Arial',
    });
    slide.addText(
      'Angka 7 dari slide awal juga dapet 3 pasang (6) dan nyisa 1. Jelas bahwa 7 itu ganjil!',
      {
        x: 5.4,
        y: 3.25,
        w: 3.5,
        h: 0.8,
        fontSize: 11.5,
        color: C.lavender,
        fontFace: 'Arial',
      }
    );

    // Rumus Box
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.8,
      y: 4.4,
      w: 8.4,
      h: 0.65,
      fill: { color: C.darkBox },
      line: { color: C.magenta, width: 1 },
      rectRadius: 0.1,
    });
    slide.addText(
      'Kriteria Komputer:  angka % 2 !== 0   →   Tampilkan keterangan: "Bilangan Ganjil"',
      {
        x: 0.9,
        y: 4.5,
        w: 8.2,
        h: 0.45,
        fontSize: 12,
        bold: true,
        color: C.magenta,
        align: 'center',
        fontFace: 'Courier New',
      }
    );

    slide.addNotes(
      'Slide 6 materi: jika sisa pembagian bukan 0, maka bilangan ganjil. Contoh: 13 ÷ 2 sisa 1 (Ganjil).'
    );
  }

  // ─────────────────────────────────────────────────────────────
  // SLIDE 10: Alur Algoritma 2 — Genap & Ganjil (Material Slide 6)
  // ─────────────────────────────────────────────────────────────
  onProgress?.('Membuat Slide 10: Alur Algoritma 2...');
  {
    const slide = pptx.addSlide();
    setBg(slide);
    addHeader(slide, 'Langkah demi Langkah', 'Alur Kerja: Genap & Ganjil.');

    const steps = [
      { no: '01', t: 'Masukin Angka', d: 'Ambil angka bulat' },
      { no: '02', t: 'Bagi Sama 2', d: 'Hitung operasi bagi' },
      { no: '03', t: 'Lihat Sisanya', d: 'Cek sisa pembagian' },
      { no: '04', t: 'Tahu Statusnya', d: 'Sisa 0 genap, sisa 1 ganjil' },
      { no: '05', t: 'Hasil', d: 'Hasil klasifikasi ganjil & genap' },
    ];
    steps.forEach((s, idx) => {
      const x = 0.8 + idx * 1.7;
      slide.addShape(pptx.ShapeType.roundRect, {
        x,
        y: 1.55,
        w: 1.58,
        h: 1.0,
        fill: { color: C.cardBg },
        line: { color: C.cardBorder, width: 1 },
        rectRadius: 0.1,
      });
      slide.addText(s.no, {
        x: x + 0.08,
        y: 1.62,
        w: 0.35,
        h: 0.25,
        fontSize: 11,
        bold: true,
        color: C.teal,
        fontFace: 'Courier New',
      });
      slide.addText(s.t, {
        x: x + 0.42,
        y: 1.62,
        w: 1.1,
        h: 0.25,
        fontSize: 10,
        bold: true,
        color: C.white,
        fontFace: 'Arial',
      });
      slide.addText(s.d, {
        x: x + 0.08,
        y: 1.95,
        w: 1.4,
        h: 0.5,
        fontSize: 9,
        color: C.lavender,
        fontFace: 'Arial',
      });
    });

    // Code Window
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 1.5,
      y: 2.8,
      w: 7.0,
      h: 2.4,
      fill: { color: C.darkBox },
      line: { color: C.magenta, width: 1.2 },
      rectRadius: 0.12,
    });
    slide.addText('cek_genap_ganjil.js', {
      x: 1.8,
      y: 2.9,
      w: 6.4,
      h: 0.25,
      fontSize: 10,
      bold: true,
      color: C.orchid,
      fontFace: 'Courier New',
    });
    const code2 = [
      '// 1. Masukin angka yang mau dicek',
      'const angka = 8;',
      '',
      '// 2 & 3. Bagi sama 2 terus cek sisanya',
      'if (angka % 2 === 0) {',
      '  console.log("Bilangan Genap"); // 4 & 5. Genap',
      '} else {',
      '  console.log("Bilangan Ganjil"); // 4 & 5. Ganjil',
      '}',
    ].join('\n');
    slide.addText(code2, {
      x: 1.8,
      y: 3.2,
      w: 6.4,
      h: 1.85,
      fontSize: 11,
      color: C.mint,
      fontFace: 'Courier New',
    });

    slide.addNotes(
      'Alur algoritma paritas: Masukkan Angka → Bagi dengan 2 → Periksa Sisa → Tentukan Genap/Ganjil → Tampilkan Hasil.'
    );
  }

  // ─────────────────────────────────────────────────────────────
  // SLIDE 11: Rangkuman Tabel Studi Kasus
  // ─────────────────────────────────────────────────────────────
  onProgress?.('Membuat Slide 11: Matriks Studi Kasus...');
  {
    const slide = pptx.addSlide();
    setBg(slide);
    addHeader(
      slide,
      'Rangkuman & Uji Coba',
      'Semua Contoh Kasus & Hasil Klasifikasi',
      'Seluruh contoh diuji menggunakan kedua kriteria logika secara lengkap.'
    );

    const tableHeaders = [
      { text: 'Angka', options: { bold: true, color: C.white, fill: { color: C.cardBorder } } },
      { text: 'Uji Tanda (vs 0)', options: { bold: true, color: C.white, fill: { color: C.cardBorder } } },
      { text: 'Uji Modulo (÷ 2)', options: { bold: true, color: C.white, fill: { color: C.cardBorder } } },
      { text: 'Kesimpulan Lengkap', options: { bold: true, color: C.lime, fill: { color: C.cardBorder } } },
    ];

    const tableRows = [
      ['7', '7 > 0 (Positif)', '7 % 2 = 1 (Sisa 1)', 'Positif & Ganjil'],
      ['8', '8 > 0 (Positif)', '8 % 2 = 0 (Sisa 0)', 'Positif & Genap'],
      ['-3', '-3 < 0 (Negatif)', 'Sisa bukan 0 (Ganjil)', 'Negatif & Ganjil'],
      ['12', '12 > 0 (Positif)', '12 % 2 = 0 (Sisa 0)', 'Positif & Genap'],
      ['13', '13 > 0 (Positif)', '13 % 2 = 1 (Sisa 1)', 'Positif & Ganjil'],
      ['0', '0 == 0 (Nol)', '0 % 2 = 0 (Sisa 0)', 'Angka Nol & Genap'],
    ].map((row, rIdx) =>
      row.map((cell, cIdx) => ({
        text: cell,
        options: {
          color: cIdx === 3 ? C.mint : C.lavender,
          fill: { color: rIdx % 2 === 0 ? C.darkBox : C.cardBg },
          fontSize: 11,
          bold: cIdx === 3,
        },
      }))
    );

    slide.addTable([tableHeaders, ...tableRows], {
      x: 0.8,
      y: 1.9,
      w: 8.4,
      h: 3.1,
      colW: [1.2, 2.4, 2.4, 2.4],
      border: { pt: 1, color: C.cardBorder },
      align: 'left',
      fontFace: 'Arial',
    });

    slide.addNotes(
      'Tabel ini merangkum seluruh angka yang ada di material.md dengan kedua logika klasifikasi.'
    );
  }

  // ─────────────────────────────────────────────────────────────
  // SLIDE 12: Kesimpulan & Penutup
  // ─────────────────────────────────────────────────────────────
  onProgress?.('Membuat Slide 12: Kesimpulan...');
  {
    const slide = pptx.addSlide();
    setBg(slide);
    addHeader(
      slide,
      'Inti Pembelajaran',
      'Dua Trik Utama Klasifikasi Angka.',
      'Hanya dengan dua aturan logika simpel ini, kita bisa ngambil keputusan angka yang kita pikirkan termasuk jenis apa.'
    );

    // Pilar 1
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 0.8,
      y: 1.9,
      w: 4.1,
      h: 2.8,
      fill: { color: C.cardBg },
      line: { color: C.teal, width: 1.5 },
      rectRadius: 0.15,
    });
    slide.addText('KUNCI 1 · POLARITAS NILAI', {
      x: 1.1,
      y: 2.1,
      w: 3.5,
      h: 0.25,
      fontSize: 10,
      bold: true,
      color: C.teal,
      fontFace: 'Arial',
    });
    slide.addText('Bandingkan sama Nol', {
      x: 1.1,
      y: 2.4,
      w: 3.5,
      h: 0.4,
      fontSize: 18,
      bold: true,
      color: C.white,
      fontFace: 'Arial',
    });
    slide.addText(
      'Pakai operator relasional > 0, < 0, dan == 0 untuk memisahkan domain bilangan menjadi:\n\n• Positif (lebih dari 0)\n• Negatif (kurang dari 0)\n• Angka Nol (titik tengah acuan)',
      {
        x: 1.1,
        y: 2.85,
        w: 3.5,
        h: 1.6,
        fontSize: 12,
        color: C.lavender,
        fontFace: 'Arial',
      }
    );

    // Pilar 2
    slide.addShape(pptx.ShapeType.roundRect, {
      x: 5.1,
      y: 1.9,
      w: 4.1,
      h: 2.8,
      fill: { color: C.cardBg },
      line: { color: C.magenta, width: 1.5 },
      rectRadius: 0.15,
    });
    slide.addText('KUNCI 2 · PARITAS BILANGAN', {
      x: 5.4,
      y: 2.1,
      w: 3.5,
      h: 0.25,
      fontSize: 10,
      bold: true,
      color: C.magenta,
      fontFace: 'Arial',
    });
    slide.addText('Bagi 2 dan Cek Sisa', {
      x: 5.4,
      y: 2.4,
      w: 3.5,
      h: 0.4,
      fontSize: 18,
      bold: true,
      color: C.white,
      fontFace: 'Arial',
    });
    slide.addText(
      'Pakai operator modulus % 2 untuk mengecek keterbagian kelipatan 2:\n\n• Bilangan Genap (sisa pembagian = 0)\n• Bilangan Ganjil (sisa pembagian = 1)\n• Berpasangan vs ada yang tersisa',
      {
        x: 5.4,
        y: 2.85,
        w: 3.5,
        h: 1.6,
        fontSize: 12,
        color: C.lavender,
        fontFace: 'Arial',
      }
    );

    slide.addNotes(
      'Kesimpulan: dua logika sederhana ini mendasari setiap struktur kontrol percabangan dalam ilmu komputer.'
    );
  }

  onProgress?.('Menyimpan file PowerPoint (.pptx)...');
  await pptx.writeFile({ fileName: 'Klasifikasi-Bilangan-Presentasi.pptx' });
  onProgress?.('Selesai!');
}
