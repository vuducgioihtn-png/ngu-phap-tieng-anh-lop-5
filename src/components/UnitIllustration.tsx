import React from 'react';

interface UnitIllustrationProps {
  unitId: number;
  className?: string;
}

export const HeroStudyScene: React.FC<{ className?: string }> = ({ className = 'w-full h-auto' }) => (
  <svg
    viewBox="0 0 420 290"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Minh họa góc học Tiếng Anh lớp 5 sinh động"
  >
    {/* Soft sky backdrop */}
    <rect x="14" y="14" width="392" height="262" rx="28" fill="#EFF8FF" stroke="#BAE6FD" strokeWidth="2" />
    {/* Subtle clouds */}
    <path d="M58 72C58 63 65 56 74 56C77 56 80 57 82 58C85 52 91 48 98 48C108 48 116 56 116 66C116 67 116 68 116 69C121 70 125 74 125 80C125 86 120 90 114 90H68C62 90 58 86 58 80V72Z" fill="#FFFFFF" />
    <path d="M294 58C294 51 300 46 307 46C310 46 312 47 314 48C317 43 323 40 329 40C338 40 345 47 345 55C350 56 353 60 353 65C353 70 349 74 344 74H302C297 74 294 70 294 65V58Z" fill="#FFFFFF" />

    {/* Desk surface */}
    <rect x="44" y="218" width="332" height="18" rx="9" fill="#E2E8F0" />
    <rect x="52" y="214" width="316" height="14" rx="7" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />

    {/* Open English Textbook */}
    <path d="M110 214L122 146C145 140 176 141 206 152V214C178 205 142 204 110 214Z" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M302 214L290 146C267 140 236 141 206 152V214C234 205 270 204 302 214Z" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2.5" strokeLinejoin="round" />
    <line x1="206" y1="152" x2="206" y2="214" stroke="#0369A1" strokeWidth="2.5" />
    {/* Text lines left page */}
    <rect x="134" y="160" width="52" height="7" rx="3.5" fill="#0284C7" />
    <rect x="132" y="174" width="56" height="5" rx="2.5" fill="#CBD5E1" />
    <rect x="130" y="185" width="46" height="5" rx="2.5" fill="#CBD5E1" />
    <rect x="128" y="196" width="50" height="5" rx="2.5" fill="#E2E8F0" />
    {/* Mini chart / flashcard right page */}
    <rect x="224" y="160" width="54" height="34" rx="8" fill="#ECFDF5" stroke="#10B981" strokeWidth="1.8" />
    <path d="M235 178L244 186L266 168" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="224" y="200" width="42" height="5" rx="2.5" fill="#CBD5E1" />

    {/* Floating Speech Bubble with "Hello!" */}
    <rect x="64" y="96" width="96" height="44" rx="14" fill="#0284C7" />
    <path d="M98 140L106 152L116 140H98Z" fill="#0284C7" />
    <text x="112" y="124" textAnchor="middle" fill="#FFFFFF" fontFamily="Bricolage Grotesque, sans-serif" fontWeight="700" fontSize="18">
      Hello!
    </text>

    {/* Floating Audio Wave Card */}
    <rect x="262" y="88" width="114" height="46" rx="14" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="2" />
    <circle cx="284" cy="111" r="12" fill="#FEF3C7" />
    <path d="M281 106L290 111L281 116V106Z" fill="#D97706" />
    <rect x="304" y="106" width="4" height="10" rx="2" fill="#0284C7" />
    <rect x="313" y="100" width="4" height="22" rx="2" fill="#0284C7" />
    <rect x="322" y="104" width="4" height="14" rx="2" fill="#059669" />
    <rect x="331" y="98" width="4" height="26" rx="2" fill="#059669" />
    <rect x="340" y="105" width="4" height="12" rx="2" fill="#D97706" />
    <rect x="349" y="108" width="4" height="6" rx="2" fill="#94A3B8" />

    {/* Floating Gold Star Medal */}
    <circle cx="206" cy="90" r="28" fill="#FEF3C7" stroke="#F59E0B" strokeWidth="2.5" />
    <path
      d="M206 72L211.2 82.6L222.9 84.3L214.4 92.5L216.4 104.2L206 98.7L195.6 104.2L197.6 92.5L189.1 84.3L200.8 82.6L206 72Z"
      fill="#F59E0B"
    />

    {/* Decorative Alphabet Tile */}
    <rect x="52" y="168" width="42" height="42" rx="11" fill="#FFF1F2" stroke="#FDA4AF" strokeWidth="2" />
    <text x="73" y="196" textAnchor="middle" fill="#E11D48" fontFamily="Bricolage Grotesque, sans-serif" fontWeight="800" fontSize="20">
      A
    </text>

    {/* Decorative Trophy Cup on Desk */}
    <path d="M326 178H352V192C352 199 346 205 339 205C332 205 326 199 326 192V178Z" fill="#FBBF24" stroke="#D97706" strokeWidth="2" />
    <rect x="336" y="205" width="6" height="8" fill="#D97706" />
    <rect x="328" y="211" width="22" height="4" rx="2" fill="#B45309" />
  </svg>
);

