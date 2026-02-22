'use client';

import { useEffect, useRef } from 'react';

export default function ContactSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const underlineRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const initGSAP = async () => {
            const gsap = (await import('gsap')).default;
            const ScrollTrigger = (await import('gsap/ScrollTrigger')).default;
            gsap.registerPlugin(ScrollTrigger);

            const section = sectionRef.current;
            const underline = underlineRef.current;
            if (!section || !underline) return;

            const line = underline.querySelector('line');

            // Clip-path reveal for the contact text block
            gsap.fromTo(
                section.querySelector('.contact-inner'),
                { clipPath: 'inset(0 100% 0 0)' },
                {
                    clipPath: 'inset(0 0% 0 0)',
                    duration: 1.2,
                    ease: 'power3.inOut',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 65%',
                        once: true,
                    },
                }
            );

            // SVG underline draw-on
            if (line) {
                gsap.fromTo(
                    line,
                    { strokeDashoffset: 2000 },
                    {
                        strokeDashoffset: 0,
                        duration: 1.4,
                        ease: 'power2.inOut',
                        scrollTrigger: {
                            trigger: section,
                            start: 'top 55%',
                            once: true,
                        },
                    }
                );
            }
        };

        initGSAP();
    }, []);

    return (
        <section className="contact" id="contact" ref={sectionRef}>
            <div className="contact-inner">
                <p className="contact-intro">04 — Get in touch</p>

                <div className="contact-link-wrap" data-hover>
                    <a
                        className="contact-link"
                        href="mailto:hello@yourdomain.com"
                        data-hover
                    >
                        hello@yourdomain.com
                    </a>
                    <svg
                        ref={underlineRef}
                        className="contact-underline"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        style={{ width: '100%', height: '4px' }}
                    >
                        <line
                            x1="0"
                            y1="2"
                            x2="2000"
                            y2="2"
                            stroke="#00d4ff"
                            strokeWidth="2"
                            strokeDasharray="2000"
                            strokeDashoffset="2000"
                        />
                    </svg>
                </div>

                <div className="contact-meta">
                    <div className="contact-meta-item">
                        <span className="contact-meta-label">Location</span>
                        <span className="contact-meta-val">Remote / Worldwide</span>
                    </div>
                    <div className="contact-meta-item">
                        <span className="contact-meta-label">Availability</span>
                        <span className="contact-meta-val" style={{ color: '#00d4ff' }}>Open to work</span>
                    </div>
                    <div className="contact-meta-item">
                        <span className="contact-meta-label">Socials</span>
                        <span className="contact-meta-val">
                            <a href="https://github.com" target="_blank" rel="noopener" data-hover>GitHub</a>
                            {' · '}
                            <a href="https://twitter.com" target="_blank" rel="noopener" data-hover>Twitter</a>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
