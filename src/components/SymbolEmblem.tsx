import type {SymbolVisualKey} from '../data/reelArchiveData.ts';

interface SymbolEmblemProps {
  visualKey: SymbolVisualKey;
  className?: string;
}

export function SymbolEmblem({visualKey, className = 'w-14 h-14'}: SymbolEmblemProps) {
  const strokeGold = '#C6A45A';
  const strokeLight = '#E8D29A';

  return (
    <div
      className={`relative flex items-center justify-center rounded-sm border border-[#C6A45A]/35 bg-gradient-to-br from-[#092A21] via-[#09271E] to-[#080B09] p-2.5 shadow-inner ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <circle cx="32" cy="32" r="28" stroke={strokeGold} strokeOpacity="0.22" strokeWidth="1" />
        {visualKey === 'whale' && (
          <g stroke={strokeLight} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 35c0-10 9-17 21-17 10 0 17 5 19 13 1 4-2 8-7 8H24c-6 0-11-1-14-4Z" />
            <path d="M47 36c4 0 8-3 9-7-3 0-5 1-7 3-1-3-3-5-6-5 2 3 2 6 0 9" />
            <path d="M29 18c0-4-3-7-6-7m6 7c1-4 4-7 7-7" stroke={strokeGold} />
            <circle cx="20" cy="30" r="1.4" fill={strokeLight} />
            <path d="M12 45c6 2 13 2 19 0 7-2 13-2 21 0" stroke={strokeGold} strokeOpacity="0.7" />
          </g>
        )}
        {visualKey === 'shark' && (
          <g stroke={strokeLight} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 36c6-7 15-10 25-9l5-10 5 10c6 1 11 4 13 8-4 4-10 5-16 5H21c-5 0-9-1-12-4Z" />
            <path d="M51 35l6-5-2 7 2 6-6-4" />
            <path d="M24 34v3m4-3v3m4-3v3" stroke={strokeGold} />
            <circle cx="19" cy="32" r="1.3" fill={strokeLight} />
          </g>
        )}
        {visualKey === 'turtle' && (
          <g stroke={strokeLight} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <ellipse cx="32" cy="33" rx="13" ry="15" />
            <path d="M32 18v30M19 33h26M23 23l18 20M41 23L23 43" stroke={strokeGold} />
            <path d="M28 18c0-4 2-7 4-7s4 3 4 7" />
            <path d="M19 25c-4-2-7-1-8 2 2 2 5 3 8 2m26-4c4-2 7-1 8 2-2 2-5 3-8 2" />
            <path d="M22 45c-3 3-4 6-2 8 3 0 5-2 6-5m16-3c3 3 4 6 2 8-3 0-5-2-6-5" />
          </g>
        )}
        {visualKey === 'tropical-fish' && (
          <g stroke={strokeLight} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 32c6-9 17-12 27-7l9-6v26l-9-6c-10 5-21 2-27-7Z" />
            <path d="M26 22c3 6 3 14 0 20M34 23c2 5 2 13 0 18" stroke={strokeGold} />
            <circle cx="21" cy="30" r="1.5" fill={strokeLight} />
          </g>
        )}
        {visualKey === 'coral' && (
          <g stroke={strokeLight} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M32 50V20m0 18l-11-9v-8m11 11l11-8v-7m-11 22l-8 5m8-5l9 4" />
            <circle cx="21" cy="20" r="2.2" stroke={strokeGold} />
            <circle cx="32" cy="17" r="2.2" stroke={strokeGold} />
            <circle cx="43" cy="16" r="2.2" stroke={strokeGold} />
            <path d="M16 50h32" stroke={strokeGold} />
          </g>
        )}
        {visualKey === 'gold-bar' && (
          <g stroke={strokeLight} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 40l6-14h24l6 14H14Z" />
            <path d="M20 26l4-6h16l4 6" stroke={strokeGold} />
            <path d="M24 33h16" stroke={strokeGold} />
            <path d="M18 46h28" stroke={strokeGold} strokeOpacity="0.6" />
          </g>
        )}
        {visualKey === 'coin' && (
          <g stroke={strokeLight} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="32" cy="32" r="17" />
            <circle cx="32" cy="32" r="12.5" stroke={strokeGold} strokeDasharray="3 2" />
            <rect x="27" y="27" width="10" height="10" stroke={strokeLight} />
          </g>
        )}
        {visualKey === 'lucky-pouch' && (
          <g stroke={strokeLight} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M24 22l-3-7h22l-3 7" />
            <path d="M22 24c-6 5-8 14-4 20 4 5 24 5 28 0 4-6 2-15-4-20H22Z" />
            <path d="M21 24h22" stroke={strokeGold} />
            <path d="M32 30v12m-5-6h10" stroke={strokeGold} />
          </g>
        )}
        {visualKey === 'golden-palace' && (
          <g stroke={strokeLight} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 28c7 0 13-4 19-10 6 6 12 10 19 10H13Z" />
            <path d="M18 28v18m9-18v18m10-18v18m9-18v18" stroke={strokeGold} />
            <path d="M12 46h40M28 46v-9a4 4 0 0 1 8 0v9" />
            <path d="M32 13v5" stroke={strokeGold} />
          </g>
        )}
        {visualKey === 'lamp' && (
          <g stroke={strokeLight} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 39c4 5 11 7 18 7 8 0 13-4 17-10l-9 1c-2-5-7-8-13-8-5 0-10 3-13 10Z" />
            <path d="M16 39c-4 0-6-4-4-8 2-3 6-2 7 1" stroke={strokeGold} />
            <path d="M26 46l-3 5h16l-3-5" />
            <path d="M47 26c2-4 0-8-3-10" stroke={strokeGold} />
          </g>
        )}
        {visualKey === 'gem' && (
          <g stroke={strokeLight} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="21,18 43,18 52,29 32,50 12,29" />
            <path d="M12 29h40M21 18l5 11 6 21 6-21 5-11" stroke={strokeGold} />
          </g>
        )}
        {visualKey === 'carpet' && (
          <g stroke={strokeLight} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 38c9-9 19-4 28-14l9 6c-9 10-19 5-28 14l-9-6Z" />
            <path d="M22 36l16-8" stroke={strokeGold} />
            <path d="M14 38l-4 3m13 3l-4 3m32-17l4-3m-13-3l4-3" stroke={strokeGold} />
          </g>
        )}
        {visualKey === 'crown' && (
          <g stroke={strokeLight} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 43l-3-19 11 9 10-15 10 15 11-9-3 19H14Z" />
            <path d="M14 48h36" stroke={strokeGold} />
            <circle cx="32" cy="16" r="2" fill={strokeGold} stroke="none" />
          </g>
        )}
        {visualKey === 'son-ogong' && (
          <g stroke={strokeLight} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="32" cy="34" r="13" />
            <path d="M19 25c2-4 7-6 13-6s11 2 13 6" stroke={strokeGold} strokeWidth="2.2" />
            <path d="M25 22c3-4 11-4 14 0" stroke={strokeGold} />
            <path d="M26 34h4m4 0h4M27 41c3 2 7 2 10 0" />
          </g>
        )}
        {visualKey === 'yeouibong' && (
          <g stroke={strokeLight} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 49L49 15" strokeWidth="2.6" />
            <path d="M19 41l4 4m18-26l4 4" stroke={strokeGold} strokeWidth="2.2" />
            <circle cx="14" cy="50" r="2.2" stroke={strokeGold} />
            <circle cx="50" cy="14" r="2.2" stroke={strokeGold} />
          </g>
        )}
        {visualKey === 'cloud' && (
          <g stroke={strokeLight} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 41h30a8 8 0 0 0 1-16 11 11 0 0 0-21-3 9 9 0 0 0-10 19Z" />
            <path d="M20 47h24" stroke={strokeGold} />
          </g>
        )}
        {visualKey === 'samjang' && (
          <g stroke={strokeLight} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 26l12-10 12 10v4H20v-4Z" stroke={strokeGold} />
            <circle cx="32" cy="37" r="8" />
            <path d="M18 51c3-5 8-7 14-7s11 2 14 7" />
          </g>
        )}
        {visualKey === 'cherry' && (
          <g stroke={strokeLight} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="23" cy="42" r="7" />
            <circle cx="41" cy="44" r="7" />
            <path d="M24 35c2-10 7-17 14-21M40 37c-1-9-1-16-2-23" stroke={strokeGold} />
            <path d="M38 14c5 0 9 3 10 7-5 1-9-2-10-7Z" stroke={strokeGold} />
          </g>
        )}
        {visualKey === 'watermelon' && (
          <g stroke={strokeLight} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 27a19 19 0 0 0 38 0H13Z" />
            <path d="M17 27a15 15 0 0 0 30 0" stroke={strokeGold} />
            <circle cx="27" cy="33" r="1.2" fill={strokeLight} stroke="none" />
            <circle cx="32" cy="36" r="1.2" fill={strokeLight} stroke="none" />
            <circle cx="37" cy="33" r="1.2" fill={strokeLight} stroke="none" />
          </g>
        )}
        {visualKey === 'bell' && (
          <g stroke={strokeLight} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 39c0-11 5-19 12-19s12 8 12 19l4 4H16l4-4Z" />
            <circle cx="32" cy="17" r="2.5" stroke={strokeGold} />
            <path d="M28 43a4 4 0 0 0 8 0" stroke={strokeGold} />
          </g>
        )}
        {visualKey === 'seven' && (
          <g stroke={strokeLight} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 20h24L28 47" />
            <path d="M22 25h17" stroke={strokeGold} strokeWidth="1.4" />
          </g>
        )}
        {visualKey === 'ship' && (
          <g stroke={strokeLight} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 40h40l-5 8H17l-5-8Z" />
            <path d="M32 40V16m0 2l13 14H32m0-10l-11 10h11" stroke={strokeGold} />
          </g>
        )}
        {visualKey === 'compass' && (
          <g stroke={strokeLight} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="32" cy="32" r="17" />
            <polygon points="32,19 36,32 32,45 28,32" stroke={strokeGold} />
            <circle cx="32" cy="32" r="2" fill={strokeLight} />
          </g>
        )}
        {visualKey === 'star' && (
          <g stroke={strokeLight} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="32,14 36.5,26.5 50,27 39.5,35.5 43,48 32,40.5 21,48 24.5,35.5 14,27 27.5,26.5" />
            <circle cx="32" cy="32" r="3.5" stroke={strokeGold} />
          </g>
        )}
      </svg>
    </div>
  );
}
