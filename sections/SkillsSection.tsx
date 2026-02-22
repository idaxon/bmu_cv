'use client';

import { useEffect, useRef } from 'react';

const SKILLS = [
    // Layer 1 — front, accent
    { text: 'Three.js', layer: 1, x: '12%', y: '15%', size: '1rem' },
    { text: 'React', layer: 1, x: '55%', y: '8%', size: '1.1rem' },
    { text: 'GSAP', layer: 1, x: '30%', y: '55%', size: '1rem' },
    { text: 'WebGL', layer: 1, x: '70%', y: '62%', size: '1rem' },
    { text: 'Next.js', layer: 1, x: '80%', y: '20%', size: '1.1rem' },

    // Layer 2 — mid
    { text: 'TypeScript', layer: 2, x: '5%', y: '50%', size: '0.85rem' },
    { text: 'Framer Motion', layer: 2, x: '42%', y: '28%', size: '0.88rem' },
    { text: 'Node.js', layer: 2, x: '60%', y: '40%', size: '0.9rem' },
    { text: 'Figma', layer: 2, x: '20%', y: '78%', size: '0.85rem' },
    { text: 'R3F', layer: 2, x: '85%', y: '75%', size: '0.85rem' },
    { text: 'CSS / SCSS', layer: 2, x: '48%', y: '72%', size: '0.85rem' },

    // Layer 3 — back, muted
    { text: 'PostgreSQL', layer: 3, x: '8%', y: '30%', size: '0.75rem' },
    { text: 'Docker', layer: 3, x: '75%', y: '10%', size: '0.75rem' },
    { text: 'Git', layer: 3, x: '35%', y: '88%', size: '0.75rem' },
    { text: 'REST APIs', layer: 3, x: '90%', y: '48%', size: '0.75rem' },
    { text: 'Vercel', layer: 3, x: '18%', y: '40%', size: '0.75rem' },
];

export default function SkillsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const tagsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initGSAP = async () => {
            const gsap = (await import('gsap')).default;
            const ScrollTrigger = (await import('gsap/ScrollTrigger')).default;
            gsap.registerPlugin(ScrollTrigger);

            const tags = tagsRef.current?.querySelectorAll('.skill-tag');
            if (!tags || !sectionRef.current) return;

            // Parallax float on scroll for each tag
            tags.forEach((tag) => {
                const layer = parseInt((tag as HTMLElement).dataset.layer || '1');
                const speed = layer === 1 ? 0.06 : layer === 2 ? 0.03 : 0.01;

                gsap.to(tag, {
                    yPercent: -(layer * 18),
                    ease: 'none',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: true,
                    },
                });
            });

            // Stagger reveal on enter
            gsap.fromTo(
                tags,
                { opacity: 0, y: 25 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: { each: 0.06, from: 'random' },
                    duration: 0.7,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
                        once: true,
                    },
                }
            );
        };

        initGSAP();
    }, []);

    return (
        <section className="skills" id="skills" ref={sectionRef}>
            <div className="skills-header">
                <div className="section-number">03 — Capabilities</div>
                <h2 className="skills-title">Skills &<br />Stack</h2>
            </div>

            <div className="skills-cloud" ref={tagsRef}>
                {SKILLS.map((skill) => (
                    <span
                        key={skill.text}
                        className="skill-tag"
                        data-layer={skill.layer}
                        data-hover
                        style={{
                            left: skill.x,
                            top: skill.y,
                            '--tag-size': skill.size,
                        } as React.CSSProperties}
                    >
                        {skill.text}
                    </span>
                ))}
            </div>
        </section>
    );
}
