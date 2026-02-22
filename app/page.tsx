'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';

/* ── HERO TYPEWRITER PHRASES ─────────────────────── */
const HERO_PHRASES = [
    'that matter.',
    'that shift perspectives.',
    'that solve real problems.',
    'that push boundaries.',
    'that spark change.',
];

/* ── DATA ─────────────────────────────────────────── */

const EXPERIENCES = [
    {
        role: 'Project Intern',
        company: 'Centre for Development of Advanced Computing (C-DAC)',
        location: 'Noida, UP',
        period: 'Jun 2025 – Aug 2025',
        desc: 'Preprocessed and cleaned Bengali language datasets for OCR applications. Implemented image augmentation to improve model robustness. Developed character and word-level detection techniques. Built an Age Detection model using a Caffe pre-trained CNN.',
    },
    {
        role: 'Founding Team',
        company: 'PitchX (Incubated by ACIC-BMU)',
        location: 'Gurugram, HR',
        period: 'Dec 2024 – Nov 2025',
        desc: 'Built a reverse job portal where companies apply to candidates based on AI-evaluated readiness scores. Launched a skills-only professional network with live hiring rooms and smart recruiter filters. Achieved 300+ site visits within one month of soft launch.',
    },
];

const PROJECTS = [
    {
        title: 'Flappy Bird with Nose Detection',
        sub: 'Python, OpenCV — 2024',
        desc: 'A hands-free, AI-controlled game using nose movement as the primary control. Built with OpenCV, MediaPipe, NumPy, and Tkinter for real-time gameplay at 25+ FPS.',
        link: 'github.com/idaxon/Flappy-Bird-with-Nose-Detection-Movement',
        href: 'https://github.com/idaxon/Flappy-Bird-with-Nose-Detection-Movement',
    },
    {
        title: 'BetterTechr',
        sub: 'React.js, Next.js, Supabase — 2025',
        desc: 'A full-stack academic platform connecting students with mentors. Automated matching workflows reduced allocation time by 40%, serving 350+ students and 25+ mentors.',
        link: 'github.com/idaxon/betterteachr',
        href: 'https://github.com/idaxon/betterteachr',
    },
    {
        title: 'Browisify',
        sub: 'Python, NLP — 2025',
        desc: 'A browser history analysis tool that classifies websites as productive or non-productive. Uses TF-IDF, clustering, and KMeans for behavioral analysis and visualization.',
        link: 'github.com/idaxon/Browisify',
        href: 'https://github.com/idaxon/Browisify',
    },
];

const SKILLS = [
    {
        category: 'Programming',
        items: [
            { label: 'Proficient', value: 'C++, Python, CSS, HTML' },
            { label: 'Experienced', value: 'JavaScript, Java' },
            { label: 'Familiar', value: 'SQL, Kotlin' },
        ],
    },
    {
        category: 'Libraries & Frameworks',
        items: [
            { label: '', value: 'NumPy, Pandas, OpenCV, TensorFlow' },
        ],
    },
    {
        category: 'Tools & Platforms',
        items: [
            { label: '', value: 'Git, Anaconda, Jupyter, VS Code, IntelliJ IDEA, CLion' },
        ],
    },
];

const CERTIFICATIONS = [
    {
        title: 'Machine Learning Operations (MLOps) for Generative AI',
        issuer: 'Google Cloud Skills Boost',
    },
    {
        title: 'Generative AI Overview for Project Managers',
        issuer: 'Project Management Institute',
    },
];

const ACHIEVEMENTS = [
    'Finalist — Crack-a-Code 3.0 Hackathon by Nagarro',
    'Top 15 finalist at Ideathon LNM, E-Summit\'25, LNMIIT Jaipur among 300+ teams (Feb 22, 2025)',
];

