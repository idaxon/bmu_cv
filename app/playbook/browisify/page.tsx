'use client';

import Link from 'next/link';

export default function BrowisifyCaseStudy() {
    return (
        <main>
            <section className="hero" style={{ minHeight: 'auto', paddingBottom: '4rem' }}>
                <Link href="/playbook" className="back-link">&larr; Engineering Playbook</Link>
                <p className="hero-kicker">Case Study</p>
                <h1 className="hero-headline">Browisify</h1>
                <p className="hero-sub">
                    Sep 2025 &ndash; Dec 2025
                </p>
            </section>

            <section>
                <p className="section-label">Tech Stack</p>
                <div className="case-study-tags">
                    <span className="case-study-tag">Python</span>
                    <span className="case-study-tag">NLP</span>
                    <span className="case-study-tag">TF-IDF</span>
                    <span className="case-study-tag">KMeans</span>
                </div>
            </section>

            <section>
                <p className="section-label">Problem Definition</p>
                <p className="case-study-body">
                    Users lack quantitative visibility into their digital productivity behavior.
                </p>
            </section>

            <section>
                <p className="section-label">Product Objective</p>
                <p className="case-study-body">
                    Develop a behavioral analytics tool to classify and cluster browsing
                    patterns into actionable productivity insights.
                </p>
            </section>

            <section>
                <p className="section-label">ML Architecture &amp; Design</p>
                <div className="case-study-list">
                    <div className="case-study-list-item">
                        Processed browser history data pipeline.
                    </div>
                    <div className="case-study-list-item">
                        Applied TF-IDF vectorization for textual feature extraction.
                    </div>
                    <div className="case-study-list-item">
                        Implemented KMeans clustering for behavioral segmentation.
                    </div>
                    <div className="case-study-list-item">
                        Designed productivity scoring logic based on usage patterns.
                    </div>
                    <div className="case-study-list-item">
                        Generated interpretable visual insights for user feedback.
                    </div>
                </div>
            </section>

            <section>
                <p className="section-label">Outcomes &amp; Insights</p>
                <div className="case-study-list">
                    <div className="case-study-list-item">
                        Automated website productivity classification.
                    </div>
                    <div className="case-study-list-item">
                        Enabled behavioral cluster detection.
                    </div>
                    <div className="case-study-list-item">
                        Delivered actionable insights for habit optimization.
                    </div>
                    <div className="case-study-list-item">
                        Built reusable ML pipeline for further personalization.
                    </div>
                </div>
            </section>

            <section>
                <p className="section-label">Key Takeaways</p>
                <div className="case-study-list">
                    <div className="case-study-list-item">
                        Translated raw data into user-centric insights.
                    </div>
                    <div className="case-study-list-item">
                        Balanced model interpretability with performance.
                    </div>
                    <div className="case-study-list-item">
                        Built scalable ML experimentation framework.
                    </div>
                </div>
            </section>

            <footer className="footer">
                <span className="footer-copy">&copy; 2025 Daksh Mishra</span>
                <div className="footer-nav">
                    <Link href="/playbook" className="footer-link">Playbook</Link>
                    <Link href="/playbook/flappy-bird" className="footer-link">Flappy Bird</Link>
                    <Link href="/playbook/bettertechr" className="footer-link">BetterTechr</Link>
                </div>
            </footer>
        </main>
    );
}
