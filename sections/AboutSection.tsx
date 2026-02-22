'use client';

import { useEffect, useRef } from 'react';

export default function AboutSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const labelRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initGSAP = async () => {
            const gsap = (await import('gsap')).default;
            const ScrollTrigger = (await import('gsap/ScrollTrigger')).default;
            gsap.registerPlugin(ScrollTrigger);

            const section = sectionRef.current;
            const label = labelRef.current;
            const content = contentRef.current;
            if (!section || !label || !content) return;

            // Label rotates in from left
            gsap.fromTo(label,
                { opacity: 0, x: -80, rotate: 5 },
                {
                    opacity: 1,
                    x: 0,
                    rotate: 0,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 75%',
                        end: 'top 30%',
                        scrub: false,
                        once: true,
                    },
                }
            );

            // Content clips in from below
            gsap.fromTo(content,
                { opacity: 0, clipPath: 'inset(0 0 100% 0)', y: 30 },
                {
                    opacity: 1,
                    clipPath: 'inset(0 0 0% 0)',
                    y: 0,
                    duration: 1.1,
                    ease: 'power3.inOut',
                    delay: 0.2,
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 70%',
                        once: true,
                    },
                }
            );
        };

        initGSAP();
    }, []);

    return (
        <section className="about" id="about" ref={sectionRef}>
            <div className="about-label-col">
                <div className="about-label" ref={labelRef}>ABOUT</div>
            </div>

            <div className="about-content" ref={contentRef}>
                <div className="section-number">01 — About</div>

                <h2 className="about-title">
                    Turning <em>ideas</em> into<br />
                    interactive reality.
                </h2>

                <p className="about-bio">
                    I'm a creative developer with 5+ years crafting digital experiences
                    at the intersection of design and engineering. I obsess over the
                    details — the micro-animation that makes something feel alive,
                    the layout that feels inevitable. Currently open to select freelance
                    and full-time opportunities.
                </p>

                <div className="about-stats">
                    <div className="stat">
                        <span className="stat-num">5+</span>
                        <span className="stat-label">Years exp.</span>
                    </div>
                    <div className="stat">
                        <span className="stat-num">40+</span>
                        <span className="stat-label">Projects</span>
                    </div>
                    <div className="stat">
                        <span className="stat-num">12</span>
                        <span className="stat-label">Awards</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
