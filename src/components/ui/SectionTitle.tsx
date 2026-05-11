import type {ReactNode} from 'react';

export type SectionTitleProps = {
  eyebrow: string;
  title: ReactNode;
  desc?: ReactNode;
  centered?: boolean;
  id?: string;
  tone?: 'light' | 'dark';
};

export function SectionTitle({
  eyebrow,
  title,
  desc,
  centered = true,
  id,
  tone = 'light',
}: SectionTitleProps) {
  const titleClass = tone === 'dark' ? 'text-white' : 'text-brand';
  const descClass = tone === 'dark' ? 'text-white/65' : 'book-text';
  const eyebrowClass = tone === 'dark' ? 'text-accent' : 'technical-label';
  return (
    <div className={`mb-8 sm:mb-10 ${centered ? 'text-center' : 'text-left'}`}>
      <div className={`flex items-center gap-3 mb-3 sm:mb-4 ${centered ? 'justify-center' : 'justify-start'}`}>
        <div className="accent-rule" aria-hidden="true" />
        <span className={eyebrowClass}>{eyebrow}</span>
        <div className={`accent-rule ${centered ? 'block' : 'hidden'}`} aria-hidden="true" />
      </div>
      <h2
        id={id}
        className={`text-[1.85rem] sm:text-3xl lg:text-4xl font-display font-semibold ${titleClass} leading-[1.08] tracking-tight mb-4 max-w-4xl ${centered ? 'mx-auto' : ''}`}
      >
        {title}
      </h2>
      {desc != null && (
        <p className={`${descClass} text-sm sm:text-base ${centered ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}>{desc}</p>
      )}
    </div>
  );
}
