import { createElement, useEffect, useRef, useState } from 'react';
import type { ElementType, ReactNode } from 'react';

type RevealProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: 'up' | 'left' | 'right' | 'scale' | 'blur';
} & Record<string, unknown>;

const Reveal = ({
  as = 'div',
  children,
  className = '',
  delay = 0,
  variant = 'up',
  ...rest
}: RevealProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.2,
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return createElement(
    as,
    {
      ...rest,
      ref,
      className: `reveal reveal-${variant} ${visible ? 'is-visible' : ''} ${className}`.trim(),
      style: { ['--reveal-delay' as string]: `${delay}ms` },
    },
    children,
  );
};

export default Reveal;
