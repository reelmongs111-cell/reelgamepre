import {useEffect, useState} from 'react';
import {ArrowUp} from 'lucide-react';

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 420);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
      aria-label="페이지 상단으로 이동"
      className="fixed bottom-6 right-6 z-30 flex h-11 items-center gap-1.5 border border-[#C6A45A] bg-[#09271E]/95 px-3.5 text-xs font-semibold tracking-widest text-[#E8D29A] shadow-lg backdrop-blur-sm transition-colors hover:bg-[#104333] cursor-pointer"
    >
      <ArrowUp className="h-3.5 w-3.5" />
      <span>TOP</span>
    </button>
  );
}
