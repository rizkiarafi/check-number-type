import { usePptxDownload } from '../context/PptxExportContext';

export default function DownloadPptxButton({
  variant = 'floating',
}: {
  variant?: 'floating' | 'banner';
}) {
  const { isExporting, statusText, startExport } = usePptxDownload();

  const handleDownload = async (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (isExporting) return;
    await startExport();
  };

  if (variant === 'banner') {
    return (
      <button
        onClick={handleDownload}
        disabled={isExporting}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 10,
          padding: '12px 28px',
          borderRadius: 999,
          background:
            'linear-gradient(115deg, #0ca8a4 0%, #ac4cff 60%, #dc32a6 100%)',
          color: '#ffffff',
          fontWeight: 700,
          fontSize: 14,
          fontFamily: 'var(--font-head)',
          border: 'none',
          cursor: isExporting ? 'wait' : 'pointer',
          boxShadow: '0 8px 24px rgba(172, 76, 255, 0.45)',
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        onMouseEnter={(e) => {
          if (!isExporting)
            e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
        }}
        onMouseLeave={(e) => {
          if (!isExporting)
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        <span>
          {isExporting ? statusText || 'Memproses...' : 'Unduh Slide (.PPTX)'}
        </span>
      </button>
    );
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 18,
        right: 18,
        zIndex: 90,
      }}
    >
      <button
        onClick={handleDownload}
        disabled={isExporting}
        title="Unduh seluruh slide dalam format PowerPoint (.pptx) dengan tampilan visual asli"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '8px 16px',
          borderRadius: 999,
          background: isExporting
            ? 'rgba(65, 23, 130, 0.95)'
            : 'rgba(40, 12, 55, 0.75)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(201, 196, 232, 0.24)',
          color: '#ffffff',
          fontSize: 12.5,
          fontWeight: 600,
          fontFamily: 'var(--font-head)',
          cursor: isExporting ? 'wait' : 'pointer',
          boxShadow: '0 8px 30px rgba(10, 2, 18, 0.6)',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          if (!isExporting) {
            e.currentTarget.style.borderColor = '#0ca8a4';
            e.currentTarget.style.background = 'rgba(65, 23, 130, 0.85)';
            e.currentTarget.style.boxShadow =
              '0 10px 32px rgba(12, 168, 164, 0.35)';
          }
        }}
        onMouseLeave={(e) => {
          if (!isExporting) {
            e.currentTarget.style.borderColor = 'rgba(201, 196, 232, 0.24)';
            e.currentTarget.style.background = 'rgba(40, 12, 55, 0.75)';
            e.currentTarget.style.boxShadow =
              '0 8px 30px rgba(10, 2, 18, 0.6)';
          }
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke={isExporting ? '#a1df2a' : '#0ca8a4'}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        <span style={{ color: isExporting ? '#c5ffc9' : '#ffffff' }}>
          {isExporting ? statusText || 'Mengekspor...' : 'Unduh .PPTX'}
        </span>
      </button>
    </div>
  );
}
