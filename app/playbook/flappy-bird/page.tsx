'use client';

import Link from 'next/link';

export default function FlappyBirdCaseStudy() {
    return (
        <main>
            <section className="hero" style={{ minHeight: 'auto', paddingBottom: '4rem' }}>
                <Link href="/playbook" className="back-link">&larr; Engineering Playbook</Link>
                <p className="hero-kicker">Case Study</p>
                <h1 className="hero-headline">
                    Flappy Bird With Nose<br />Detection Movement
                </h1>
                <p className="hero-sub">
                    Jan 2024 &ndash; Feb 2024
                </p>
            </section>

            <section>
                <p className="section-label">Tech Stack</p>
                <div className="case-study-tags">
                    <span className="case-study-tag">Python</span>
                    <span className="case-study-tag">OpenCV</span>
                    <span className="case-study-tag">YOLO</span>
                    <span className="case-study-tag">NumPy</span>
                    <span className="case-study-tag">MediaPipe</span>
                </div>
            </section>

            <section>
                <p className="section-label">Problem Definition</p>
                <p className="case-study-body">
                    Traditional games rely on physical input devices. There is limited
                    exploration of real-time, vision-based human&ndash;computer interaction
                    in lightweight gaming systems.
                </p>
            </section>

            <section>
                <p className="section-label">Product Objective</p>
                <p className="case-study-body">
                    Build a hands-free AI-controlled game demonstrating low-latency
                    computer vision input with production-grade performance metrics.
                </p>
            </section>

            <section>
                <p className="section-label">System Design &amp; Engineering Decisions</p>
                <div className="case-study-list">
                    <div className="case-study-list-item">
                        Used OpenCV + MediaPipe for real-time facial landmark detection.
                    </div>
                    <div className="case-study-list-item">
                        Optimized frame processing pipeline to sustain 25+ FPS.
                    </div>
                    <div className="case-study-list-item">
                        Designed coordinate-mapping logic converting nose Y-axis movement to game mechanics.
                    </div>
                    <div className="case-study-list-item">
                        Reduced latency using buffered frame processing and efficient NumPy operations.
                    </div>
                    <div className="case-study-list-item">
                        Modularized detection and gameplay engine for scalability.
                    </div>
                </div>
            </section>

            <section>
                <p className="section-label">Metrics &amp; Performance</p>
                <div className="case-study-metrics">
                    <div className="case-study-metric">
                        <span className="case-study-metric-value">25+</span>
                        <span className="case-study-metric-label">FPS real-time</span>
                    </div>
                    <div className="case-study-metric">
                        <span className="case-study-metric-value">92%</span>
                        <span className="case-study-metric-label">Nose detection accuracy</span>
                    </div>
                    <div className="case-study-metric">
                        <span className="case-study-metric-value">40%</span>
                        <span className="case-study-metric-label">Input latency reduction</span>
                    </div>
                </div>
            </section>

            <section>
                <p className="section-label">Key Takeaways</p>
                <div className="case-study-list">
                    <div className="case-study-list-item">
                        Validated feasibility of vision-based control systems.
                    </div>
                    <div className="case-study-list-item">
                        Demonstrated real-time ML deployment on consumer-grade hardware.
                    </div>
                    <div className="case-study-list-item">
                        Created proof-of-concept for accessibility-focused gaming interfaces.
                    </div>
                </div>
            </section>

            <footer className="footer">
                <span className="footer-copy">&copy; 2025 Daksh Mishra</span>
                <div className="footer-nav">
                    <Link href="/playbook" className="footer-link">Playbook</Link>
                    <Link href="/playbook/bettertechr" className="footer-link">BetterTechr</Link>
                    <Link href="/playbook/browisify" className="footer-link">Browisify</Link>
                </div>
            </footer>
        </main>
    );
}
