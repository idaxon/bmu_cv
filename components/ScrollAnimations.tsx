'use client';

import { useEffect } from 'react';

export default function ScrollAnimations() {
    useEffect(() => {
        let ctx: any;

        const init = async () => {
            const gsapModule = await import('gsap');
            const gsap = gsapModule.default;
            const stModule = await import('gsap/ScrollTrigger');
            const ScrollTrigger = stModule.default;
            gsap.registerPlugin(ScrollTrigger);

            ctx = gsap.context(() => {
                /* ── Section entrance animations ─────────────── */
                gsap.utils.toArray<HTMLElement>('section').forEach((section) => {
                    gsap.fromTo(
                        section,
                        { y: 30, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.7,
                            ease: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
                            scrollTrigger: {
                                trigger: section,
                                start: 'top 88%',
                                toggleActions: 'play none none reverse',
                            },
                        }
                    );
                });

                /* ── Text reveal on headings ─────────────────── */
                const revealTargets = document.querySelectorAll(
                    '.hero-headline, .section-label, .signal-heading, .about-name, .principle-title'
                );

                revealTargets.forEach((el) => {
                    const text = el.textContent || '';
                    const html = el.innerHTML;

                    // Only process text nodes — skip if already wrapped
                    if (el.querySelector('.word-wrap')) return;

                    // Split into words, preserve HTML tags
                    const words = text.split(/\s+/).filter(Boolean);
                    el.innerHTML = words
                        .map(
                            (word) =>
                                `<span class="word-wrap" style="display:inline-block;overflow:hidden;vertical-align:top;"><span class="word-inner" style="display:inline-block;transform:translateY(100%);opacity:0;">${word}</span></span>`
                        )
                        .join(' ');

                    const wordInners = el.querySelectorAll('.word-inner');
                    gsap.to(wordInners, {
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        stagger: 0.04,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 85%',
                            toggleActions: 'play none none none',
                        },
                    });
                });

                /* ── Staggered list items ────────────────────── */
                const staggerGroups = ['.exp-item', '.work-item', '.principle-item'];
                staggerGroups.forEach((selector) => {
                    const items = gsap.utils.toArray<HTMLElement>(selector);
                    if (!items.length) return;

                    items.forEach((item, i) => {
                        gsap.fromTo(
                            item,
                            { y: 20, opacity: 0 },
                            {
                                y: 0,
                                opacity: 1,
                                duration: 0.55,
                                delay: i * 0.08,
                                ease: 'power3.out',
                                scrollTrigger: {
                                    trigger: item,
                                    start: 'top 90%',
                                    toggleActions: 'play none none none',
                                },
                            }
                        );
                    });
                });

                /* ── Hero parallax ───────────────────────────── */
                const hero = document.querySelector('.hero');
                if (hero) {
                    gsap.to(hero, {
                        yPercent: 12,
                        ease: 'none',
                        scrollTrigger: {
                            trigger: hero,
                            start: 'top top',
                            end: 'bottom top',
                            scrub: 0.5,
                        },
                    });
                }

                /* ── Signal links stagger ────────────────────── */
                const signalLinks = gsap.utils.toArray<HTMLElement>('.signal-link');
                if (signalLinks.length) {
                    gsap.fromTo(
                        signalLinks,
                        { y: 12, opacity: 0 },
                        {
                            y: 0,
                            opacity: 1,
                            duration: 0.5,
                            stagger: 0.06,
                            ease: 'power3.out',
                            scrollTrigger: {
                                trigger: '.signal-links',
                                start: 'top 90%',
                                toggleActions: 'play none none none',
                            },
                        }
                    );
                }

                /* ── Footer subtle entrance ──────────────────── */
                const footer = document.querySelector('footer');
                if (footer) {
                    gsap.fromTo(
                        footer,
                        { opacity: 0 },
                        {
                            opacity: 1,
                            duration: 0.8,
                            ease: 'power2.out',
                            scrollTrigger: {
                                trigger: footer,
                                start: 'top 95%',
                                toggleActions: 'play none none none',
                            },
                        }
                    );
                }
            });
        };

        init();

        return () => {
            if (ctx) ctx.revert();
        };
    }, []);

    return null;
}
