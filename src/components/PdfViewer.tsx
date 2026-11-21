import React, { useState } from 'react';
import { BookOpen, Download, FileText } from 'lucide-react';
import type { UnitData } from '../types/curriculum';

interface PdfViewerProps {
  units: UnitData[];
  initialPage?: number;
}

const PDF_URL = '/assets/aistudio/Luyen_tieng_anh_5_1c5018c7.pdf';

export const PdfViewer: React.FC<PdfViewerProps> = ({ units, initialPage = 1 }) => {
  const [page, setPage] = useState(initialPage);

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs">
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-700">
            Tài liệu đính kèm chính thức · 177 trang
          </p>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
            Luyện chuyên sâu Ngữ pháp và Từ vựng Tiếng Anh Lớp 5
          </h1>
          <p className="text-sm text-slate-600">
            Tra cứu trực tiếp sách bài tập gốc hoặc bấm chọn nhanh mục lục từng Unit bên trái.
          </p>
        </div>

        <a
          href={PDF_URL}
          download="Luyen_tieng_anh_5.pdf"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold transition-colors shrink-0"
        >
          <Download className="w-4 h-4" />
          Tải sách PDF
        </a>
      </div>

      {/* Main Split: Quick Unit Page Index + Embedded PDF */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <aside className="lg:col-span-4 bg-white border border-slate-200 rounded-3xl p-4 max-h-[680px] overflow-y-auto space-y-1">
          <div className="px-2 py-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            <BookOpen className="w-4 h-4 text-sky-600" />
            Mục lục chuyển nhanh theo Unit
          </div>

          {units.map((u) => {
            const isActive = page === u.pdfPageStart;
            return (
              <button
                key={u.id}
                type="button"
                onClick={() => setPage(u.pdfPageStart)}
                className={`w-full text-left px-3 py-2.5 rounded-xl transition-colors flex items-center justify-between gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-sky-50 text-sky-800 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span className="text-sm truncate">
                  Unit {u.id}: {u.titleVi}
                </span>
                <span className="text-xs font-mono text-slate-500 shrink-0 tabular-nums">
                  Tr. {u.pdfPageStart}
                </span>
              </button>
            );
          })}
        </aside>

        <div className="lg:col-span-8 bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-xs">
          <div className="px-5 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600 font-medium">
            <span className="inline-flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-sky-600" />
              Đang mở tại trang {page}
            </span>
            <a
              href={`${PDF_URL}#page=${page}`}
              target="_blank"
              rel="noreferrer"
              className="text-sky-700 font-semibold hover:underline"
            >
              Xem toàn màn hình
            </a>
          </div>
          <iframe
            key={page}
            src={`${PDF_URL}#page=${page}`}
            title="Sách Luyện chuyên sâu Ngữ pháp và Từ vựng Tiếng Anh Lớp 5"
            className="w-full h-[640px] bg-slate-100"
          />
        </div>
      </div>
    </div>
  );
};
