import React, { useEffect, useState } from 'react';
import {
  ArrowLeft,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  FileText,
  GraduationCap,
  Layers,
  ListChecks,
  Star,
  Trophy,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { CURRICULUM_UNITS } from './data/curriculum';
import type { StudentProgress } from './types/curriculum';
import { TopBar, type AppSection } from './components/TopBar';
import { DashboardView } from './components/DashboardView';
import { VocabStudio } from './components/VocabStudio';
import { GrammarStudio } from './components/GrammarStudio';
import { WorkbookPractice } from './components/WorkbookPractice';
import { IOEArena } from './components/IOEArena';
import { PdfViewer } from './components/PdfViewer';
import { Pages1To20Studio } from './components/Pages1To20Studio';
import { UnitIllustration } from './components/UnitIllustration';
import { stopSpeech } from './utils/speech';

type UnitTab = 'vocab' | 'grammar' | 'workbook' | 'ioe';

const STORAGE_KEY = 'brightstep5_progress_v1';

const DEFAULT_PROGRESS: StudentProgress = {
  masteredVocabIds: [],
  completedTaskIds: [],
  unitBestScores: {},
  totalStars: 0,
  streakDays: 1,
  lastActiveUnitId: 1,
};

function loadProgress(): StudentProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROGRESS;
    const parsed = JSON.parse(raw) as Partial<StudentProgress>;
    return {
      masteredVocabIds: Array.isArray(parsed.masteredVocabIds) ? parsed.masteredVocabIds : [],
      completedTaskIds: Array.isArray(parsed.completedTaskIds) ? parsed.completedTaskIds : [],
      unitBestScores:
        parsed.unitBestScores && typeof parsed.unitBestScores === 'object'
          ? parsed.unitBestScores
          : {},
      totalStars: typeof parsed.totalStars === 'number' ? parsed.totalStars : 0,
      streakDays: typeof parsed.streakDays === 'number' ? parsed.streakDays : 1,
      lastActiveUnitId:
        typeof parsed.lastActiveUnitId === 'number' &&
        parsed.lastActiveUnitId >= 1 &&
        parsed.lastActiveUnitId <= 20
          ? parsed.lastActiveUnitId
          : 1,
    };
  } catch {
    return DEFAULT_PROGRESS;
  }
}

