let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctx) return null;
  if (!audioCtx) {
    audioCtx = new Ctx();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

export function speakEnglish(text: string, rate = 0.95): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-GB';
    utterance.rate = rate;
    utterance.pitch = 1.02;

    const voices = window.speechSynthesis.getVoices();
    const preferred =
      voices.find((v) => v.lang.startsWith('en-GB') && /google|samantha|daniel|serena|natural/i.test(v.name)) ||
      voices.find((v) => v.lang.startsWith('en-US') && /google|samantha|natural/i.test(v.name)) ||
      voices.find((v) => v.lang.startsWith('en-'));

    if (preferred) {
      utterance.voice = preferred;
      utterance.lang = preferred.lang;
    }

    window.speechSynthesis.speak(utterance);
  } catch {
    // Graceful fallback when speech synthesis is unavailable
  }
}

export function stopSpeech(): void {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

export function playFeedbackTone(kind: 'correct' | 'wrong' | 'celebrate', muted = false): void {
  if (muted) return;
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  const playNote = (freq: number, start: number, duration: number, type: OscillatorType, gainPeak: number) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, start);
    gain.gain.setValueAtTime(0.001, start);
    gain.gain.exponentialRampToValueAtTime(gainPeak, start + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(start);
    osc.stop(start + duration + 0.02);
  };

  if (kind === 'correct') {
    playNote(523.25, now, 0.14, 'sine', 0.12);
    playNote(659.25, now + 0.09, 0.22, 'sine', 0.13);
  } else if (kind === 'wrong') {
    playNote(260, now, 0.15, 'triangle', 0.09);
    playNote(220, now + 0.1, 0.18, 'triangle', 0.08);
  } else {
    playNote(523.25, now, 0.12, 'sine', 0.12);
    playNote(659.25, now + 0.09, 0.12, 'sine', 0.12);
    playNote(783.99, now + 0.18, 0.14, 'sine', 0.13);
    playNote(1046.5, now + 0.28, 0.3, 'sine', 0.14);
  }
}
