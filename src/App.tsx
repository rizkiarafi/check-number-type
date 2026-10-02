import { useState } from 'react';
import Deck from './deck/Deck';
import Slide from './deck/Slide';
import Build from './deck/Build';
import Reveal from './deck/Reveal';
import Cover from './components/Cover';
import Agenda from './components/Agenda';
import Split from './components/Split';
import Steps from './components/Steps';
import Table from './components/Table';
import CodeWindow from './components/CodeWindow';
import SpotlightCard from './components/SpotlightCard';

/* ── Custom Theme Colors from prompt.md ── */
const PALETTE = {
  bg: '#220522',
  deepViolet: '#411782',
  indigo: '#384ec5',
  teal: '#0ca8a4',
  lime: '#a1df2a',
  mint: '#c5ffc9',
  yellow: '#e5cc21',
  crimson: '#c93267',
  plum: '#8a0c7b',
  magenta: '#dc32a6',
  orchid: '#e183cf',
  purple: '#ac4cff',
  slatePurple: '#5c43a9',
  periwinkle: '#7c94f4',
  lavender: '#c9c4e8',
};

/* ── Interactive Parity & Sign Tester Widget ── */
function InteractiveClassifier() {
  const [val, setVal] = useState<number>(7);

  const getSign = (n: number) => {
    if (n > 0) return { label: 'Bilangan Positif', color: PALETTE.teal, bg: 'rgba(12, 168, 164, 0.15)', border: PALETTE.teal, cond: 'Nilai > 0' };
    if (n < 0) return { label: 'Bilangan Negatif', color: PALETTE.crimson, bg: 'rgba(201, 50, 103, 0.15)', border: PALETTE.crimson, cond: 'Nilai < 0' };
    return { label: 'Angka Nol', color: PALETTE.yellow, bg: 'rgba(229, 204, 33, 0.15)', border: PALETTE.yellow, cond: 'Nilai == 0' };
  };

  const getParity = (n: number) => {
    const rem = Math.abs(n) % 2;
    if (rem === 0) return { label: 'Bilangan Genap', color: PALETTE.lime, bg: 'rgba(161, 223, 42, 0.15)', border: PALETTE.lime, remText: `${n} ÷ 2 → sisa 0` };
    return { label: 'Bilangan Ganjil', color: PALETTE.magenta, bg: 'rgba(220, 50, 166, 0.15)', border: PALETTE.magenta, remText: `${n} ÷ 2 → sisa ${rem}` };
  };

  const sign = getSign(val);
  const parity = getParity(val);

  return (
    <div
      className="mat"
      style={{
        borderRadius: 'var(--radius)',
        padding: 'clamp(18px, 2.5vw, 24px)',
        maxWidth: 780,
        marginInline: 'auto',
        background: 'rgba(40, 12, 55, 0.7)',
        border: '1px solid rgba(201, 196, 232, 0.22)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.12em', color: PALETTE.lavender, fontWeight: 600 }}>
            Uji Angka:
          </span>
          <input
            type="number"
            value={val}
            onChange={(e) => setVal(parseInt(e.target.value, 10) || 0)}
            style={{
              width: 90,
              padding: '6px 12px',
              borderRadius: 8,
              background: 'rgba(65, 23, 130, 0.6)',
              border: `1px solid ${PALETTE.purple}`,
              color: '#fff',
              fontSize: 18,
              fontWeight: 700,
              fontFamily: 'var(--font-mono)',
              textAlign: 'center',
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {[-3, 0, 7, 8, 12, 13].map((preset) => (
            <button
              key={preset}
              onClick={() => setVal(preset)}
              style={{
                border: 'none',
                cursor: 'pointer',
                padding: '5px 11px',
                borderRadius: 999,
                fontSize: 12,
                fontWeight: 600,
                fontFamily: 'var(--font-mono)',
                background: val === preset ? PALETTE.teal : 'rgba(92, 67, 169, 0.4)',
                color: val === preset ? '#220522' : PALETTE.lavender,
                transition: 'all 0.2s',
              }}
            >
              {preset}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 14 }}>
        <div
          style={{
            padding: 14,
            borderRadius: 12,
            background: sign.bg,
            border: `1px solid ${sign.border}`,
            textAlign: 'left',
          }}
        >
          <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em', color: PALETTE.lavender, fontWeight: 600, marginBottom: 4 }}>
            Hasil Klasifikasi Tanda
          </div>
          <div style={{ fontSize: 20, fontWeight: 700, color: sign.color }}>
            {sign.label}
          </div>
          <div style={{ fontSize: 13, color: PALETTE.lavender, marginTop: 4, fontFamily: 'var(--font-mono)' }}>
            Kondisi: {sign.cond}
          </div>
        </div>

        <div
          style={{
            padding: 14,
            borderRadius: 12,
            background: parity.bg,
            border: `1px solid ${parity.border}`,
            textAlign: 'left',
          }}
        >
          <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em', color: PALETTE.lavender, fontWeight: 600, marginBottom: 4 }}>
            Hasil Klasifikasi Paritas
          </div>
          <div style={{ fontSize: 20, fontWeight: 700, color: parity.color }}>
            {parity.label}
          </div>
          <div style={{ fontSize: 13, color: PALETTE.lavender, marginTop: 4, fontFamily: 'var(--font-mono)' }}>
            Modulo: {parity.remText}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Deck>
      {/* ── Slide 1: Cover ── */}
      <Cover
        nav="Cover"
        notes="Selamat datang. Slide deck ini mengupas logika penentuan jenis bilangan: positif, negatif, nol, serta bilangan genap dan ganjil berdasarkan prinsip komputasi."
        kicker="Algoritma & Pemrograman Dasar"
        title={
          <>
            Klasifikasi <span className="accent-text">Jenis Bilangan</span>
          </>
        }
        subtitle="Logika Percabangan Nilai (Positif, Negatif, Nol) & Aritmatika Modulo (Genap, Ganjil)"
        foot="Materi Logika Pemrograman · Evaluasi Kondisional"
      />

      {/* ── Slide 2: Agenda ── */}
      <Agenda
        nav="Agenda"
        notes="Berikut adalah alur pembahasan presentasi hari ini: dari input data, pemeriksaan nilai terhadap nol, hingga evaluasi sisa pembagian untuk genap dan ganjil."
        kicker="Alur Pembahasan"
        title="Pokok Materi Presentasi."
        items={[
          { title: 'Langkah Awal: Memasukkan Angka', hint: 'Input Nilai' },
          { title: 'Pemeriksaan Nilai: Positif vs Negatif', hint: 'Kondisi 1 & 2' },
          { title: 'Menentukan Angka Nol & Alur Algoritma 1', hint: 'Titik Netral' },
          { title: 'Pemeriksaan Paritas: Masukkan Angka Baru', hint: 'Operasi Modulo' },
          { title: 'Pemeriksaan Bilangan Genap & Ganjil', hint: 'Sisa Bagi 2' },
          { title: 'Alur Algoritma 2 & Tabel Studi Kasus', hint: 'Matriks & Kesimpulan' },
        ]}
      />

      {/* ── Slide 3: Langkah Awal — Memasukkan Angka (Material Slide 1) ── */}
      <Split
        nav="Input Angka 1"
        notes="Langkah pertama dari algoritma adalah meminta pengguna memasukkan sebuah angka. Sebagai contoh awal dari materi, pengguna memasukkan angka 7."
        kicker="Langkah Awal · Bagian 1"
        title={
          <>
            Memasukkan <span className="accent-text">Sebuah Angka.</span>
          </>
        }
        body="Proses dimulai dengan menerima angka masukan dari pengguna. Angka ini akan disimpan dalam variabel untuk diperiksa jenis bilangannya: apakah positif, negatif, atau nol."
        media={
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(20px, 4vw, 40px)',
              background: 'radial-gradient(circle at 40% 40%, rgba(172, 76, 255, 0.18), transparent 70%)',
            }}
          >
            <div
              className="mat"
              style={{
                width: '100%',
                maxWidth: 440,
                borderRadius: 'var(--radius)',
                padding: 'clamp(22px, 3vw, 32px)',
                background: 'rgba(50, 15, 68, 0.75)',
                border: `1px solid ${PALETTE.purple}`,
                boxShadow: '0 20px 60px rgba(10, 2, 16, 0.8)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                <span className="chip" style={{ background: 'rgba(12, 168, 164, 0.15)', borderColor: PALETTE.teal, color: PALETTE.teal }}>
                  Input Data
                </span>
                <span style={{ fontSize: 12, color: PALETTE.lavender, fontFamily: 'var(--font-mono)' }}>
                  Contoh Materi #1
                </span>
              </div>

              <div
                style={{
                  padding: '16px 20px',
                  borderRadius: 12,
                  background: 'rgba(25, 5, 35, 0.85)',
                  border: '1px solid rgba(201, 196, 232, 0.2)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 16,
                  color: '#fff',
                  marginBottom: 20,
                }}
              >
                <span style={{ color: PALETTE.lavender }}>&gt; Masukkan angka: </span>
                <span style={{ color: PALETTE.lime, fontWeight: 700, fontSize: 22 }}>7</span>
              </div>

              <div style={{ fontSize: 13, color: PALETTE.lavender, marginBottom: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Kategori yang Akan Diperiksa:
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', borderRadius: 8, background: 'rgba(12, 168, 164, 0.12)', border: '1px solid rgba(12, 168, 164, 0.3)' }}>
                  <span style={{ color: PALETTE.teal, fontWeight: 700, fontSize: 15 }}>1. Positif</span>
                  <span style={{ color: PALETTE.lavender, fontSize: 12, marginLeft: 'auto' }}>angka &gt; 0</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', borderRadius: 8, background: 'rgba(201, 50, 103, 0.12)', border: '1px solid rgba(201, 50, 103, 0.3)' }}>
                  <span style={{ color: PALETTE.crimson, fontWeight: 700, fontSize: 15 }}>2. Negatif</span>
                  <span style={{ color: PALETTE.lavender, fontSize: 12, marginLeft: 'auto' }}>angka &lt; 0</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', borderRadius: 8, background: 'rgba(229, 204, 33, 0.12)', border: '1px solid rgba(229, 204, 33, 0.3)' }}>
                  <span style={{ color: PALETTE.yellow, fontWeight: 700, fontSize: 15 }}>3. Angka Nol</span>
                  <span style={{ color: PALETTE.lavender, fontSize: 12, marginLeft: 'auto' }}>angka == 0</span>
                </div>
              </div>
            </div>
          </div>
        }
      />

      {/* ── Slide 4: Memeriksa Nilai Angka — Positif vs Negatif (Material Slide 2) ── */}
      <Slide
        center
        nav="Positif vs Negatif"
        notes="Sesuai slide 2 material: jika nilai lebih besar dari 0 maka positif (contoh: 7). Jika nilai lebih kecil dari 0 maka negatif (contoh: -3)."
      >
        <div className="kicker" style={{ marginBottom: 10, textAlign: 'center' }}>
          Pemeriksaan Nilai
        </div>
        <h2
          className="headline"
          style={{
            textAlign: 'center',
            marginInline: 'auto',
            marginBottom: 14,
            maxWidth: '24ch',
          }}
        >
          Menentukan Bilangan <span className="accent-text">Positif atau Negatif.</span>
        </h2>
        <p
          className="lead"
          style={{
            textAlign: 'center',
            marginInline: 'auto',
            marginBottom: 'clamp(24px, 4vh, 38px)',
            maxWidth: '56ch',
            color: PALETTE.lavender,
          }}
        >
          Komputer menguji posisi angka terhadap titik acuan nol menggunakan operator relasional.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
            gap: 'clamp(16px, 2.5vw, 28px)',
            width: '100%',
            maxWidth: 960,
            marginInline: 'auto',
          }}
        >
          {/* Card Positif */}
          <div
            className="mat"
            style={{
              padding: 'clamp(20px, 2.5vw, 30px)',
              borderRadius: 'var(--radius)',
              background: 'rgba(38, 14, 60, 0.65)',
              border: `1px solid ${PALETTE.teal}`,
              textAlign: 'left',
              boxShadow: '0 16px 40px rgba(12, 168, 164, 0.15)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <span className="chip" style={{ background: 'rgba(12, 168, 164, 0.2)', borderColor: PALETTE.teal, color: PALETTE.teal }}>
                Kondisi 1
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: PALETTE.lime, fontWeight: 700 }}>
                angka &gt; 0
              </span>
            </div>
            <h3 style={{ fontSize: 'clamp(20px, 2.2vw, 26px)', color: '#fff', marginBottom: 8 }}>
              Bilangan Positif
            </h3>
            <p style={{ fontSize: 15, color: PALETTE.lavender, lineHeight: 1.5, marginBottom: 16 }}>
              Jika angka <strong>lebih besar dari 0</strong>, maka angka tersebut merupakan bilangan positif. Terletak di sisi kanan sumbu bilangan.
            </p>
            <div
              style={{
                padding: '10px 14px',
                borderRadius: 10,
                background: 'rgba(12, 168, 164, 0.12)',
                border: '1px solid rgba(12, 168, 164, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                fontFamily: 'var(--font-mono)',
              }}
            >
              <span style={{ color: PALETTE.lime, fontWeight: 700 }}>Contoh:</span>
              <span style={{ color: '#fff' }}>7 → <strong>Bilangan Positif</strong></span>
              <span style={{ marginLeft: 'auto', color: PALETTE.teal, fontSize: 12 }}>✓ Benar (7 &gt; 0)</span>
            </div>
          </div>

          {/* Card Negatif */}
          <div
            className="mat"
            style={{
              padding: 'clamp(20px, 2.5vw, 30px)',
              borderRadius: 'var(--radius)',
              background: 'rgba(38, 14, 60, 0.65)',
              border: `1px solid ${PALETTE.crimson}`,
              textAlign: 'left',
              boxShadow: '0 16px 40px rgba(201, 50, 103, 0.15)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <span className="chip" style={{ background: 'rgba(201, 50, 103, 0.2)', borderColor: PALETTE.crimson, color: PALETTE.crimson }}>
                Kondisi 2
              </span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: PALETTE.orchid, fontWeight: 700 }}>
                angka &lt; 0
              </span>
            </div>
            <h3 style={{ fontSize: 'clamp(20px, 2.2vw, 26px)', color: '#fff', marginBottom: 8 }}>
              Bilangan Negatif
            </h3>
            <p style={{ fontSize: 15, color: PALETTE.lavender, lineHeight: 1.5, marginBottom: 16 }}>
              Jika angka <strong>lebih kecil dari 0</strong>, maka angka tersebut merupakan bilangan negatif. Terletak di sisi kiri sumbu bilangan.
            </p>
            <div
              style={{
                padding: '10px 14px',
                borderRadius: 10,
                background: 'rgba(201, 50, 103, 0.12)',
                border: '1px solid rgba(201, 50, 103, 0.3)',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                fontFamily: 'var(--font-mono)',
              }}
            >
              <span style={{ color: PALETTE.orchid, fontWeight: 700 }}>Contoh:</span>
              <span style={{ color: '#fff' }}>-3 → <strong>Bilangan Negatif</strong></span>
              <span style={{ marginLeft: 'auto', color: PALETTE.crimson, fontSize: 12 }}>✓ Benar (-3 &lt; 0)</span>
            </div>
          </div>
        </div>
      </Slide>

      {/* ── Slide 5: Menentukan Angka Nol (Material Slide 3) ── */}
      <Slide
        center
        nav="Angka Nol"
        notes="Sesuai slide 3 material: jika angka tidak lebih besar dari 0 dan tidak lebih kecil dari 0, berarti angka tersebut adalah 0. Sistem menampilkan keterangan 'Angka Nol'."
      >
        <div className="kicker" style={{ marginBottom: 10, textAlign: 'center' }}>
          Titik Netral Bilangan
        </div>
        <h2
          className="headline"
          style={{
            textAlign: 'center',
            marginInline: 'auto',
            marginBottom: 14,
            maxWidth: '22ch',
          }}
        >
          Menentukan <span className="accent-text">Angka Nol.</span>
        </h2>
        <p
          className="lead"
          style={{
            textAlign: 'center',
            marginInline: 'auto',
            marginBottom: 'clamp(24px, 4vh, 36px)',
            maxWidth: '54ch',
            color: PALETTE.lavender,
          }}
        >
          Jika angka <strong>tidak lebih besar dari 0</strong> dan <strong>tidak lebih kecil dari 0</strong>, berarti angka tersebut adalah <strong>0</strong>.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 16,
            width: '100%',
            maxWidth: 920,
            marginInline: 'auto',
            marginBottom: 26,
          }}
        >
          <div
            className="mat"
            style={{
              padding: 22,
              borderRadius: 'var(--radius)',
              background: 'rgba(45, 15, 65, 0.65)',
              border: '1px solid rgba(201, 196, 232, 0.2)',
              textAlign: 'left',
            }}
          >
            <div style={{ color: PALETTE.yellow, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', marginBottom: 6 }}>
              Kondisi Logika
            </div>
            <div style={{ fontSize: 24, fontWeight: 700, color: '#fff', fontFamily: 'var(--font-mono)', marginBottom: 8 }}>
              angka == 0
            </div>
            <p style={{ fontSize: 14, color: PALETTE.lavender, lineHeight: 1.45 }}>
              Kondisi alternatif terakhir ketika evaluasi <code>&gt; 0</code> dan <code>&lt; 0</code> menghasilkan nilai salah (false).
            </p>
          </div>

          <div
            className="mat"
            style={{
              padding: 22,
              borderRadius: 'var(--radius)',
              background: 'rgba(45, 15, 65, 0.65)',
              border: `1px solid ${PALETTE.yellow}`,
              textAlign: 'left',
              boxShadow: '0 12px 30px rgba(229, 204, 33, 0.15)',
            }}
          >
            <div style={{ color: PALETTE.mint, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', marginBottom: 6 }}>
              Sifat Karakteristik
            </div>
            <div style={{ fontSize: 24, fontWeight: 700, color: PALETTE.yellow, marginBottom: 8 }}>
              Nilai Netral
            </div>
            <p style={{ fontSize: 14, color: PALETTE.lavender, lineHeight: 1.45 }}>
              Angka 0 bukan bilangan positif dan bukan bilangan negatif. Nol berperan sebagai batas pemisah kedua himpunan.
            </p>
          </div>

          <div
            className="mat"
            style={{
              padding: 22,
              borderRadius: 'var(--radius)',
              background: 'rgba(45, 15, 65, 0.65)',
              border: '1px solid rgba(201, 196, 232, 0.2)',
              textAlign: 'left',
            }}
          >
            <div style={{ color: PALETTE.periwinkle, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', marginBottom: 6 }}>
              Output Program
            </div>
            <div style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 8 }}>
              "Angka Nol"
            </div>
            <p style={{ fontSize: 14, color: PALETTE.lavender, lineHeight: 1.45 }}>
              Sistem menampilkan string teks <strong>"Angka Nol"</strong> secara eksplisit kepada pengguna sebagai hasil akhir.
            </p>
          </div>
        </div>

        {/* Visual Garis Bilangan */}
        <div
          className="mat"
          style={{
            maxWidth: 920,
            width: '100%',
            marginInline: 'auto',
            padding: '14px 20px',
            borderRadius: 12,
            background: 'rgba(25, 5, 35, 0.75)',
            border: '1px solid rgba(201, 196, 232, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontFamily: 'var(--font-mono)',
            fontSize: 13,
            overflowX: 'auto',
          }}
        >
          <span style={{ color: PALETTE.crimson, fontWeight: 600 }}>← Negatif (&lt; 0) : -3, -2, -1</span>
          <span
            style={{
              padding: '4px 14px',
              borderRadius: 999,
              background: 'rgba(229, 204, 33, 0.2)',
              border: `1px solid ${PALETTE.yellow}`,
              color: PALETTE.yellow,
              fontWeight: 700,
            }}
          >
            [ 0 ] Titik Nol
          </span>
          <span style={{ color: PALETTE.teal, fontWeight: 600 }}>Positif (&gt; 0) : +1, +2, +7 →</span>
        </div>
      </Slide>

      {/* ── Slide 6: Alur Algoritma 1 — Positif, Negatif, Nol (Material Slide 3) ── */}
      <Slide
        center
        nav="Alur Algoritma 1"
        notes="Alur algoritma lengkap dari Slide 3: Masukkan Angka → Periksa Nilai → Tentukan Jenis Bilangan → Tampilkan Hasil. Disertai contoh implementasi kode."
      >
        <div className="kicker" style={{ marginBottom: 8, textAlign: 'center' }}>
          Diagram Alur Algoritma 1
        </div>
        <h2
          className="headline"
          style={{
            textAlign: 'center',
            marginInline: 'auto',
            marginBottom: 20,
            maxWidth: '24ch',
          }}
        >
          Alur Penentuan <span className="accent-text">Positif, Negatif, Nol.</span>
        </h2>

        {/* Steps Bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 12,
            width: '100%',
            maxWidth: 1040,
            marginInline: 'auto',
            marginBottom: 24,
          }}
        >
          {[
            { step: '01', title: 'Masukkan Angka', desc: 'Terima input angka dari pengguna', color: PALETTE.periwinkle },
            { step: '02', title: 'Periksa Nilai', desc: 'Uji kondisi (> 0, < 0, atau == 0)', color: PALETTE.purple },
            { step: '03', title: 'Tentukan Jenis', desc: 'Klasifikasikan Positif, Negatif, atau Nol', color: PALETTE.teal },
            { step: '04', title: 'Tampilkan Hasil', desc: 'Cetak pesan keterangan ke layar', color: PALETTE.lime },
          ].map((item, idx) => (
            <div
              key={idx}
              className="mat"
              style={{
                padding: '16px 18px',
                borderRadius: 14,
                background: 'rgba(40, 12, 58, 0.65)',
                border: '1px solid rgba(201, 196, 232, 0.16)',
                textAlign: 'left',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 26,
                    height: 26,
                    borderRadius: 999,
                    background: 'rgba(255,255,255,0.08)',
                    color: item.color,
                    fontFamily: 'var(--font-mono)',
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  {item.step}
                </span>
                <span style={{ fontWeight: 600, color: '#fff', fontSize: 14 }}>{item.title}</span>
              </div>
              <p style={{ fontSize: 12.5, color: PALETTE.lavender, margin: 0, lineHeight: 1.4 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Code window showing the implementation */}
        <div style={{ width: '100%', maxWidth: 720, marginInline: 'auto' }}>
          <CodeWindow
            title="algoritma_tanda_bilangan.js"
            highlight={[4, 6, 8]}
            code={`// 1. Masukkan Angka
const angka = 7;

// 2. Periksa Nilai & 3. Tentukan Jenis Bilangan
if (angka > 0) {
  // 4. Tampilkan Hasil
  console.log("Bilangan Positif");
} else if (angka < 0) {
  console.log("Bilangan Negatif");
} else {
  console.log("Angka Nol");
}`}
          />
        </div>
      </Slide>

      {/* ── Slide 7: Bagian 2 — Memasukkan Angka untuk Paritas (Material Slide 4) ── */}
      <Split
        flip
        nav="Input Paritas 2"
        notes="Beralih ke bagian 2: menentukan apakah suatu angka termasuk bilangan genap atau ganjil. Contoh materi kedua dimulai dengan memasukkan angka 8."
        kicker="Langkah Awal · Bagian 2"
        title={
          <>
            Pemeriksaan <span className="accent-text">Genap atau Ganjil.</span>
          </>
        }
        body="Pada bagian ini, kita memasukkan sebuah angka bulat. Angka tersebut akan diperiksa untuk menentukan apakah termasuk bilangan genap atau ganjil melalui konsep sisa pembagian."
        media={
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 'clamp(20px, 4vw, 40px)',
              background: 'radial-gradient(circle at 60% 50%, rgba(220, 50, 166, 0.16), transparent 70%)',
            }}
          >
            <div
              className="mat"
              style={{
                width: '100%',
                maxWidth: 440,
                borderRadius: 'var(--radius)',
                padding: 'clamp(22px, 3vw, 32px)',
                background: 'rgba(50, 15, 68, 0.75)',
                border: `1px solid ${PALETTE.magenta}`,
                boxShadow: '0 20px 60px rgba(10, 2, 16, 0.8)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                <span className="chip" style={{ background: 'rgba(220, 50, 166, 0.15)', borderColor: PALETTE.magenta, color: PALETTE.magenta }}>
                  Input Data Paritas
                </span>
                <span style={{ fontSize: 12, color: PALETTE.lavender, fontFamily: 'var(--font-mono)' }}>
                  Contoh Materi #2
                </span>
              </div>

              <div
                style={{
                  padding: '16px 20px',
                  borderRadius: 12,
                  background: 'rgba(25, 5, 35, 0.85)',
                  border: '1px solid rgba(201, 196, 232, 0.2)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 16,
                  color: '#fff',
                  marginBottom: 18,
                }}
              >
                <span style={{ color: PALETTE.lavender }}>&gt; Masukkan angka: </span>
                <span style={{ color: PALETTE.teal, fontWeight: 700, fontSize: 22 }}>8</span>
              </div>

              <div style={{ fontSize: 13, color: PALETTE.lavender, marginBottom: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Kunci Operasi Matematika:
              </div>

              <div
                style={{
                  padding: 14,
                  borderRadius: 10,
                  background: 'rgba(172, 76, 255, 0.12)',
                  border: '1px solid rgba(172, 76, 255, 0.25)',
                  marginBottom: 14,
                }}
              >
                <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginBottom: 4 }}>
                  Operasi Modulo 2 (Sisa Pembagian)
                </div>
                <div style={{ fontSize: 12.5, color: PALETTE.lavender, lineHeight: 1.4 }}>
                  Angka dibagi dengan bilangan <strong>2</strong>, kemudian diperiksa apakah terdapat sisa pembagian atau tidak.
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                <div style={{ padding: '8px 10px', borderRadius: 8, background: 'rgba(161, 223, 42, 0.12)', border: '1px solid rgba(161, 223, 42, 0.3)', textAlign: 'center' }}>
                  <div style={{ color: PALETTE.lime, fontWeight: 700, fontSize: 13 }}>Sisa 0</div>
                  <div style={{ color: PALETTE.lavender, fontSize: 11 }}>Genap</div>
                </div>
                <div style={{ padding: '8px 10px', borderRadius: 8, background: 'rgba(220, 50, 166, 0.12)', border: '1px solid rgba(220, 50, 166, 0.3)', textAlign: 'center' }}>
                  <div style={{ color: PALETTE.magenta, fontWeight: 700, fontSize: 13 }}>Sisa ≠ 0</div>
                  <div style={{ color: PALETTE.lavender, fontSize: 11 }}>Ganjil</div>
                </div>
              </div>
            </div>
          </div>
        }
      />

      {/* ── Slide 8: Memeriksa Bilangan Genap (Material Slide 5) ── */}
      <Slide
        center
        nav="Bilangan Genap"
        notes="Sesuai slide 5 material: angka dibagi dengan 2. Jika hasil pembagian memiliki sisa 0, maka angka tersebut merupakan bilangan genap. Contoh: 8 ÷ 2 sisa 0, 12 ÷ 2 sisa 0."
      >
        <div className="kicker" style={{ marginBottom: 10, textAlign: 'center' }}>
          Mengecek Sisa Pembagian
        </div>
        <h2
          className="headline"
          style={{
            textAlign: 'center',
            marginInline: 'auto',
            marginBottom: 14,
            maxWidth: '22ch',
          }}
        >
          Memeriksa <span className="accent-text">Bilangan Genap.</span>
        </h2>
        <p
          className="lead"
          style={{
            textAlign: 'center',
            marginInline: 'auto',
            marginBottom: 'clamp(24px, 4vh, 36px)',
            maxWidth: '56ch',
            color: PALETTE.lavender,
          }}
        >
          Angka dibagi dengan <strong>2</strong>. Jika hasil pembagian memiliki <strong>sisa 0</strong>, maka angka tersebut merupakan <strong>bilangan genap</strong>.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 18,
            width: '100%',
            maxWidth: 960,
            marginInline: 'auto',
          }}
        >
          {/* Contoh 1: 8 */}
          <div
            className="mat"
            style={{
              padding: 24,
              borderRadius: 'var(--radius)',
              background: 'rgba(38, 14, 60, 0.65)',
              border: `1px solid ${PALETTE.lime}`,
              textAlign: 'left',
              boxShadow: '0 16px 40px rgba(161, 223, 42, 0.12)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <span className="chip" style={{ background: 'rgba(161, 223, 42, 0.15)', borderColor: PALETTE.lime, color: PALETTE.lime }}>
                Contoh 1
              </span>
              <span style={{ color: PALETTE.mint, fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                8 % 2 == 0
              </span>
            </div>
            <div style={{ fontSize: 28, fontWeight: 700, color: '#fff', fontFamily: 'var(--font-mono)', marginBottom: 8 }}>
              8 ÷ 2 = 4 <span style={{ color: PALETTE.lime }}>(sisa 0)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
              <span style={{ fontSize: 18, fontWeight: 700, color: PALETTE.lime }}>→ Bilangan Genap</span>
            </div>
            <p style={{ fontSize: 13.5, color: PALETTE.lavender, lineHeight: 1.45 }}>
              Angka 8 dapat dibagi menjadi 4 pasang utuh tanpa ada satu pun nilai yang tersisa.
            </p>
          </div>

          {/* Contoh 2: 12 */}
          <div
            className="mat"
            style={{
              padding: 24,
              borderRadius: 'var(--radius)',
              background: 'rgba(38, 14, 60, 0.65)',
              border: `1px solid ${PALETTE.lime}`,
              textAlign: 'left',
              boxShadow: '0 16px 40px rgba(161, 223, 42, 0.12)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <span className="chip" style={{ background: 'rgba(161, 223, 42, 0.15)', borderColor: PALETTE.lime, color: PALETTE.lime }}>
                Contoh 2
              </span>
              <span style={{ color: PALETTE.mint, fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                12 % 2 == 0
              </span>
            </div>
            <div style={{ fontSize: 28, fontWeight: 700, color: '#fff', fontFamily: 'var(--font-mono)', marginBottom: 8 }}>
              12 ÷ 2 = 6 <span style={{ color: PALETTE.lime }}>(sisa 0)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
              <span style={{ fontSize: 18, fontWeight: 700, color: PALETTE.lime }}>→ Bilangan Genap</span>
            </div>
            <p style={{ fontSize: 13.5, color: PALETTE.lavender, lineHeight: 1.45 }}>
              Angka 12 dapat dibagi menjadi 6 pasang utuh tanpa menyisakan bilangan apa pun.
            </p>
          </div>
        </div>

        {/* Rumus box */}
        <div
          style={{
            marginTop: 20,
            maxWidth: 960,
            width: '100%',
            marginInline: 'auto',
            padding: '12px 20px',
            borderRadius: 12,
            background: 'rgba(65, 23, 130, 0.35)',
            border: '1px solid rgba(201, 196, 232, 0.18)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            fontFamily: 'var(--font-mono)',
            fontSize: 14,
            color: PALETTE.lavender,
          }}
        >
          <span>Kriteria Komputer:</span>
          <code style={{ color: PALETTE.lime, fontWeight: 700, background: 'rgba(0,0,0,0.3)', padding: '3px 8px', borderRadius: 6 }}>
            angka % 2 === 0
          </code>
          <span>→ Tampilkan: <strong style={{ color: '#fff' }}>"Bilangan Genap"</strong></span>
        </div>
      </Slide>

      {/* ── Slide 9: Menentukan Bilangan Ganjil (Material Slide 6) ── */}
      <Slide
        center
        nav="Bilangan Ganjil"
        notes="Sesuai slide 6 material: jika sisa pembagian bukan 0 (menghasilkan sisa 1), maka angka tersebut merupakan bilangan ganjil. Contoh: 13 ÷ 2 sisa 1."
      >
        <div className="kicker" style={{ marginBottom: 10, textAlign: 'center' }}>
          Jika Sisa Pembagian Bukan 0
        </div>
        <h2
          className="headline"
          style={{
            textAlign: 'center',
            marginInline: 'auto',
            marginBottom: 14,
            maxWidth: '22ch',
          }}
        >
          Menentukan <span className="accent-text">Bilangan Ganjil.</span>
        </h2>
        <p
          className="lead"
          style={{
            textAlign: 'center',
            marginInline: 'auto',
            marginBottom: 'clamp(24px, 4vh, 36px)',
            maxWidth: '56ch',
            color: PALETTE.lavender,
          }}
        >
          Jika angka dibagi 2 dan menghasilkan <strong>sisa selain 0 (sisa 1)</strong>, maka angka tersebut merupakan <strong>bilangan ganjil</strong>.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 18,
            width: '100%',
            maxWidth: 960,
            marginInline: 'auto',
          }}
        >
          {/* Contoh 1: 13 */}
          <div
            className="mat"
            style={{
              padding: 24,
              borderRadius: 'var(--radius)',
              background: 'rgba(38, 14, 60, 0.65)',
              border: `1px solid ${PALETTE.magenta}`,
              textAlign: 'left',
              boxShadow: '0 16px 40px rgba(220, 50, 166, 0.12)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <span className="chip" style={{ background: 'rgba(220, 50, 166, 0.15)', borderColor: PALETTE.magenta, color: PALETTE.magenta }}>
                Contoh Utama
              </span>
              <span style={{ color: PALETTE.orchid, fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                13 % 2 == 1
              </span>
            </div>
            <div style={{ fontSize: 28, fontWeight: 700, color: '#fff', fontFamily: 'var(--font-mono)', marginBottom: 8 }}>
              13 ÷ 2 = 6 <span style={{ color: PALETTE.magenta }}>(sisa 1)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
              <span style={{ fontSize: 18, fontWeight: 700, color: PALETTE.magenta }}>→ Bilangan Ganjil</span>
            </div>
            <p style={{ fontSize: 13.5, color: PALETTE.lavender, lineHeight: 1.45 }}>
              Angka 13 menghasilkan 6 pasang (12) dengan 1 angka tersisa yang tidak memiliki pasangan.
            </p>
          </div>

          {/* Contoh 2: 7 */}
          <div
            className="mat"
            style={{
              padding: 24,
              borderRadius: 'var(--radius)',
              background: 'rgba(38, 14, 60, 0.65)',
              border: `1px solid ${PALETTE.magenta}`,
              textAlign: 'left',
              boxShadow: '0 16px 40px rgba(220, 50, 166, 0.12)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <span className="chip" style={{ background: 'rgba(220, 50, 166, 0.15)', borderColor: PALETTE.magenta, color: PALETTE.magenta }}>
                Contoh Tambahan
              </span>
              <span style={{ color: PALETTE.orchid, fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
                7 % 2 == 1
              </span>
            </div>
            <div style={{ fontSize: 28, fontWeight: 700, color: '#fff', fontFamily: 'var(--font-mono)', marginBottom: 8 }}>
              7 ÷ 2 = 3 <span style={{ color: PALETTE.magenta }}>(sisa 1)</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
              <span style={{ fontSize: 18, fontWeight: 700, color: PALETTE.magenta }}>→ Bilangan Ganjil</span>
            </div>
            <p style={{ fontSize: 13.5, color: PALETTE.lavender, lineHeight: 1.45 }}>
              Angka 7 dari Slide 1 juga menghasilkan 3 pasang (6) dan menyisakan 1, membuktikan 7 adalah ganjil.
            </p>
          </div>
        </div>

        {/* Rumus box */}
        <div
          style={{
            marginTop: 20,
            maxWidth: 960,
            width: '100%',
            marginInline: 'auto',
            padding: '12px 20px',
            borderRadius: 12,
            background: 'rgba(65, 23, 130, 0.35)',
            border: '1px solid rgba(201, 196, 232, 0.18)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            fontFamily: 'var(--font-mono)',
            fontSize: 14,
            color: PALETTE.lavender,
          }}
        >
          <span>Kriteria Komputer:</span>
          <code style={{ color: PALETTE.magenta, fontWeight: 700, background: 'rgba(0,0,0,0.3)', padding: '3px 8px', borderRadius: 6 }}>
            angka % 2 !== 0
          </code>
          <span>→ Tampilkan: <strong style={{ color: '#fff' }}>"Bilangan Ganjil"</strong></span>
        </div>
      </Slide>

      {/* ── Slide 10: Alur Algoritma 2 — Genap & Ganjil (Material Slide 6) ── */}
      <Slide
        center
        nav="Alur Algoritma 2"
        notes="Sesuai slide 6 material: Alur Algoritma: Masukkan Angka → Bagi dengan 2 → Periksa Sisa → Tentukan Genap/Ganjil → Tampilkan Hasil."
      >
        <div className="kicker" style={{ marginBottom: 8, textAlign: 'center' }}>
          Diagram Alur Algoritma 2
        </div>
        <h2
          className="headline"
          style={{
            textAlign: 'center',
            marginInline: 'auto',
            marginBottom: 20,
            maxWidth: '24ch',
          }}
        >
          Alur Penentuan <span className="accent-text">Genap & Ganjil.</span>
        </h2>

        {/* 5-Step Pipeline */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
            gap: 10,
            width: '100%',
            maxWidth: 1040,
            marginInline: 'auto',
            marginBottom: 24,
          }}
        >
          {[
            { step: '01', title: 'Masukkan Angka', desc: 'Input nilai bilangan bulat', color: PALETTE.periwinkle },
            { step: '02', title: 'Bagi dengan 2', desc: 'Hitung operasi sisa pembagian', color: PALETTE.purple },
            { step: '03', title: 'Periksa Sisa', desc: 'Cek apakah sisa bagi == 0', color: PALETTE.yellow },
            { step: '04', title: 'Tentukan Status', desc: 'Tetapkan Genap atau Ganjil', color: PALETTE.teal },
            { step: '05', title: 'Tampilkan Hasil', desc: 'Cetak hasil keterangan', color: PALETTE.lime },
          ].map((item, idx) => (
            <div
              key={idx}
              className="mat"
              style={{
                padding: '14px 14px',
                borderRadius: 14,
                background: 'rgba(40, 12, 58, 0.65)',
                border: '1px solid rgba(201, 196, 232, 0.16)',
                textAlign: 'left',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 24,
                    height: 24,
                    borderRadius: 999,
                    background: 'rgba(255,255,255,0.08)',
                    color: item.color,
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    fontWeight: 700,
                  }}
                >
                  {item.step}
                </span>
                <span style={{ fontWeight: 600, color: '#fff', fontSize: 13 }}>{item.title}</span>
              </div>
              <p style={{ fontSize: 11.5, color: PALETTE.lavender, margin: 0, lineHeight: 1.35 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Code window showing modulo implementation */}
        <div style={{ width: '100%', maxWidth: 720, marginInline: 'auto' }}>
          <CodeWindow
            title="algoritma_paritas.js"
            highlight={[5, 7]}
            code={`// 1. Masukkan Angka
const angka = 8;

// 2. Bagi dengan 2 & 3. Periksa Sisa
if (angka % 2 === 0) {
  // 4. Tentukan Genap & 5. Tampilkan Hasil
  console.log("Bilangan Genap");
} else {
  // 4. Tentukan Ganjil & 5. Tampilkan Hasil
  console.log("Bilangan Ganjil");
}`}
          />
        </div>
      </Slide>

      {/* ── Slide 11: Rangkuman Tabel & Simulasi Interaktif ── */}
      <Slide
        center
        nav="Matriks & Simulasi"
        notes="Matriks evaluasi merangkum seluruh contoh dari materi (7, -3, 0, 8, 12, 13). Dilengkapi widget simulasi interaktif di bawahnya untuk uji mandiri."
      >
        <div className="kicker" style={{ marginBottom: 8, textAlign: 'center' }}>
          Matriks Kasus & Interaktivitas
        </div>
        <h2
          className="headline"
          style={{
            textAlign: 'center',
            marginInline: 'auto',
            marginBottom: 16,
            maxWidth: '24ch',
          }}
        >
          Rangkuman Contoh <span className="accent-text">& Simulasi Uji.</span>
        </h2>

        {/* Real Data Table from material */}
        <div style={{ width: '100%', maxWidth: 840, marginInline: 'auto', marginBottom: 20 }}>
          <Table
            caption="Sumber: Modul materi.md — Studi Kasus Pemrograman"
            highlightCol={3}
            columns={[
              'Angka',
              { label: 'Uji Tanda (vs 0)', align: 'left' },
              { label: 'Uji Modulo (÷ 2)', align: 'left' },
              { label: 'Status Lengkap', align: 'left' },
            ]}
            rows={[
              ['7', '7 > 0 (Positif)', '7 % 2 = 1 (Sisa 1)', 'Positif & Ganjil'],
              ['8', '8 > 0 (Positif)', '8 % 2 = 0 (Sisa 0)', 'Positif & Genap'],
              ['-3', '-3 < 0 (Negatif)', 'Sisa ≠ 0 (Ganjil)', 'Negatif & Ganjil'],
              ['12', '12 > 0 (Positif)', '12 % 2 = 0 (Sisa 0)', 'Positif & Genap'],
              ['13', '13 > 0 (Positif)', '13 % 2 = 1 (Sisa 1)', 'Positif & Ganjil'],
              ['0', '0 == 0 (Nol)', '0 % 2 = 0 (Sisa 0)', 'Angka Nol & Genap'],
            ]}
          />
        </div>

        {/* Live Interactive Tester */}
        <InteractiveClassifier />
      </Slide>

      {/* ── Slide 12: Kesimpulan ── */}
      <Slide
        center
        nav="Kesimpulan"
        notes="Sebagai penutup, tekankan dua pilar utama dalam pemrosesan data numerik: perbandingan relasional untuk tanda, dan aritmatika modulo untuk paritas."
      >
        <div className="kicker" style={{ marginBottom: 10, textAlign: 'center' }}>
          Kesimpulan Pembelajaran
        </div>
        <h2
          className="headline"
          style={{
            textAlign: 'center',
            marginInline: 'auto',
            marginBottom: 14,
            maxWidth: '22ch',
          }}
        >
          Dua Pilar Utama <span className="accent-text">Pengambilan Keputusan.</span>
        </h2>
        <p
          className="lead"
          style={{
            textAlign: 'center',
            marginInline: 'auto',
            marginBottom: 'clamp(24px, 4vh, 38px)',
            maxWidth: '56ch',
            color: PALETTE.lavender,
          }}
        >
          Struktur percabangan memungkinkan komputer mengevaluasi data secara logis, konsisten, dan akurat.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))',
            gap: 'clamp(16px, 2.5vw, 28px)',
            width: '100%',
            maxWidth: 960,
            marginInline: 'auto',
            marginBottom: 28,
          }}
        >
          {/* Pilar 1 */}
          <div
            className="mat"
            style={{
              padding: 'clamp(22px, 2.5vw, 32px)',
              borderRadius: 'var(--radius)',
              background: 'rgba(38, 14, 60, 0.65)',
              border: `1px solid ${PALETTE.teal}`,
              textAlign: 'left',
              boxShadow: '0 16px 40px rgba(12, 168, 164, 0.12)',
            }}
          >
            <div className="chip" style={{ background: 'rgba(12, 168, 164, 0.2)', borderColor: PALETTE.teal, color: PALETTE.teal, marginBottom: 12 }}>
              Pilar 1 · Polaritas Nilai
            </div>
            <h3 style={{ fontSize: 22, color: '#fff', marginBottom: 10 }}>
              Operator Relasional
            </h3>
            <p style={{ fontSize: 15, color: PALETTE.lavender, lineHeight: 1.5, marginBottom: 14 }}>
              Menggunakan pembanding <code>&gt; 0</code>, <code>&lt; 0</code>, dan <code>== 0</code> untuk membagi seluruh spektrum angka riil ke dalam kelompok <strong>Positif</strong>, <strong>Negatif</strong>, atau <strong>Nol</strong>.
            </p>
            <div style={{ fontSize: 13, color: PALETTE.mint, fontFamily: 'var(--font-mono)' }}>
              Kaidah: Pembandingan terhadap titik nol.
            </div>
          </div>

          {/* Pilar 2 */}
          <div
            className="mat"
            style={{
              padding: 'clamp(22px, 2.5vw, 32px)',
              borderRadius: 'var(--radius)',
              background: 'rgba(38, 14, 60, 0.65)',
              border: `1px solid ${PALETTE.magenta}`,
              textAlign: 'left',
              boxShadow: '0 16px 40px rgba(220, 50, 166, 0.12)',
            }}
          >
            <div className="chip" style={{ background: 'rgba(220, 50, 166, 0.2)', borderColor: PALETTE.magenta, color: PALETTE.magenta, marginBottom: 12 }}>
              Pilar 2 · Paritas Bilangan
            </div>
            <h3 style={{ fontSize: 22, color: '#fff', marginBottom: 10 }}>
              Aritmatika Modulo
            </h3>
            <p style={{ fontSize: 15, color: PALETTE.lavender, lineHeight: 1.5, marginBottom: 14 }}>
              Menggunakan operator modulus <code>% 2</code> untuk mendeteksi sisa pembagian: menghasilkan sisa 0 untuk <strong>Bilangan Genap</strong> dan sisa 1 untuk <strong>Bilangan Ganjil</strong>.
            </p>
            <div style={{ fontSize: 13, color: PALETTE.orchid, fontFamily: 'var(--font-mono)' }}>
              Kaidah: Pembagian kelipatan dua.
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <span
            style={{
              display: 'inline-block',
              padding: '8px 20px',
              borderRadius: 999,
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(201, 196, 232, 0.2)',
              fontSize: 13,
              color: PALETTE.lavender,
              letterSpacing: '0.04em',
            }}
          >
            Tekan <kbd style={{ padding: '2px 6px', background: 'rgba(0,0,0,0.4)', borderRadius: 4, color: '#fff' }}>P</kbd> untuk Presenter View &middot; <kbd style={{ padding: '2px 6px', background: 'rgba(0,0,0,0.4)', borderRadius: 4, color: '#fff' }}>G</kbd> untuk Grid View
          </span>
        </div>
      </Slide>
    </Deck>
  );
}
