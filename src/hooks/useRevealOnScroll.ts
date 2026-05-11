import {useEffect} from 'react';

/**
 * Ativa a classe `.visible` em elementos `.reveal` quando entram na viewport.
 */
export function useRevealOnScroll() {
  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
