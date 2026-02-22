'use client';

import Link from 'next/link';

const PRINCIPLES = [
    {
        num: '01',
        title: 'Ship early, iterate always',
        body: 'A working project beats a perfect one that never launches. Get feedback, then improve.',
    },
    {
        num: '02',
        title: 'Data over opinions',
        body: 'Let the data guide decisions. Bad analysis is worse than no analysis — ask better questions.',
    },
    {
        num: '03',
        title: 'Own the full stack',
        body: 'From ML pipelines to mobile UIs — understanding every layer means fewer blind spots.',
    },
    {
        num: '04',
        title: 'Write code for humans',
        body: 'Clean, readable code is a gift to your future self and every teammate who follows.',
    },
    {
        num: '05',
        title: 'Solve real problems',
        body: 'If it does not fix something tangible for real people, it is just practice. That is fine — but know the difference.',
    },
];

const TOOLS = [
    { category: 'Languages', items: 'C++, Python, Java, JavaScript, SQL, Kotlin, HTML, CSS' },
    { category: 'AI / ML', items: 'TensorFlow, OpenCV, MediaPipe, NumPy, Pandas, scikit-learn' },
    { category: 'Frameworks', items: 'React, Next.js, Android Studio, Vite' },
    { category: 'Infrastructure', items: 'Git, Supabase, Jupyter, Anaconda, VS Code' },
];

const CASE_STUDIES = [
    {
        title: 'Flappy Bird With Nose Detection',
        period: 'Jan 2024 – Feb 2024',
        tech: 'Python, OpenCV, MediaPipe',
        href: '/playbook/flappy-bird',
    },
    {
        title: 'BetterTechr',
        period: 'Jun 2025 – Aug 2025',
        tech: 'React.js, Next.js, Supabase',
        href: '/playbook/bettertechr',
    },
    {
        title: 'Browisify',
        period: 'Sep 2025 – Dec 2025',
        tech: 'Python, NLP, TF-IDF, KMeans',
        href: '/playbook/browisify',
    },
];

export default function PlaybookPage() {
    return (
        <main>
            <section className="hero" style={{ minHeight: 'auto', paddingBottom: '4rem' }}>
                <Link href="/" className="back-link">&larr; Back</Link>
                <p className="hero-kicker">How I Work</p>
                <h1 className="hero-headline">Engineering Playbook</h1>
                <p className="hero-sub">
                    The principles, tools, and workflows that guide how I build.
                    Less about what I know — more about how I think.
                </p>
            </section>

            <section>
                <p className="section-label">Case Studies</p>
                <div className="work-list">
                    {CASE_STUDIES.map((cs) => (
                        <Link
                            className="work-item"
                            key={cs.title}
                            href={cs.href}
                        >
                            <div>
                                <div className="work-item-title">{cs.title}</div>
                                <div className="work-item-sub">{cs.period}</div>
                                <p className="work-item-desc">{cs.tech}</p>
                            </div>
                            <div className="work-item-link">
                                read&nbsp;<span className="work-arrow">&#8599;</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section>
                <p className="section-label">Principles</p>
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

            <section>
                <p className="section-label">Toolkit</p>
                <div className="exp-list">
                    {TOOLS.map((t) => (
                        <div className="exp-item" key={t.category}>
                            <div className="exp-meta">
                                <span className="exp-role">{t.category}</span>
                            </div>
                            <p className="exp-desc">{t.items}</p>
                        </div>
                    ))}
                </div>
            </section>

            <footer className="footer">
                <span className="footer-copy">&copy; 2025 Daksh Mishra</span>
                <div className="footer-nav">
                    <Link href="/" className="footer-link">Home</Link>
                    <Link href="/portfolio" className="footer-link">Portfolio</Link>
                    <Link href="/blueprint" className="footer-link">Change Blueprint</Link>
                </div>
            </footer>
        </main>
    );
}
