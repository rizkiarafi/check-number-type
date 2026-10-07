import { useState } from 'react';
import Deck from './deck/Deck';
import Slide from './deck/Slide';
import Build from './deck/Build';
import Reveal from './deck/Reveal';
import Cover from './components/Cover';
import Agenda from './components/Agenda';
import Split from './components/Split';
import Table from './components/Table';
import CodeWindow from './components/CodeWindow';
import DownloadPptxButton from './components/DownloadPptxButton';

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
    if (n > 0) return { label: 'Bilangan Positif', color: PALETTE.teal, bg: 'rgba(12, 168, 164, 0.15)', border: PALETTE.teal, cond: 'Angkanya lebih besar dari 0' };
    if (n < 0) return { label: 'Bilangan Negatif', color: PALETTE.crimson, bg: 'rgba(201, 50, 103, 0.15)', border: PALETTE.crimson, cond: 'Angkanya lebih kecil dari 0' };
    return { label: 'Angka Nol', color: PALETTE.yellow, bg: 'rgba(229, 204, 33, 0.15)', border: PALETTE.yellow, cond: 'Pas di angka 0 (titik netral)' };
  };

  const getParity = (n: number) => {
    const rem = Math.abs(n) % 2;
    if (rem === 0) return { label: 'Bilangan Genap', color: PALETTE.lime, bg: 'rgba(161, 223, 42, 0.15)', border: PALETTE.lime, remText: `${n} dibagi 2 → sisanya 0 (habis dibagi)` };
    return { label: 'Bilangan Ganjil', color: PALETTE.magenta, bg: 'rgba(220, 50, 166, 0.15)', border: PALETTE.magenta, remText: `${n} dibagi 2 → nyisa ${rem}` };
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
            Coba Masukin Angka:
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
            Tanda Angka
          </div>
          <div style={{ fontSize: 20, fontWeight: 700, color: sign.color }}>
            {sign.label}
          </div>
          <div style={{ fontSize: 13, color: PALETTE.lavender, marginTop: 4 }}>
            Alasan: {sign.cond}
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
            Genap atau Ganjil?
          </div>
          <div style={{ fontSize: 20, fontWeight: 700, color: parity.color }}>
            {parity.label}
          </div>
          <div style={{ fontSize: 13, color: PALETTE.lavender, marginTop: 4 }}>
            Hitungan: {parity.remText}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Deck>
      {/* ── Slide 1: Anggota Kelompok 7 Algoritma ── */}
      <Slide
        center
        nav="Kelompok 7"
        notes="Selamat datang. Presentasi ini disusun oleh Kelompok 7 Algoritma: 1. Daniel Marselano Sukarsah (50426218), 2. Muhamad Fharel Baehaqi (50426536), dan 3. Rizki Arafi Zaidan (50426848)."
      >
        <Reveal delay={0.05}>
          <div className="kicker" style={{ marginBottom: 10, textAlign: 'center' }}>
            Presentasi Kelompok
          </div>
          <h1
            className="headline"
            style={{
              textAlign: 'center',
              marginInline: 'auto',
              marginBottom: 12,
              maxWidth: '24ch',
            }}
          >
            Kelompok 7 <span className="accent-text">Algoritma</span>
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p
            className="lead"
            style={{
              textAlign: 'center',
              marginInline: 'auto',
              marginBottom: 'clamp(20px, 3vh, 32px)',
              maxWidth: '52ch',
              color: PALETTE.lavender,
            }}
          >
            Daftar Anggota Tim &amp; Nomor Pokok Mahasiswa (NPM)
          </p>
        </Reveal>

        <Reveal delay={0.2} y={20}>
          <div
            className="mat"
            style={{
              maxWidth: 720,
              width: '100%',
              marginInline: 'auto',
              padding: 'clamp(18px, 2.5vw, 26px)',
              borderRadius: 'var(--radius)',
              background: 'rgba(40, 12, 55, 0.75)',
              border: '1px solid rgba(201, 196, 232, 0.22)',
              boxShadow: '0 20px 60px rgba(10, 2, 16, 0.8)',
            }}
          >
            {/* Header Roster */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '50px 1fr 180px',
                alignItems: 'center',
                padding: '10px 16px',
                borderRadius: 8,
                background: 'rgba(65, 23, 130, 0.4)',
                borderBottom: '1px solid rgba(201, 196, 232, 0.15)',
                marginBottom: 10,
                fontSize: 12,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: PALETTE.orchid,
              }}
            >
              <span style={{ textAlign: 'left', justifySelf: 'start' }}>NO</span>
              <span>Nama Lengkap</span>
              <span style={{ textAlign: 'right' }}>NPM</span>
            </div>

            {/* List Members */}
            {[
              { no: '01', name: 'Daniel Marselano Sukarsah', npm: '50426218', color: PALETTE.teal },
              { no: '02', name: 'Muhamad Fharel Baehaqi', npm: '50426536', color: PALETTE.purple },
              { no: '03', name: 'Rizki Arafi Zaidan', npm: '50426848', color: PALETTE.lime },
            ].map((member, idx) => (
              <div
                key={idx}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '50px 1fr 180px',
                  alignItems: 'center',
                  padding: '14px 16px',
                  borderRadius: 10,
                  marginBottom: idx < 2 ? 8 : 0,
                  background: 'rgba(25, 5, 35, 0.6)',
                  border: '1px solid rgba(201, 196, 232, 0.12)',
                  transition: 'all 0.2s ease',
                }}
              >
                <span
                  style={{
                    justifySelf: 'start',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 32,
                    height: 32,
                    borderRadius: 999,
                    background: 'rgba(255,255,255,0.08)',
                    color: member.color,
                    fontFamily: 'var(--font-mono)',
                    fontSize: 13,
                    fontWeight: 700,
                  }}
                >
                  {member.no}
                </span>

                <span style={{ fontSize: 16, fontWeight: 600, color: '#fff' }}>
                  {member.name}
                </span>

                <span
                  style={{
                    textAlign: 'right',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 15,
                    fontWeight: 700,
                    color: member.color,
                    letterSpacing: '0.05em',
                  }}
                >
                  {member.npm}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Slide>

      {/* ── Slide 2: Cover ── */}
      <Cover
        nav="Cover"
        notes="Halo semuanya! Di presentasi kali ini, kita bakal belajar santai gimana cara komputer mengenali angka: apakah positif, negatif, nol, atau genap dan ganjil."
        kicker="Belajar Logika Pemrograman"
        title={
          <>
            Cara Kita <span className="accent-text">Membaca Angka.</span>
          </>
        }
        subtitle="Gimana caranya kita tahu angka itu positif, negatif, nol, genap, atau ganjil?"
        foot="Panduan Praktis Logika Klasifikasi Bilangan"
      />

      {/* ── Slide 2: Agenda ── */}
      <Agenda
        nav="Agenda"
        notes="Ini dia alur obrolan kita hari ini. Kita mulai dari masukin angka, ngecek tandanya, sampai trik gampang bedain genap dan ganjil."
        kicker="Rencana Kita Hari Ini"
        title="Apa aja yang bakal kita bahas?"
        items={[
          { title: 'Pikirkan Angka Apa yang Mau Kita Cek', hint: 'Langkah awal' },
          { title: 'Ngecek Positif vs Negatif', hint: 'Bandingin sama 0' },
          { title: 'Kapan Angka Dibilang Nol?', hint: 'Titik netral' },
          { title: 'Gantian Cek Genap vs Ganjil', hint: 'Masukin angka baru' },
          { title: 'Kenapa Bisa Genap atau Ganjil?', hint: 'Rahasia sisa bagi' },
          { title: 'Rangkuman & Cobain Sendiri', hint: 'Tabel & uji coba' },
        ]}
      />

      {/* ── Slide 3: Langkah Awal — Memasukkan Angka (Material Slide 1) ── */}
      <Split
        nav="Input Angka 1"
        notes="Langkah paling awal adalah minta pengguna buat ketik angka. Misalnya di contoh materi ini, kita coba masukin angka 7."
        kicker="Langkah Pertama · Bagian 1"
        title={
          <>
            Pertama, Masukin <span className="accent-text">Angkanya Dulu.</span>
          </>
        }
        body="Semuanya dimulai saat kita masukin satu angka. Dari angka ini, kita bakal langsung mikir apakah nilainya positif, negatif, atau malah pas nol?"
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
                  Layar Program
                </span>
                <span style={{ fontSize: 12, color: PALETTE.lavender, fontFamily: 'var(--font-mono)' }}>
                  Contoh Soal #1
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
                Kemungkinan Jawabannya:
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', borderRadius: 8, background: 'rgba(12, 168, 164, 0.12)', border: '1px solid rgba(12, 168, 164, 0.3)' }}>
                  <span style={{ color: PALETTE.teal, fontWeight: 700, fontSize: 15 }}>1. Positif</span>
                  <span style={{ color: PALETTE.lavender, fontSize: 12, marginLeft: 'auto' }}>kalau lebih dari 0</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', borderRadius: 8, background: 'rgba(201, 50, 103, 0.12)', border: '1px solid rgba(201, 50, 103, 0.3)' }}>
                  <span style={{ color: PALETTE.crimson, fontWeight: 700, fontSize: 15 }}>2. Negatif</span>
                  <span style={{ color: PALETTE.lavender, fontSize: 12, marginLeft: 'auto' }}>kalau kurang dari 0</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', borderRadius: 8, background: 'rgba(229, 204, 33, 0.12)', border: '1px solid rgba(229, 204, 33, 0.3)' }}>
                  <span style={{ color: PALETTE.yellow, fontWeight: 700, fontSize: 15 }}>3. Angka Nol</span>
                  <span style={{ color: PALETTE.lavender, fontSize: 12, marginLeft: 'auto' }}>kalau pas di angka 0</span>
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
        notes="Tekan tombol panah atau spasi buat nampilin kartu Positif dulu, terus tekan lagi buat nampilin kartu Negatif."
      >
        <div className="kicker" style={{ marginBottom: 10, textAlign: 'center' }}>
          Cek Nilai Angkanya
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
          Positif atau <span className="accent-text">Negatif, nih?</span>
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
          Kita tinggal ngebandingin angkanya sama angka 0. Caranya simpel banget!
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
          <Build at={1} style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              className="mat"
              style={{
                flex: 1,
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
                Kalau angkanya <strong>lebih besar dari 0</strong>, berarti dia bilangan positif. Di garis bilangan, posisinya ada di sebelah kanan nol.
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
                <span style={{ color: '#fff' }}>7 → <strong>Positif</strong></span>
                <span style={{ marginLeft: 'auto', color: PALETTE.teal, fontSize: 12 }}>✓ Cocok (7 &gt; 0)</span>
              </div>
            </div>
          </Build>

          {/* Card Negatif */}
          <Build at={2} style={{ display: 'flex', flexDirection: 'column' }}>
            <div
              className="mat"
              style={{
                flex: 1,
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
                Kalau angkanya <strong>lebih kecil dari 0</strong> (ada tanda minusnya), berarti dia negatif. Posisinya ada di sebelah kiri nol.
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
                <span style={{ color: '#fff' }}>-3 → <strong>Negatif</strong></span>
                <span style={{ marginLeft: 'auto', color: PALETTE.crimson, fontSize: 12 }}>✓ Cocok (-3 &lt; 0)</span>
              </div>
            </div>
          </Build>
        </div>
      </Slide>

      {/* ── Slide 5: Menentukan Angka Nol (Material Slide 3) ── */}
      <Slide
        center
        nav="Angka Nol"
        notes="Sesuai slide 3: kalau nggak positif dan nggak negatif, berarti itu angka nol. Komputer bakal nampilin tulisan 'Angka Nol'."
      >
        <Reveal delay={0.06}>
          <div className="kicker" style={{ marginBottom: 10, textAlign: 'center' }}>
            Titik Tengah yang Netral
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
            Kalau Bukan Keduanya, <span className="accent-text">Pasti Nol!</span>
          </h2>
        </Reveal>

        <Reveal delay={0.14}>
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
            Kalau angkanya <strong>nggak lebih besar dari 0</strong> dan juga <strong>nggak lebih kecil dari 0</strong>, ya udah pasti angkanya adalah <strong>0</strong>.
          </p>
        </Reveal>

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
          {/* Card 1: Delay 0.24s */}
          <Reveal delay={0.24} y={24} style={{ display: 'flex' }}>
            <div
              className="mat"
              style={{
                flex: 1,
                padding: 22,
                borderRadius: 'var(--radius)',
                background: 'rgba(45, 15, 65, 0.65)',
                border: '1px solid rgba(201, 196, 232, 0.2)',
                textAlign: 'left',
              }}
            >
              <div style={{ color: PALETTE.yellow, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', marginBottom: 6 }}>
                Kondisi
              </div>
              <div style={{ fontSize: 24, fontWeight: 700, color: '#fff', fontFamily: 'var(--font-mono)', marginBottom: 8 }}>
                Bukan Keduanya
              </div>
              <p style={{ fontSize: 14, color: PALETTE.lavender, lineHeight: 1.45 }}>
                Pilihan terakhir saat dicek <code>&gt; 0</code> bukan, dan <code>&lt; 0</code> juga bukan.
              </p>
            </div>
          </Reveal>

          {/* Card 2: Delay 0.42s */}
          <Reveal delay={0.42} y={24} style={{ display: 'flex' }}>
            <div
              className="mat"
              style={{
                flex: 1,
                padding: 22,
                borderRadius: 'var(--radius)',
                background: 'rgba(45, 15, 65, 0.65)',
                border: `1px solid ${PALETTE.yellow}`,
                textAlign: 'left',
                boxShadow: '0 12px 30px rgba(229, 204, 33, 0.15)',
              }}
            >
              <div style={{ color: PALETTE.mint, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', marginBottom: 6 }}>
                Sifat Angkanya
              </div>
              <div style={{ fontSize: 24, fontWeight: 700, color: PALETTE.yellow, marginBottom: 8 }}>
                Serba Netral
              </div>
              <p style={{ fontSize: 14, color: PALETTE.lavender, lineHeight: 1.45 }}>
                Nol itu unik! Dia bukan positif dan bukan negatif. Nol berdiri tepat di perbatasan tengah.
              </p>
            </div>
          </Reveal>

          {/* Card 3: Delay 0.60s */}
          <Reveal delay={0.60} y={24} style={{ display: 'flex' }}>
            <div
              className="mat"
              style={{
                flex: 1,
                padding: 22,
                borderRadius: 'var(--radius)',
                background: 'rgba(45, 15, 65, 0.65)',
                border: '1px solid rgba(201, 196, 232, 0.2)',
                textAlign: 'left',
              }}
            >
              <div style={{ color: PALETTE.periwinkle, fontWeight: 700, fontSize: 13, textTransform: 'uppercase', marginBottom: 6 }}>
                Hasil
              </div>
              <div style={{ fontSize: 22, fontWeight: 700, color: '#fff', marginBottom: 8 }}>
                "Angka Nol"
              </div>
              <p style={{ fontSize: 14, color: PALETTE.lavender, lineHeight: 1.45 }}>
                Kita bisa langsung simpulkan bahwa angka tersebut <strong>"Angka Nol"</strong>.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Visual Garis Bilangan */}
        <Reveal delay={0.78} y={18}>
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
            <span style={{ color: PALETTE.crimson, fontWeight: 600 }}>← Sebelah Kiri : -3, -2, -1 (Negatif)</span>
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
              [ 0 ] Pas di Tengah
            </span>
            <span style={{ color: PALETTE.teal, fontWeight: 600 }}>Sebelah Kanan : +1, +2, +7 (Positif) →</span>
          </div>
        </Reveal>
      </Slide>

      {/* ── Slide 6: Alur Algoritma 1 — Positif, Negatif, Nol (Material Slide 3) ── */}
      <Slide
        center
        nav="Alur Algoritma 1"
        notes="Ini dia urutan langkahnya dari awal sampai akhir: Masukkan Angka → Periksa Nilai → Tentukan Jenis Bilangan → Tampilkan Hasil. Gampang dipahami, kan?"
      >
        <div className="kicker" style={{ marginBottom: 8, textAlign: 'center' }}>
          Langkah demi Langkah
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
          Alur Kerja: <span className="accent-text">Positif, Negatif, Nol.</span>
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
            { step: '01', title: 'Masukin Angka', desc: 'Minta angka dari pengguna', color: PALETTE.periwinkle },
            { step: '02', title: 'Cek Nilainya', desc: 'Bandingin: apa > 0, < 0, atau == 0?', color: PALETTE.purple },
            { step: '03', title: 'Tahu Jenisnya', desc: 'Kelompokin: Positif, Negatif, atau Nol', color: PALETTE.teal },
            { step: '04', title: 'Simpulkan Hasil', desc: 'Hasil klasifikasi angka', color: PALETTE.lime },
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
            title="cek_tanda_angka.js"
            highlight={[4, 6, 8]}
            code={`// 1. Masukin angka yang mau dicek
const angka = 7;

// 2 & 3. Periksa nilainya satu per satu
if (angka > 0) {
  // 4. Kasih tahu hasilnya
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
        notes="Sekarang kita masuk ke topik seru berikutnya: membedakan angka genap atau ganjil. Di contoh materi, kita coba masukin angka 8."
        kicker="Langkah Pertama · Bagian 2"
        title={
          <>
            Sekarang, <span className="accent-text">Genap atau Ganjil?</span>
          </>
        }
        body="Pikirkan satu angka bulat lagi. Nah, kali ini kita bakal cari tahu apakah angka ini genap atau ganjil lewat trik pembagian dengan angka 2."
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
                  Layar Program
                </span>
                <span style={{ fontSize: 12, color: PALETTE.lavender, fontFamily: 'var(--font-mono)' }}>
                  Contoh Soal #2
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
                Kunci Rahasianya:
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
                  Bagi 2, lalu Cek Sisanya (Modulo)
                </div>
                <div style={{ fontSize: 12.5, color: PALETTE.lavender, lineHeight: 1.4 }}>
                  Cukup bagi angkanya dengan <strong>2</strong>. Perhatiin: ada sisanya nggak, atau habis tak bersisa?
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                <div style={{ padding: '8px 10px', borderRadius: 8, background: 'rgba(161, 223, 42, 0.12)', border: '1px solid rgba(161, 223, 42, 0.3)', textAlign: 'center' }}>
                  <div style={{ color: PALETTE.lime, fontWeight: 700, fontSize: 13 }}>Sisanya 0</div>
                  <div style={{ color: PALETTE.lavender, fontSize: 11 }}>Jelas Genap</div>
                </div>
                <div style={{ padding: '8px 10px', borderRadius: 8, background: 'rgba(220, 50, 166, 0.12)', border: '1px solid rgba(220, 50, 166, 0.3)', textAlign: 'center' }}>
                  <div style={{ color: PALETTE.magenta, fontWeight: 700, fontSize: 13 }}>Ada Sisa 1</div>
                  <div style={{ color: PALETTE.lavender, fontSize: 11 }}>Pasti Ganjil</div>
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
        notes="Sesuai slide 5: angka dibagi 2. Kalau sisanya 0, maka angka itu genap. Contoh: 8 ÷ 2 sisa 0, 12 ÷ 2 sisa 0. Muncul keterangan 'Bilangan Genap'."
      >
        <div className="kicker" style={{ marginBottom: 10, textAlign: 'center' }}>
          Habis Dibagi Dua
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
          Ciri-Ciri <span className="accent-text">Bilangan Genap.</span>
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
          Kalau angka kita bagi <strong>2</strong> dan <strong>sisanya 0</strong> (habis pas tanpa sisa), berarti angka itu adalah <strong>bilangan genap</strong>.
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
              Angka 8 bisa dibagi rata jadi 4 pasang yang utuh. Nggak ada satu pun yang ketinggalan!
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
              Angka 12 bisa dibagi rata jadi 6 pasang pas tanpa menyisakan apa pun.
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
          <span>Cara Komputer Cek:</span>
          <code style={{ color: PALETTE.lime, fontWeight: 700, background: 'rgba(0,0,0,0.3)', padding: '3px 8px', borderRadius: 6 }}>
            angka % 2 === 0
          </code>
          <span>→ Muncul tulisan: <strong style={{ color: '#fff' }}>"Bilangan Genap"</strong></span>
        </div>
      </Slide>

      {/* ── Slide 9: Menentukan Bilangan Ganjil (Material Slide 6) ── */}
      <Slide
        center
        nav="Bilangan Ganjil"
        notes="Sesuai slide 6: kalau dibagi 2 ada sisanya (sisa 1), berarti ganjil. Contoh: 13 ÷ 2 sisa 1. Sistem bakal nampilin 'Bilangan Ganjil'."
      >
        <div className="kicker" style={{ marginBottom: 10, textAlign: 'center' }}>
          Ada Sisa Pembagian
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
          Kapan Dibilang <span className="accent-text">Bilangan Ganjil?</span>
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
          Kebalikannya, kalau angka dibagi 2 dan <strong>masih ada sisa (sisa 1)</strong>, berarti angka itu adalah <strong>bilangan ganjil</strong>.
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
              Angka 13 dapet 6 pasang (12), tapi masih ada 1 angka yang sendirian dan nggak dapet pasangan.
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
              Angka 7 dari slide awal juga dapet 3 pasang (6) dan nyisa 1. Fix, angka 7 itu ganjil!
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
          <span>Cara Komputer Cek:</span>
          <code style={{ color: PALETTE.magenta, fontWeight: 700, background: 'rgba(0,0,0,0.3)', padding: '3px 8px', borderRadius: 6 }}>
            angka % 2 !== 0
          </code>
          <span>→ Muncul tulisan: <strong style={{ color: '#fff' }}>"Bilangan Ganjil"</strong></span>
        </div>
      </Slide>

      {/* ── Slide 10: Alur Algoritma 2 — Genap & Ganjil (Material Slide 6) ── */}
      <Slide
        center
        nav="Alur Algoritma 2"
        notes="Ini urutan langkah algoritma paritas: Masukkan Angka → Bagi dengan 2 → Periksa Sisa → Tentukan Genap/Ganjil → Tampilkan Hasil. Sangat teratur!"
      >
        <div className="kicker" style={{ marginBottom: 8, textAlign: 'center' }}>
          Langkah demi Langkah
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
          Alur Kerja: <span className="accent-text">Genap & Ganjil.</span>
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
            { step: '01', title: 'Masukin Angka', desc: 'Ambil angka bulatnya', color: PALETTE.periwinkle },
            { step: '02', title: 'Bagi Sama 2', desc: 'Hitung operasi sisa baginya', color: PALETTE.purple },
            { step: '03', title: 'Lihat Sisanya', desc: 'Cek sisanya 0 atau ada sisa?', color: PALETTE.yellow },
            { step: '04', title: 'Tahu Statusnya', desc: 'Sisa 0 itu genap, sisa 1 ganjil', color: PALETTE.teal },
            { step: '05', title: 'Hasil', desc: 'Hasil klasifikasi ganjil & genap', color: PALETTE.lime },
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
            title="cek_genap_ganjil.js"
            highlight={[5, 7]}
            code={`// 1. Masukin angka yang mau dicek
const angka = 8;

// 2 & 3. Bagi sama 2 terus cek sisanya
if (angka % 2 === 0) {
  // 4 & 5. Kalau sisa 0, berarti genap!
  console.log("Bilangan Genap");
} else {
  // 4 & 5. Kalau ada sisa, berarti ganjil!
  console.log("Bilangan Ganjil");
}`}
          />
        </div>
      </Slide>

      {/* ── Slide 11: Rangkuman Tabel & Simulasi Interaktif ── */}
      <Slide
        center
        nav="Matriks & Simulasi"
        notes="Di tabel ini semua contoh kita gabungin: 7, 8, -3, 12, 13, dan 0. Di bawah tabel, kalian bisa langsung coba angka sendiri!"
      >
        <div className="kicker" style={{ marginBottom: 8, textAlign: 'center' }}>
          Rangkuman & Uji Coba Langsung
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
          Semua Contoh Kasus <span className="accent-text">& Uji Mandiri.</span>
        </h2>

        {/* Real Data Table from material */}
        <div style={{ width: '100%', maxWidth: 840, marginInline: 'auto', marginBottom: 20 }}>
          <Table
            caption="Semua contoh diambil langsung dari materi.md"
            highlightCol={3}
            columns={[
              'Angka',
              { label: 'Cek Tanda (vs 0)', align: 'left' },
              { label: 'Bagi 2 (Modulo)', align: 'left' },
              { label: 'Kesimpulan Lengkap', align: 'left' },
            ]}
            rows={[
              ['7', '7 > 0 (Positif)', '7 % 2 = 1 (Sisa 1)', 'Positif & Ganjil'],
              ['8', '8 > 0 (Positif)', '8 % 2 = 0 (Sisa 0)', 'Positif & Genap'],
              ['-3', '-3 < 0 (Negatif)', 'Sisa bukan 0 (Ganjil)', 'Negatif & Ganjil'],
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
        notes="Kesimpulannya: komputer cuma butuh dua trik sederhana ini buat ngambil keputusan dengan cepat dan akurat."
      >
        <div className="kicker" style={{ marginBottom: 10, textAlign: 'center' }}>
          Inti Pelajaran Kita
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
          Dua Trik Utama <span className="accent-text">Klasifikasi Angka.</span>
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
          Hanya dengan dua aturan logika simpel ini, kita bisa ngambil keputusan angka yang kita pikirkan termasuk jenis apa.
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
              Kunci 1 · Cek Tanda Nilai
            </div>
            <h3 style={{ fontSize: 22, color: '#fff', marginBottom: 10 }}>
              Bandingkan sama Angka Nol
            </h3>
            <p style={{ fontSize: 15, color: PALETTE.lavender, lineHeight: 1.5, marginBottom: 14 }}>
              Pakai tanda <code>&gt; 0</code>, <code>&lt; 0</code>, dan <code>== 0</code> buat misahin mana angka yang <strong>Positif</strong>, <strong>Negatif</strong>, atau pas di <strong>Nol</strong>.
            </p>
            <div style={{ fontSize: 13, color: PALETTE.mint, fontFamily: 'var(--font-mono)' }}>
              Intinya: Lihat posisinya dari titik tengah 0.
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
              Kunci 2 · Cek Paritas Angka
            </div>
            <h3 style={{ fontSize: 22, color: '#fff', marginBottom: 10 }}>
              Bagi 2 dan Lihat Sisanya
            </h3>
            <p style={{ fontSize: 15, color: PALETTE.lavender, lineHeight: 1.5, marginBottom: 14 }}>
              Pakai tanda persen <code>% 2</code> buat cek sisa baginya: kalau sisanya 0 berarti <strong>Genap</strong>, kalau nyisa 1 berarti <strong>Ganjil</strong>.
            </p>
            <div style={{ fontSize: 13, color: PALETTE.orchid, fontFamily: 'var(--font-mono)' }}>
              Intinya: Cek apakah bisa dibagi rata berpasangan.
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
    <DownloadPptxButton variant="floating" />
    </>
  );
}
