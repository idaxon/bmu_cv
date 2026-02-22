'use client';

import Link from 'next/link';

export default function PortfolioPage() {
    return (
        <main>
            <section className="hero" style={{ minHeight: 'auto', paddingBottom: '4rem' }}>
                <Link href="/" className="back-link">&larr; Back</Link>
                <p className="hero-kicker">Portfolio (Build)</p>
                <h1 className="hero-headline">
                    What Was Built
                </h1>
                <p className="hero-sub">
                    This portfolio presents selected academic and technical projects,
                    focusing on what was built. It emphasizes system design, implementation
                    depth, and functional delivery rather than outcomes alone.
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
                        <h3 className="blueprint-stage-label">Problem Context</h3>
                        <p className="blueprint-stage-body">
                            Traditional games rely on manual input (keyboard, touch), limiting
                            accessibility and innovation in hands-free interaction. Real-time
                            facial tracking introduces challenges including latency, inconsistent
                            detection, and sensitivity to lighting conditions.
                        </p>
                    </div>

                    <div className="blueprint-stage">
                        <h3 className="blueprint-stage-label">System Built</h3>
                        <p className="blueprint-stage-body">
                            A hands-free, AI-controlled version of Flappy Bird that uses nose
                            movement as the primary control mechanism. The system converts
                            real-time facial landmark data into smooth game actions.
                        </p>
                    </div>

                    <div className="blueprint-stage">
                        <h3 className="blueprint-stage-label">Implementation Details</h3>
                        <div className="case-study-list">
                            <div className="case-study-list-item">
                                Developed a real-time facial landmark detection pipeline using
                                OpenCV and MediaPipe.
                            </div>
                            <div className="case-study-list-item">
                                Integrated YOLO-based detection to improve tracking robustness
                                under variable lighting.
                            </div>
                            <div className="case-study-list-item">
                                Optimized frame processing using NumPy to maintain 25+ FPS and
                                reduce input latency by 40%.
                            </div>
                            <div className="case-study-list-item">
                                Built a modular architecture separating detection logic from
                                gameplay mechanics for scalability.
                            </div>
                            <div className="case-study-list-item">
                                Created a simple graphical interface to visualize nose tracking
                                and in-game responses in real time.
                            </div>
                        </div>
                    </div>

                    <div className="blueprint-stage">
                        <h3 className="blueprint-stage-label">Technology Stack</h3>
                        <div className="case-study-tags">
                            <span className="case-study-tag">Python</span>
                            <span className="case-study-tag">OpenCV</span>
                            <span className="case-study-tag">MediaPipe</span>
                            <span className="case-study-tag">YOLO</span>
                            <span className="case-study-tag">NumPy</span>
                            <span className="case-study-tag">Tkinter</span>
                        </div>
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
                        <h3 className="blueprint-stage-label">Problem Context</h3>
                        <p className="blueprint-stage-body">
                            Students often face delays in finding suitable mentors due to manual
                            allocation, leading to inefficiencies and poor matching quality.
                            Scalable workflows are required for increasing user volume.
                        </p>
                    </div>

                    <div className="blueprint-stage">
                        <h3 className="blueprint-stage-label">System Built</h3>
                        <p className="blueprint-stage-body">
                            A full-stack academic platform connecting students with mentors
                            across multiple subjects, featuring automated mentor allocation
                            and administrative tracking.
                        </p>
                    </div>

                    <div className="blueprint-stage">
                        <h3 className="blueprint-stage-label">Implementation Details</h3>
                        <div className="case-study-list">
                            <div className="case-study-list-item">
                                Designed database schema in Supabase to manage subjects, mentors,
                                and student sessions.
                            </div>
                            <div className="case-study-list-item">
                                Developed automated mentor-matching logic based on subject
                                preference and availability.
                            </div>
                            <div className="case-study-list-item">
                                Built REST APIs and a scalable frontend using Next.js and React.js.
                            </div>
                            <div className="case-study-list-item">
                                Implemented dashboards for monitoring user engagement, mentor
                                availability, and performance metrics.
                            </div>
                            <div className="case-study-list-item">
                                Optimized workflows to reduce mentor allocation time by 40%,
                                improving user satisfaction.
                            </div>
                        </div>
                    </div>

                    <div className="blueprint-stage">
                        <h3 className="blueprint-stage-label">Technology Stack</h3>
                        <div className="case-study-tags">
                            <span className="case-study-tag">React.js</span>
                            <span className="case-study-tag">Next.js</span>
                            <span className="case-study-tag">Supabase</span>
                            <span className="case-study-tag">REST APIs</span>
                        </div>
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
                        <h3 className="blueprint-stage-label">Problem Context</h3>
                        <p className="blueprint-stage-body">
                            Users lack insights into their browsing behavior and productivity
                            patterns. Rule-based website classification fails to capture complex
                            user behavior and generalize across diverse activity.
                        </p>
                    </div>

                    <div className="blueprint-stage">
                        <h3 className="blueprint-stage-label">System Built</h3>
                        <p className="blueprint-stage-body">
                            A behavioral analytics tool that classifies websites as productive
                            or non-productive and segments user activity into interpretable
                            clusters for actionable insights.
                        </p>
                    </div>

                    <div className="blueprint-stage">
                        <h3 className="blueprint-stage-label">Implementation Details</h3>
                        <div className="case-study-list">
                            <div className="case-study-list-item">
                                Processed browser history and transformed URLs/content into vector
                                representations using TF-IDF.
                            </div>
                            <div className="case-study-list-item">
                                Applied KMeans clustering to identify behavioral patterns and
                                group similar browsing sessions.
                            </div>
                            <div className="case-study-list-item">
                                Implemented a dynamic scoring system for productivity evaluation.
                            </div>
                            <div className="case-study-list-item">
                                Generated visual dashboards for users to track trends and
                                productivity insights over time.
                            </div>
                            <div className="case-study-list-item">
                                Built modular ML pipeline to support future personalization and
                                experimentation.
                            </div>
                        </div>
                    </div>

                    <div className="blueprint-stage">
                        <h3 className="blueprint-stage-label">Technology Stack</h3>
                        <div className="case-study-tags">
                            <span className="case-study-tag">Python</span>
                            <span className="case-study-tag">NLP</span>
                            <span className="case-study-tag">TF-IDF</span>
                            <span className="case-study-tag">KMeans</span>
                            <span className="case-study-tag">Matplotlib</span>
                            <span className="case-study-tag">Seaborn</span>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer">
                <span className="footer-copy">&copy; 2025 Daksh Mishra</span>
                <div className="footer-nav">
                    <Link href="/" className="footer-link">Home</Link>
                    <Link href="/playbook" className="footer-link">Engineering Playbook</Link>
                    <Link href="/blueprint" className="footer-link">Change Blueprint</Link>
                </div>
            </footer>
        </main>
    );
}
