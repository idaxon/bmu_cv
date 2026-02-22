'use client';

import Link from 'next/link';

export default function BetterTechrCaseStudy() {
    return (
        <main>
            <section className="hero" style={{ minHeight: 'auto', paddingBottom: '4rem' }}>
                <Link href="/playbook" className="back-link">&larr; Engineering Playbook</Link>
                <p className="hero-kicker">Case Study</p>
                <h1 className="hero-headline">BetterTechr</h1>
                <p className="hero-sub">
                    Jun 2025 &ndash; Aug 2025
                </p>
            </section>

            <section>
                <p className="section-label">Tech Stack</p>
                <div className="case-study-tags">
                    <span className="case-study-tag">React.js</span>
                    <span className="case-study-tag">Next.js</span>
                    <span className="case-study-tag">Supabase</span>
                    <span className="case-study-tag">REST APIs</span>
                </div>
            </section>

            <section>
                <p className="section-label">Problem Definition</p>
                <p className="case-study-body">
                    Students face friction in discovering verified mentors across subjects.
                    Manual allocation causes delays and inefficiencies.
                </p>
            </section>

            <section>
                <p className="section-label">Product Objective</p>
                <p className="case-study-body">
                    Build a scalable academic marketplace with optimized mentor allocation
                    workflows and measurable performance improvements.
                </p>
            </section>

            <section>
                <p className="section-label">Architecture &amp; Engineering</p>
                <div className="case-study-list">
                    <div className="case-study-list-item">
                        Designed full-stack system using Next.js (frontend) + Supabase (backend).
                    </div>
                    <div className="case-study-list-item">
                        Built normalized database schema for subjects, mentors, and sessions.
                    </div>
                    <div className="case-study-list-item">
                        Developed REST-based matching logic using preference and availability filters.
                    </div>
                    <div className="case-study-list-item">
                        Implemented admin analytics dashboard for monitoring engagement and revenue.
                    </div>
                    <div className="case-study-list-item">
                        Ensured modular API design for future scalability.
                    </div>
                </div>
            </section>

            <section>
                <p className="section-label">Metrics &amp; Business Impact</p>
                <div className="case-study-metrics">
                    <div className="case-study-metric">
                        <span className="case-study-metric-value">350+</span>
                        <span className="case-study-metric-label">Students onboarded</span>
                    </div>
                    <div className="case-study-metric">
                        <span className="case-study-metric-value">25+</span>
                        <span className="case-study-metric-label">Active mentors</span>
                    </div>
                    <div className="case-study-metric">
                        <span className="case-study-metric-value">40%</span>
                        <span className="case-study-metric-label">Faster allocation</span>
                    </div>
                    <div className="case-study-metric">
                        <span className="case-study-metric-value">10+</span>
                        <span className="case-study-metric-label">Subjects covered</span>
                    </div>
                </div>
                <p className="case-study-body" style={{ marginTop: '1.5rem' }}>
                    Achieved early-stage profitability.
                </p>
            </section>

            <section>
                <p className="section-label">Key Takeaways</p>
                <div className="case-study-list">
                    <div className="case-study-list-item">
                        Optimized operational efficiency via workflow automation.
                    </div>
                    <div className="case-study-list-item">
                        Improved student retention through faster matching.
                    </div>
                    <div className="case-study-list-item">
                        Built scalable foundation for marketplace expansion.
                    </div>
                </div>
            </section>

            <footer className="footer">
                <span className="footer-copy">&copy; 2025 Daksh Mishra</span>
                <div className="footer-nav">
                    <Link href="/playbook" className="footer-link">Playbook</Link>
                    <Link href="/playbook/flappy-bird" className="footer-link">Flappy Bird</Link>
                    <Link href="/playbook/browisify" className="footer-link">Browisify</Link>
                </div>
            </footer>
        </main>
    );
}
