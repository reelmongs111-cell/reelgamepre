import {useState} from 'react';
import {Compass} from 'lucide-react';

interface ArchiveImageProps {
  src: string;
  alt: string;
  caption?: string;
  aspectClassName?: string;
  imgClassName?: string;
  eager?: boolean;
}

export function ArchiveImage({
  src,
  alt,
  caption,
  aspectClassName = 'aspect-[4/3]',
  imgClassName = '',
  eager = false,
}: ArchiveImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className="group">
      <div
        className={`relative overflow-hidden border border-[#34463B] bg-[#09271E]/60 ${aspectClassName}`}
      >
        {!hasError ? (
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            loading={eager ? 'eager' : 'lazy'}
            onError={() => setHasError(true)}
            className={`h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] ${imgClassName}`}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#09271E] via-[#104333]/60 to-[#080B09] p-6 text-center">
            <Compass className="mb-3 h-8 w-8 text-[#C6A45A]" />
            <p className="font-display text-lg tracking-wider text-[#E8D29A]">REEL ARCHIVE</p>
            <p className="mt-1 max-w-xs text-xs text-[#A9B2AA]">{alt}</p>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080B09]/45 via-transparent to-transparent" />
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-xs leading-relaxed text-[#A9B2AA] italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
