'use client';

import Link from 'next/link';

export default function BlueprintPage() {
    return (
        <main>
            <section className="hero" style={{ minHeight: 'auto', paddingBottom: '4rem' }}>
                <Link href="/" className="back-link">&larr; Back</Link>
                <p className="hero-kicker">Change Blueprint (Adapt)</p>
                <h1 className="hero-headline">
                    How Designs<br />Evolved
                </h1>
                <p className="hero-sub">
                    This blueprint documents how each project evolved through
                    structured iteration, technical reassessment, and product-level
                    decision making in response to performance gaps, scalability
                    challenges, and real-world usage constraints.
                </p>
            </section>

            <section>
                <div className="blueprint-author">
                    <span className="blueprint-author-name">Daksh Mishra</span>
                    <span className="blueprint-author-detail">
                        B.Tech Computer Science &amp; Engineering &middot; BML Munjal University
                    </span>
                </div>
            </section>

            {/* ── PROJECT 1 ──────────────────────────── */}
            <section>
                <p className="section-label">Project 01</p>
                <h2 className="blueprint-project-title">
                    Flappy Bird With Nose Detection Movement
                </h2>

                <div className="blueprint-evolution">
                    <div className="blueprint-stage">
                        <h3 className="blueprint-stage-label">Initial Direction</h3>
                        <p className="blueprint-stage-body">
                            The project began as an experimental computer vision application
                            that mapped nose movement directly to vertical controls in a game
                            environment using basic facial landmark tracking.
                        </p>
                    </div>

                    <div className="blueprint-stage">
                        <h3 className="blueprint-stage-label">Trigger for Change</h3>
                        <p className="blueprint-stage-body">
                            During testing, inconsistent detection under varied lighting
                            conditions and noticeable input latency affected gameplay smoothness.
                            Frame instability reduced user experience quality and responsiveness.
                        </p>
                    </div>

                    <div className="blueprint-stage">
                        <h3 className="blueprint-stage-label">Adaptation</h3>
                        <p className="blueprint-stage-body">
                            The processing pipeline was redesigned to optimize frame handling
                            and reduce computational overhead. Landmark stabilization logic was
                            refined, and NumPy-based optimizations were implemented to improve
                            speed. The system architecture was modularized to separate vision
                            detection from gameplay mechanics, improving maintainability and
                            scalability.
                        </p>
                    </div>

                    <div className="blueprint-stage blueprint-stage-impact">
                        <h3 className="blueprint-stage-label">Resulting Impact</h3>
                        <p className="blueprint-stage-body">
                            The optimized system achieved sustained 25+ FPS performance with
                            92% detection accuracy. Input latency was significantly reduced,
                            resulting in smooth and reliable hands-free gameplay.
                        </p>
                    </div>
                </div>
            </section>

            <hr className="section-divider" />

            {/* ── PROJECT 2 ──────────────────────────── */}
            <section>
                <p className="section-label">Project 02</p>
                <h2 className="blueprint-project-title">
                    BetterTechr &mdash; Academic Mentorship Platform
                </h2>

                <div className="blueprint-evolution">
                    <div className="blueprint-stage">
                        <h3 className="blueprint-stage-label">Initial Direction</h3>
                        <p className="blueprint-stage-body">
                            The platform initially focused on listing mentors and manually
                            assigning students based on subject categories without automation
                            or workflow optimization.
                        </p>
                    </div>

                    <div className="blueprint-stage">
                        <h3 className="blueprint-stage-label">Trigger for Change</h3>
                        <p className="blueprint-stage-body">
                            As the number of users increased, manual mentor allocation created
                            delays and operational inefficiencies. Matching quality varied,
                            impacting user satisfaction and scalability.
                        </p>
                    </div>

                    <div className="blueprint-stage">
                        <h3 className="blueprint-stage-label">Adaptation</h3>
                        <p className="blueprint-stage-body">
                            The platform architecture was redesigned to introduce automated
                            mentor-matching workflows based on subject preferences and
                            availability filters. The database schema was normalized, REST APIs
                            were modularized, and monitoring dashboards were introduced for
                            operational visibility.
                        </p>
                    </div>

                    <div className="blueprint-stage blueprint-stage-impact">
                        <h3 className="blueprint-stage-label">Resulting Impact</h3>
                        <p className="blueprint-stage-body">
                            Mentor allocation time reduced by 40%, and the platform scaled to
                            serve 350+ students and 25+ mentors across 10+ subjects. Operational
                            efficiency improved, contributing to early-stage profitability.
                        </p>
                    </div>
                </div>
            </section>

            <hr className="section-divider" />

            {/* ── PROJECT 3 ──────────────────────────── */}
            <section>
                <p className="section-label">Project 03</p>
                <h2 className="blueprint-project-title">
                    Browisify &mdash; Browser Productivity Intelligence
                </h2>

                <div className="blueprint-evolution">
                    <div className="blueprint-stage">
                        <h3 className="blueprint-stage-label">Initial Direction</h3>
                        <p className="blueprint-stage-body">
                            The project initially relied on rule-based classification to
                            categorize websites into productive and non-productive groups
                            using predefined keyword logic.
                        </p>
                    </div>

                    <div className="blueprint-stage">
                        <h3 className="blueprint-stage-label">Trigger for Change</h3>
                        <p className="blueprint-stage-body">
                            The rule-based system lacked adaptability and failed to generalize
                            across diverse browsing behaviors, limiting accuracy and long-term
                            scalability.
                        </p>
                    </div>

                    <div className="blueprint-stage">
                        <h3 className="blueprint-stage-label">Adaptation</h3>
                        <p className="blueprint-stage-body">
                            The classification engine was redesigned using TF-IDF-based feature
                            extraction combined with KMeans clustering for behavioral
                            segmentation. A dynamic productivity scoring mechanism was
                            implemented to generate interpretable and personalized insights.
                        </p>
                    </div>

                    <div className="blueprint-stage blueprint-stage-impact">
                        <h3 className="blueprint-stage-label">Resulting Impact</h3>
                        <p className="blueprint-stage-body">
                            The system evolved from static categorization to adaptive behavioral
                            analysis, improving classification reliability and enabling scalable
                            machine learning experimentation.
                        </p>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <span className="footer-copy">&copy; 2025 Daksh Mishra</span>
                <div className="footer-nav">
                    <Link href="/" className="footer-link">Home</Link>
                    <Link href="/portfolio" className="footer-link">Portfolio</Link>
                    <Link href="/playbook" className="footer-link">Engineering Playbook</Link>
                </div>
            </footer>
        </main>
    );
}