const PRINCIPLES = [
    {
        num: '01',
        title: '"Real problems deserve real code."',
        body: 'If it does not solve something tangible, it is just practice.',
    },
    {
        num: '02',
        title: '"Data does not lie. Bad analysis does."',
        body: 'The insight is only as good as the question you ask of it.',
    },
    {
        num: '03',
        title: '"Ship it, then make it better."',
        body: 'A working project beats a perfect one that never launches.',
    },
];

const SIGNAL_LINKS = [
    { label: 'GitHub', href: 'https://github.com/idaxon' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/li-daksh' },
    { label: 'Email', href: 'mailto:daksh.mishra.23cse@bmu.edu.in' },
];

/* ── PAGE ─────────────────────────────────────────── */

export default function Home() {
    const [displayText, setDisplayText] = useState('');
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const tick = useCallback(() => {
        const currentPhrase = HERO_PHRASES[phraseIndex];

        if (!isDeleting) {
            // Typing
            setDisplayText(currentPhrase.slice(0, displayText.length + 1));
            if (displayText.length + 1 === currentPhrase.length) {
                // Pause before deleting
                setTimeout(() => setIsDeleting(true), 2000);
                return;
            }
        } else {
            // Deleting
            setDisplayText(currentPhrase.slice(0, displayText.length - 1));
            if (displayText.length - 1 === 0) {
                setIsDeleting(false);
                setPhraseIndex((prev) => (prev + 1) % HERO_PHRASES.length);
                return;
            }
        }
    }, [displayText, phraseIndex, isDeleting]);

    useEffect(() => {
        const speed = isDeleting ? 40 : 70;
        const timer = setTimeout(tick, speed);
        return () => clearTimeout(timer);
    }, [tick, isDeleting]);

    return (
        <main>

            {/* ── HERO ─────────────────────────────── */}
            <section
                className="hero"
                id="hero"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
            >
                <p className="hero-kicker">
                    CS Engineering · BML Munjal University · Gurugram
                </p>
                <h1
                    className="hero-headline"
                    onMouseEnter={() => document.body.setAttribute('data-magic', 'true')}
                    onMouseLeave={() => document.body.removeAttribute('data-magic')}
                    style={{ cursor: 'default' }}
                >
                    I&nbsp;build solutions <br />
                    <span className="typewriter-text">{displayText}</span>
                    <span className="typewriter-cursor">|</span>
                </h1>
                <p className="hero-sub">
                    Building AI tools, Android apps, and real-world software one shipped
                    project at a time. Interested in ML, computer vision, and products
                    people actually use.
                </p>
            </section>

            {/* ── EXPERIENCE ───────────────────────── */}
            <section id="experience">
                <p className="section-label">Experience</p>
                <p className="about-name">Daksh Mishra</p>
                <p className="about-tagline">
                    CSE Student · Aug 2023 – Aug 2027 · CGPA 6.15 / 10
                </p>
                <div className="exp-list">
                    {EXPERIENCES.map((exp) => (
                        <div className="exp-item" key={exp.role + exp.company}>
                            <div className="exp-meta">
                                <span className="exp-role">{exp.role}</span>
                                <span className="exp-period" style={{ marginBottom: '0.15rem' }}>
                                    {exp.company}
                                </span>
                                <span className="exp-period">{exp.period}</span>
                            </div>
                            <p className="exp-desc">{exp.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── PROJECTS ─────────────────────────── */}
            <section id="work">
                <p className="section-label">Selected work</p>
                <div className="work-list">
                    {PROJECTS.map((p) => (
                        <a
                            className="work-item"
                            key={p.title}
                            href={p.href}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div>
                                <div className="work-item-title">{p.title}</div>
                                <div className="work-item-sub">{p.sub}</div>
                                <p className="work-item-desc">{p.desc}</p>
                            </div>
                            <div className="work-item-link">
                                {p.link}&nbsp;<span className="work-arrow">&#8599;</span>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            {/* ── SKILLS ───────────────────────────── */}
            <section id="skills">
                <p className="section-label">Skills</p>
                <div className="exp-list">
                    {SKILLS.map((s) => (
                        <div className="exp-item" key={s.category}>
                            <div className="exp-meta">
                                <span className="exp-role">{s.category}</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                                {s.items.map((item) => (
                                    <p className="exp-desc" key={item.value} style={{ marginBottom: 0 }}>
                                        {item.label && (
                                            <span style={{ color: 'var(--text-dimmer)', marginRight: '0.5rem' }}>
                                                {item.label}
                                            </span>
                                        )}
                                        {item.value}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── CERTIFICATIONS ───────────────────── */}
            <section id="certifications">
                <p className="section-label">Certifications</p>
                <div className="work-list">
                    {CERTIFICATIONS.map((c) => (
                        <div
                            className="work-item"
                            key={c.title}
                            style={{ cursor: 'default', display: 'block' }}
                        >
                            <div className="work-item-title">{c.title}</div>
                            <div className="work-item-sub">{c.issuer}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── ACHIEVEMENTS ─────────────────────── */}
            <section id="achievements">
                <p className="section-label">Achievements</p>
                <div className="principles-list">
                    {ACHIEVEMENTS.map((a) => (
                        <div className="principle-item" key={a}>
                            <p className="principle-body" style={{ color: 'var(--text)' }}>
                                &#8212;&nbsp;{a}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── PHILOSOPHY ───────────────────────── */}
            <section id="philosophy">
                <p className="section-label">Philosophy</p>
                <div className="principles-list">
                    {PRINCIPLES.map((p) => (
                        <div className="principle-item" key={p.num}>
                            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'baseline' }}>
                                <span
                                    style={{
                                        fontFamily: 'var(--font)',
                                        fontSize: '0.72rem',
                                        color: 'var(--text-dimmer)',
                                        flexShrink: 0,
                                        letterSpacing: '0.06em',
                                    }}
                                >
                                    {p.num}
                                </span>
                                <div>
                                    <h2 className="principle-title">{p.title}</h2>
                                    <p className="principle-body">{p.body}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── INTERESTS ────────────────────────── */}
            <section id="interests">
                <p className="section-label">Interests</p>
                <div className="exp-item" style={{ border: 'none', padding: 0 }}>
                    <p className="exp-desc" style={{ color: 'var(--text-dim)' }}>
                        Real-world problem-solving with code&nbsp;&nbsp;·&nbsp;&nbsp;Writing
                        Songs&nbsp;&nbsp;·&nbsp;&nbsp;Playing with Data
                    </p>
                </div>
            </section>

            {/* ── SIGNAL / CONTACT ─────────────────── */}
            <section id="signal">
                <p className="section-label">Signal</p>
                <h2 className="signal-heading">Daksh Mishra</h2>
                <p className="signal-sub">
                    Building something that matters? Let&apos;s talk.
                </p>
                <a
                    className="signal-email"
                    href="mailto:daksh.mishra.23cse@bmu.edu.in"
                >
                    daksh.mishra.23cse@bmu.edu.in
                </a>
                <div className="signal-links">
                    {SIGNAL_LINKS.map((l) => (
                        <a
                            key={l.label}
                            className="signal-link"
                            href={l.href}
                            target={l.href.startsWith('http') ? '_blank' : undefined}
                            rel="noopener noreferrer"
                        >
                            {l.label}
                        </a>
                    ))}
                    <a className="signal-link" href="tel:+919691639268">
                        +91 96916 39268
                    </a>
                </div>
            </section>

            {/* ── FOOTER ───────────────────────────── */}
            <footer className="footer">
                <span className="footer-copy">&#169; 2025 Daksh Mishra</span>
                <div className="footer-nav">
                    <Link href="/portfolio" className="footer-link">Portfolio</Link>
                    <Link href="/playbook" className="footer-link">Engineering Playbook</Link>
                    <Link href="/blueprint" className="footer-link">Change Blueprint</Link>
                </div>
            </footer>

        </main>
    );
}
