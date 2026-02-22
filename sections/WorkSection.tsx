'use client';

import { useEffect, useRef } from 'react';

const PROJECTS = [
    {
        title: 'Velour Studio',
        tag: 'Creative Direction',
        year: '2024',
        color: '#1a1a2e',
        accent: '#00d4ff',
    },
    {
        title: 'Fold+Form',
        tag: 'Web Experience',
        year: '2024',
        color: '#16213e',
        accent: '#ff6b35',
    },
    {
        title: 'Nomad OS',
        tag: 'Product Design',
        year: '2023',
        color: '#0f3460',
        accent: '#00d4ff',
    },
    {
        title: 'Meridian',
        tag: 'Three.js / WebGL',
        year: '2023',
        color: '#1a0a2e',
        accent: '#b06ef3',
    },
    {
        title: 'Tactile',
        tag: 'Full-Stack App',
        year: '2022',
        color: '#0a1628',
        accent: '#ff6b35',
    },
];

export default function WorkSection() {
    const trackRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const initGSAP = async () => {
            const gsap = (await import('gsap')).default;
            const ScrollTrigger = (await import('gsap/ScrollTrigger')).default;
            gsap.registerPlugin(ScrollTrigger);

            const track = trackRef.current;
            const wrapper = wrapperRef.current;
            if (!track || !wrapper) return;

            const totalScrollWidth = track.scrollWidth - wrapper.clientWidth;

            gsap.to(track, {
                x: -totalScrollWidth,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: () => `+=${totalScrollWidth + 200}`,
                    pin: true,
                    scrub: 1.2,
                    invalidateOnRefresh: true,
                },
            });

            // Cards stagger reveal
            gsap.fromTo('.work-card',
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        once: true,
                    },
                }
            );
        };

        initGSAP();
    }, []);

    // Magnetic effect on buttons
    const handleMagneticMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const btn = e.currentTarget;
        const rect = btn.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        btn.style.transform = `translate(${dx * 0.28}px, ${dy * 0.28}px)`;
    };

    const handleMagneticLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.style.transform = 'translate(0, 0)';
    };

    return (
        <section className="work" id="work" ref={sectionRef}>
            <div className="work-header">
                <div>
                    <div className="section-number">02 — Selected Work</div>
                    <h2 className="work-title">Projects</h2>
                </div>
                <span className="work-scroll-note">← drag to explore</span>
            </div>

            <div className="work-track-wrapper" ref={wrapperRef}>
                <div className="work-track" ref={trackRef}>
                    {PROJECTS.map((p, i) => (
                        <div
                            className="work-card"
                            key={p.title}
                            data-hover
                        >
                            <div
                                className="work-card-bg"
                                style={{ background: `radial-gradient(ellipse at center, ${p.accent}33 0%, ${p.color} 70%)` }}
                            />
                            <span className="work-card-num">{String(i + 1).padStart(2, '0')}</span>
                            <div className="work-card-content">
                                <div className="work-card-tag">{p.tag}</div>
                                <h3 className="work-card-title">{p.title}</h3>
                                <div className="work-card-year">{p.year}</div>
                                <button
                                    className="magnetic-btn"
                                    onMouseMove={handleMagneticMove}
                                    onMouseLeave={handleMagneticLeave}
                                    data-hover
                                >
                                    View Project →
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