export default function App() {
  const [progress, setProgress] = useState<StudentProgress>(() => loadProgress());
  const [activeView, setActiveView] = useState<'dashboard' | 'pages1to20' | 'unit' | 'ioe' | 'pdf'>('dashboard');
  const [activeUnitId, setActiveUnitId] = useState<number>(() => loadProgress().lastActiveUnitId);
  const [unitTab, setUnitTab] = useState<UnitTab>('vocab');
  const [pdfStartPage, setPdfStartPage] = useState<number>(1);
  const [muted, setMuted] = useState<boolean>(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // Ignore storage quota errors
    }
  }, [progress]);

  useEffect(() => {
    stopSpeech();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView, activeUnitId, unitTab]);

  const activeUnit =
    CURRICULUM_UNITS.find((u) => u.id === activeUnitId) ?? CURRICULUM_UNITS[0];

  const handleSelectUnit = (unitId: number, initialTab: UnitTab = 'vocab') => {
    setActiveUnitId(unitId);
    setUnitTab(initialTab);
    setActiveView('unit');
    setProgress((prev) => ({ ...prev, lastActiveUnitId: unitId }));
  };

  const handleTopBarNavigate = (section: AppSection) => {
    if (section === 'dashboard') {
      setActiveView('dashboard');
    } else if (section === 'pages1to20') {
      setActiveView('pages1to20');
    } else if (section === 'vocab') {
      setActiveView('unit');
      setUnitTab('vocab');
    } else if (section === 'ioe') {
      setActiveView('ioe');
    } else if (section === 'pdf') {
      setPdfStartPage(activeUnit.pdfPageStart);
      setActiveView('pdf');
    }
  };

  const handleToggleMasteredVocab = (vocabId: string) => {
    setProgress((prev) => {
      const exists = prev.masteredVocabIds.includes(vocabId);
      return {
        ...prev,
        masteredVocabIds: exists
          ? prev.masteredVocabIds.filter((id) => id !== vocabId)
          : [...prev.masteredVocabIds, vocabId],
        totalStars: exists ? prev.totalStars : prev.totalStars + 1,
      };
    });
  };

  const handleCompleteTask = (taskId: string) => {
    setProgress((prev) => {
      if (prev.completedTaskIds.includes(taskId)) return prev;
      return {
        ...prev,
        completedTaskIds: [...prev.completedTaskIds, taskId],
        totalStars: prev.totalStars + 2,
      };
    });
  };

  const handleAwardStar = (amount: number) => {
    setProgress((prev) => ({
      ...prev,
      totalStars: prev.totalStars + amount,
    }));
  };

  const handleFinishIOERound = (unitId: number, scorePercent: number, starsEarned: number) => {
    setProgress((prev) => {
      const currentBest = prev.unitBestScores[unitId] ?? 0;
      return {
        ...prev,
        unitBestScores: {
          ...prev.unitBestScores,
          [unitId]: Math.max(currentBest, scorePercent),
        },
        totalStars: prev.totalStars + starsEarned,
      };
    });
  };

  const topBarActiveSection: AppSection =
    activeView === 'dashboard'
      ? 'dashboard'
      : activeView === 'pages1to20'
      ? 'pages1to20'
      : activeView === 'ioe'
      ? 'ioe'
      : activeView === 'pdf'
      ? 'pdf'
      : unitTab === 'ioe'
      ? 'ioe'
      : 'vocab';

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col">
      <TopBar
        activeSection={topBarActiveSection}
        onNavigate={handleTopBarNavigate}
        continueUnitId={progress.lastActiveUnitId}
        onContinueLearning={() => handleSelectUnit(progress.lastActiveUnitId, 'vocab')}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
        {/* Dashboard View */}
        {activeView === 'dashboard' && (
          <DashboardView
            units={CURRICULUM_UNITS}
            progress={progress}
            onSelectUnit={handleSelectUnit}
            onOpenPages1To20={() => setActiveView('pages1to20')}
            onOpenIOE={() => setActiveView('ioe')}
            onOpenPdf={() => {
              setPdfStartPage(1);
              setActiveView('pdf');
            }}
          />
        )}

        {/* Detailed Pages 1–20 Interactive Studio */}
        {activeView === 'pages1to20' && (
          <Pages1To20Studio
            completedTaskIds={progress.completedTaskIds}
            onCompleteTask={handleCompleteTask}
            onOpenPdfAtPage={(page) => {
              setPdfStartPage(page);
              setActiveView('pdf');
            }}
            onBackDashboard={() => setActiveView('dashboard')}
            muted={muted}
          />
        )}

        {/* Unit Study Workspace */}
        {activeView === 'unit' && (
          <div className="space-y-6 pb-16">
            {/* Compact Unit Header Bar */}
            <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-xs space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setActiveView('dashboard')}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-600 hover:text-sky-700 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Quay lại lộ trình 20 bài
                </button>

                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-amber-700 tabular-nums mr-1">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-400" />
                    {progress.totalStars} sao
                  </span>

                  <button
                    type="button"
                    onClick={() => setMuted((m) => !m)}
                    className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 cursor-pointer"
                    aria-label={muted ? 'Bật âm thanh hiệu ứng' : 'Tắt âm thanh hiệu ứng'}
                    title={muted ? 'Bật âm thanh hiệu ứng' : 'Tắt âm thanh hiệu ứng'}
                  >
                    {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setPdfStartPage(activeUnit.pdfPageStart);
                      setActiveView('pdf');
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 cursor-pointer"
                  >
                    <FileText className="w-3.5 h-3.5 text-sky-600" />
                    Trang {activeUnit.pdfPageStart} sách PDF
                  </button>

                  <div className="inline-flex items-center gap-1">
                    <button
                      type="button"
                      disabled={activeUnit.id <= 1}
                      onClick={() => handleSelectUnit(activeUnit.id - 1, unitTab)}
                      className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
                      aria-label="Bài trước"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <select
                      value={activeUnit.id}
                      onChange={(e) => handleSelectUnit(Number(e.target.value), unitTab)}
                      aria-label="Chọn nhanh Unit"
                      className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 max-w-[190px]"
                    >
                      {CURRICULUM_UNITS.map((u) => (
                        <option key={u.id} value={u.id}>
                          Unit {u.id}: {u.titleVi}
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      disabled={activeUnit.id >= CURRICULUM_UNITS.length}
                      onClick={() => handleSelectUnit(activeUnit.id + 1, unitTab)}
                      className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
                      aria-label="Bài tiếp theo"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Unit Title & Goal */}
              <div className="flex items-start gap-4">
                <UnitIllustration unitId={activeUnit.id} className="w-14 h-14 shrink-0" />
                <div className="space-y-1 min-w-0">
                  <p className="text-xs font-semibold text-sky-700 uppercase tracking-wider">
                    Unit {activeUnit.id} · Học kì {activeUnit.semester}
                  </p>
                  <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                    {activeUnit.title}
                  </h1>
                  <p className="text-sm sm:text-base font-medium text-sky-700">
                    {activeUnit.titleVi}
                  </p>
                  <p className="text-sm text-slate-600 pt-0.5">{activeUnit.goal}</p>
                </div>
              </div>

              {/* 4 Learning Studio Tabs */}
              <div
                className="flex flex-wrap gap-2 pt-3 border-t border-slate-100"
                role="tablist"
                aria-label="Các phần học của bài"
              >
                {[
                  { id: 'vocab' as const, label: `Từ vựng (${activeUnit.vocab.length})`, icon: Layers },
                  { id: 'grammar' as const, label: `Ngữ pháp (${activeUnit.grammar.length})`, icon: GraduationCap },
                  { id: 'workbook' as const, label: 'Bài tập sách', icon: ListChecks },
                  { id: 'ioe' as const, label: 'Luyện thi IOE', icon: Trophy },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = unitTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setUnitTab(tab.id)}
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                        isActive
                          ? 'bg-sky-600 text-white shadow-xs'
                          : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Studio Content */}
            {unitTab === 'vocab' && (
              <VocabStudio
                unit={activeUnit}
                masteredVocabIds={progress.masteredVocabIds}
                onToggleMastered={handleToggleMasteredVocab}
                onAwardStar={handleAwardStar}
                muted={muted}
              />
            )}

            {unitTab === 'grammar' && <GrammarStudio unit={activeUnit} />}

            {unitTab === 'workbook' && (
              <WorkbookPractice
                unit={activeUnit}
                completedTaskIds={progress.completedTaskIds}
                onCompleteTask={handleCompleteTask}
                muted={muted}
              />
            )}

            {unitTab === 'ioe' && (
              <IOEArena
                units={CURRICULUM_UNITS}
                selectedUnitId={activeUnit.id}
                onChangeUnitId={(id) => {
                  setActiveUnitId(id);
                  setProgress((prev) => ({ ...prev, lastActiveUnitId: id }));
                }}
                onFinishRound={handleFinishIOERound}
                muted={muted}
              />
            )}
          </div>
        )}

        {/* Standalone IOE Arena View */}
        {activeView === 'ioe' && (
          <div className="pb-16">
            <IOEArena
              units={CURRICULUM_UNITS}
              selectedUnitId={activeUnitId}
              onChangeUnitId={(id) => {
                setActiveUnitId(id);
                setProgress((prev) => ({ ...prev, lastActiveUnitId: id }));
              }}
              onFinishRound={handleFinishIOERound}
              muted={muted}
            />
          </div>
        )}

        {/* Embedded PDF Textbook View */}
        {activeView === 'pdf' && (
          <PdfViewer units={CURRICULUM_UNITS} initialPage={pdfStartPage} />
        )}
      </main>

      <footer className="border-t border-slate-200 bg-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <div className="inline-flex items-center gap-2 font-medium text-slate-600">
            <BookOpen className="w-4 h-4 text-sky-600" />
            <span>BrightStep 5 · Học Tiếng Anh Lớp 5 Trực Quan (20 Unit Học kì 1 & 2)</span>
          </div>
          <span>Tiến độ học tập được lưu tự động trên trình duyệt của bạn.</span>
        </div>
      </footer>
    </div>
  );
}