export const UnitIllustration: React.FC<UnitIllustrationProps> = ({ unitId, className = 'w-12 h-12' }) => {
  const renderGlyph = () => {
    switch (unitId) {
      case 1: // Address / Home
        return (
          <>
            <rect width="56" height="56" rx="14" fill="#E0F2FE" />
            <path d="M14 28L28 16L42 28V42H33V33H23V42H14V28Z" fill="#0284C7" />
            <rect x="25" y="22" width="6" height="6" rx="1.5" fill="#FFFFFF" />
          </>
        );
      case 2: // Daily routine / Clock
        return (
          <>
            <rect width="56" height="56" rx="14" fill="#FEF3C7" />
            <circle cx="28" cy="28" r="14" fill="#FFFFFF" stroke="#D97706" strokeWidth="3" />
            <path d="M28 20V28L34 31" stroke="#D97706" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </>
        );
      case 3: // Holiday / Island & Sun
        return (
          <>
            <rect width="56" height="56" rx="14" fill="#CCFBF1" />
            <circle cx="38" cy="18" r="5" fill="#F59E0B" />
            <path d="M14 38C18 32 24 30 30 33C35 35 39 34 42 38H14Z" fill="#059669" />
            <path d="M12 42C16 40 20 40 24 42C28 44 32 44 36 42C39 40.5 42 40.5 44 42" stroke="#0284C7" strokeWidth="2.8" strokeLinecap="round" />
          </>
        );
      case 4: // Party / Cake & Confetti
        return (
          <>
            <rect width="56" height="56" rx="14" fill="#FFE4E6" />
            <rect x="16" y="27" width="24" height="14" rx="4" fill="#E11D48" />
            <rect x="16" y="27" width="24" height="5" rx="2" fill="#FDA4AF" />
            <rect x="26.5" y="18" width="3" height="9" rx="1.5" fill="#0284C7" />
            <circle cx="28" cy="15" r="2.8" fill="#F59E0B" />
          </>
        );
      case 5: // Weekend / Tent & Mountain
        return (
          <>
            <rect width="56" height="56" rx="14" fill="#D1FAE5" />
            <path d="M13 40L28 17L43 40H13Z" fill="#059669" />
            <path d="M23 40L28 30L33 40H23Z" fill="#ECFDF5" />
            <circle cx="40" cy="17" r="4" fill="#F59E0B" />
          </>
        );
      case 6: // School Lessons / Book
        return (
          <>
            <rect width="56" height="56" rx="14" fill="#E0F2FE" />
            <rect x="15" y="15" width="26" height="26" rx="5" fill="#0284C7" />
            <rect x="20" y="21" width="16" height="3" rx="1.5" fill="#FFFFFF" />
            <rect x="20" y="27" width="12" height="3" rx="1.5" fill="#BAE6FD" />
            <rect x="20" y="33" width="14" height="3" rx="1.5" fill="#BAE6FD" />
          </>
        );
      case 7: // Learn English / Speech & Headphones
        return (
          <>
            <rect width="56" height="56" rx="14" fill="#D1FAE5" />
            <path d="M16 30V26C16 19.4 21.4 14 28 14C34.6 14 40 19.4 40 26V30" stroke="#059669" strokeWidth="3.2" strokeLinecap="round" />
            <rect x="13" y="28" width="6" height="12" rx="3" fill="#059669" />
            <rect x="37" y="28" width="6" height="12" rx="3" fill="#059669" />
            <circle cx="28" cy="31" r="4" fill="#0284C7" />
          </>
        );
      case 8: // Reading Fairy Tales / Open Book & Star
        return (
          <>
            <rect width="56" height="56" rx="14" fill="#FEF3C7" />
            <path d="M13 21C18 19 23 20 28 23C33 20 38 19 43 21V39C38 37 33 38 28 41C23 38 18 37 13 39V21Z" fill="#D97706" />
            <path d="M28 23V41" stroke="#FEF3C7" strokeWidth="2.5" />
            <circle cx="28" cy="14" r="3.5" fill="#F59E0B" />
          </>
        );
      case 9: // Zoo / Cute Panda Face
        return (
          <>
            <rect width="56" height="56" rx="14" fill="#DCFCE7" />
            <circle cx="19" cy="19" r="5" fill="#1E293B" />
            <circle cx="37" cy="19" r="5" fill="#1E293B" />
            <circle cx="28" cy="30" r="13" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2" />
            <ellipse cx="23" cy="29" rx="3.2" ry="4" fill="#1E293B" />
            <ellipse cx="33" cy="29" rx="3.2" ry="4" fill="#1E293B" />
            <circle cx="23.5" cy="28" r="1.2" fill="#FFFFFF" />
            <circle cx="33.5" cy="28" r="1.2" fill="#FFFFFF" />
            <ellipse cx="28" cy="34" rx="2.5" ry="1.8" fill="#1E293B" />
          </>
        );
      case 10: // Sports Day / Trophy
        return (
          <>
            <rect width="56" height="56" rx="14" fill="#FFE4E6" />
            <path d="M18 16H38V26C38 31.5 33.5 36 28 36C22.5 36 18 31.5 18 26V16Z" fill="#E11D48" />
            <rect x="25.5" y="36" width="5" height="6" fill="#E11D48" />
            <rect x="20" y="41" width="16" height="3.5" rx="1.5" fill="#BE123C" />
            <circle cx="28" cy="25" r="3.5" fill="#FEF3C7" />
          </>
        );
      case 11: // Health / Medical Cross
        return (
          <>
            <rect width="56" height="56" rx="14" fill="#FFE4E6" />
            <rect x="14" y="14" width="28" height="28" rx="8" fill="#FFFFFF" stroke="#E11D48" strokeWidth="2.5" />
            <rect x="25" y="20" width="6" height="16" rx="2" fill="#E11D48" />
            <rect x="20" y="25" width="16" height="6" rx="2" fill="#E11D48" />
          </>
        );
      case 12: // Safety / Shield & Check
        return (
          <>
            <rect width="56" height="56" rx="14" fill="#FEF3C7" />
            <path d="M28 13L41 18V28C41 35.5 35.4 41.2 28 44C20.6 41.2 15 35.5 15 28V18L28 13Z" fill="#D97706" />
            <path d="M22.5 28.5L26.5 32.5L34.5 24" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </>
        );
      case 13: // Free Time / Kite & Fun
        return (
          <>
            <rect width="56" height="56" rx="14" fill="#E0F2FE" />
            <path d="M28 12L40 25L28 38L16 25L28 12Z" fill="#0284C7" />
            <path d="M28 12V38M16 25H40" stroke="#BAE6FD" strokeWidth="2" />
            <path d="M28 38C28 42 32 43 35 45" stroke="#D97706" strokeWidth="2.5" strokeLinecap="round" />
          </>
        );
      case 14: // Folk Tales / Watermelon Slice
        return (
          <>
            <rect width="56" height="56" rx="14" fill="#D1FAE5" />
            <path d="M13 31C13 39.3 19.7 45 28 45C36.3 45 43 39.3 43 31H13Z" fill="#059669" />
            <path d="M16.5 31C16.5 37.2 21.6 41.5 28 41.5C34.4 41.5 39.5 37.2 39.5 31H16.5Z" fill="#E11D48" />
            <circle cx="24" cy="35" r="1.4" fill="#1E293B" />
            <circle cx="28" cy="37" r="1.4" fill="#1E293B" />
            <circle cx="32" cy="35" r="1.4" fill="#1E293B" />
          </>
        );
      case 15: // Dream Job / Rocket
        return (
          <>
            <rect width="56" height="56" rx="14" fill="#E0F2FE" />
            <path d="M28 12C34 17 36 25 35 34H21C20 25 22 17 28 12Z" fill="#0284C7" />
            <circle cx="28" cy="24" r="3.5" fill="#FFFFFF" />
            <path d="M21 30L15 36H21V30Z" fill="#E11D48" />
            <path d="M35 30L41 36H35V30Z" fill="#E11D48" />
            <path d="M25 35L28 43L31 35H25Z" fill="#F59E0B" />
          </>
        );
      case 16: // Directions / Map Pin
        return (
          <>
            <rect width="56" height="56" rx="14" fill="#E0F2FE" />
            <path d="M28 13C21.4 13 16 18.2 16 24.8C16 33.4 28 44 28 44C28 44 40 33.4 40 24.8C40 18.2 34.6 13 28 13Z" fill="#0284C7" />
            <circle cx="28" cy="24.5" r="5" fill="#FFFFFF" />
          </>
        );
      case 17: // Food & Drink / Bowl of Noodles
        return (
          <>
            <rect width="56" height="56" rx="14" fill="#FEF3C7" />
            <path d="M14 29H42C41 37 35.5 42 28 42C20.5 42 15 37 14 29Z" fill="#D97706" />
            <path d="M20 23C20 20 22 20 22 17M28 23C28 20 30 20 30 17M36 23C36 20 38 20 38 17" stroke="#059669" strokeWidth="2.4" strokeLinecap="round" />
            <line x1="25" y1="26" x2="43" y2="18" stroke="#92400E" strokeWidth="2.5" strokeLinecap="round" />
          </>
        );
      case 18: // Weather / Sun & Cloud
        return (
          <>
            <rect width="56" height="56" rx="14" fill="#E0F2FE" />
            <circle cx="34" cy="22" r="7" fill="#F59E0B" />
            <path d="M16 37H37C40.3 37 43 34.5 43 31.5C43 28.6 40.7 26.2 37.8 26C36.8 22.5 33.6 20 29.8 20C25.4 20 21.8 23.3 21.5 27.6C18.3 28 16 30.6 16 33.7C16 35.6 16 37 16 37Z" fill="#FFFFFF" stroke="#0284C7" strokeWidth="2.2" />
          </>
        );
      case 19: // Places / Pagoda Roof
        return (
          <>
            <rect width="56" height="56" rx="14" fill="#D1FAE5" />
            <path d="M14 27L28 16L42 27H14Z" fill="#059669" />
            <path d="M17 34L28 25L39 34H17Z" fill="#047857" />
            <rect x="20" y="34" width="16" height="8" rx="1.5" fill="#D97706" />
            <rect x="26" y="36" width="4" height="6" fill="#FEF3C7" />
          </>
        );
      default: // Unit 20: City vs Countryside / Skyline & Tree
        return (
          <>
            <rect width="56" height="56" rx="14" fill="#D1FAE5" />
            <rect x="14" y="19" width="12" height="23" rx="2" fill="#0284C7" />
            <rect x="17" y="23" width="2.5" height="3" fill="#FFFFFF" />
            <rect x="21" y="23" width="2.5" height="3" fill="#FFFFFF" />
            <rect x="17" y="29" width="2.5" height="3" fill="#FFFFFF" />
            <rect x="21" y="29" width="2.5" height="3" fill="#FFFFFF" />
            <circle cx="36" cy="27" r="7" fill="#059669" />
            <rect x="34.5" y="33" width="3" height="9" fill="#92400E" />
          </>
        );
    }
  };

  return (
    <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {renderGlyph()}
    </svg>
  );
};
