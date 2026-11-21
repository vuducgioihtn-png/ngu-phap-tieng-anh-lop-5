import React from 'react';
import { BookOpen, Menu, X } from 'lucide-react';

export type AppSection = 'dashboard' | 'pages1to20' | 'vocab' | 'ioe' | 'pdf';

interface TopBarProps {
  activeSection: AppSection;
  onNavigate: (section: AppSection) => void;
  continueUnitId: number;
  onContinueLearning: () => void;
}

const NAV_ITEMS: { id: AppSection; label: string }[] = [
  { id: 'dashboard', label: 'Lộ trình 20 bài' },
  { id: 'pages1to20', label: 'Chi tiết Tr. 1–177' },
  { id: 'vocab', label: 'Từ vựng' },
  { id: 'ioe', label: 'Luyện thi IOE' },
  { id: 'pdf', label: 'Sách PDF' },
];

export const TopBar: React.FC<TopBarProps> = ({
  activeSection,
  onNavigate,
  continueUnitId,
  onContinueLearning,
}) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleSelect = (id: AppSection) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-element Brand Wordmark */}
        <button
          type="button"
          onClick={() => handleSelect('dashboard')}
          className="flex items-center gap-2.5 whitespace-nowrap shrink-0 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg"
        >
          <span className="w-9 h-9 rounded-xl bg-sky-600 text-white flex items-center justify-center shadow-sm">
            <BookOpen className="w-5 h-5" aria-hidden="true" />
          </span>
          <span className="font-display font-bold text-xl tracking-tight text-slate-900">
            BrightStep 5
          </span>
        </button>

        {/* Zone 2: Clean Single-line Navigation */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Điều hướng chính">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelect(item.id)}
                className={`text-sm font-semibold whitespace-nowrap py-1.5 transition-colors border-b-2 ${
                  isActive
                    ? 'text-sky-700 border-sky-600'
                    : 'text-slate-600 border-transparent hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onContinueLearning}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold whitespace-nowrap transition-colors shadow-sm cursor-pointer"
          >
            Học tiếp Bài {continueUnitId}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            aria-label={mobileOpen ? 'Đóng menu' : 'Mở menu'}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelect(item.id)}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  isActive ? 'bg-sky-50 text-sky-700' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <button
            type="button"
            onClick={() => {
              setMobileOpen(false);
              onContinueLearning();
            }}
            className="w-full mt-2 px-4 py-2.5 rounded-xl bg-sky-600 text-white text-sm font-semibold"
          >
            Học tiếp Bài {continueUnitId}
          </button>
        </div>
      )}
    </header>
  );
};
