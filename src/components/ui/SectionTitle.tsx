import type {ReactNode} from 'react';

export type SectionTitleProps = {
  eyebrow: string;
  title: ReactNode;
  desc?: ReactNode;
  centered?: boolean;
  id?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  desc,
  centered = true,
  id,
}: SectionTitleProps) {
  return (
    <div className={`mb-16 sm:mb-24 ${centered ? 'text-center' : 'text-left'}`}>
      <div className={`flex items-center gap-4 mb-8 ${centered ? 'justify-center' : 'justify-start'}`}>
        <div className="accent-rule" aria-hidden="true" />
        <span className="technical-label">{eyebrow}</span>
        <div className={`accent-rule ${centered ? 'block' : 'hidden'}`} aria-hidden="true" />
      </div>
      <h2
        id={id}
        className={`text-3xl sm:text-5xl lg:text-6xl font-display font-semibold text-brand leading-[1.1] tracking-tight mb-8 max-w-4xl ${centered ? 'mx-auto' : ''}`}
      >
        {title}
      </h2>
      {desc != null && (
        <p className={`book-text ${centered ? 'max-w-3xl mx-auto' : 'max-w-2xl'}`}>{desc}</p>
      )}
    </div>
  );
}
