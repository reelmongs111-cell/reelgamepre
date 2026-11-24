import {ArrowUpRight} from 'lucide-react';

export const REELKINGS_URL = 'https://reelkings.kr';

interface DirectShortcutButtonProps {
  size?: 'hero' | 'section' | 'header' | 'drawer';
  className?: string;
}

export function DirectShortcutButton({
  size = 'section',
  className = '',
}: DirectShortcutButtonProps) {
  const sizeStyles: Record<NonNullable<DirectShortcutButtonProps['size']>, string> = {
    hero: 'min-h-[62px] px-9 py-4 text-lg sm:text-xl tracking-wide',
    section: 'min-h-[48px] px-6 py-3 text-base tracking-wide',
    header: 'min-h-[40px] px-4 py-2 text-xs sm:text-sm tracking-wide',
    drawer: 'min-h-[52px] w-full justify-center px-5 py-3.5 text-base tracking-wide',
  };

  return (
    <a
      href={REELKINGS_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 border border-[#E8D29A] bg-gradient-to-r from-[#C6A45A] to-[#E8D29A] font-bold text-[#080B09] shadow-sm transition-all duration-200 hover:brightness-105 whitespace-nowrap shrink-0 ${sizeStyles[size]} ${className}`}
    >
      <span>릴게임 바로가기</span>
      <ArrowUpRight className={size === 'hero' ? 'h-5 w-5' : 'h-4 w-4'} />
    </a>
  );
}
