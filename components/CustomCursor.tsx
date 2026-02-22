'use client';

import { useEffect, useRef } from 'react';

const TRAIL_COUNT = 4;

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const trailRefs = useRef<HTMLDivElement[]>([]);
    const mouse = useRef({ x: 0, y: 0 });
    const ring = useRef({ x: 0, y: 0 });
    const trails = useRef(Array.from({ length: TRAIL_COUNT }, () => ({ x: 0, y: 0 })));
    const rafId = useRef<number | undefined>(undefined);

    useEffect(() => {
        const dot = dotRef.current;
        const ringEl = ringRef.current;
        if (!dot || !ringEl) return;

        // Check for touch device
        const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouch) {
            dot.style.display = 'none';
            ringEl.style.display = 'none';
            trailRefs.current.forEach((t) => { if (t) t.style.display = 'none'; });
            return;
        }

        const onMouseMove = (e: MouseEvent) => {
            mouse.current = { x: e.clientX, y: e.clientY };
            dot.style.left = `${e.clientX}px`;
            dot.style.top = `${e.clientY}px`;
        };

        const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

        const animate = () => {
            // Ring follows cursor with lerp
            ring.current.x = lerp(ring.current.x, mouse.current.x, 0.11);
            ring.current.y = lerp(ring.current.y, mouse.current.y, 0.11);
            ringEl.style.left = `${ring.current.x}px`;
            ringEl.style.top = `${ring.current.y}px`;

            // Trail dots — each follows the previous with decreasing responsiveness
            for (let i = 0; i < TRAIL_COUNT; i++) {
                const target = i === 0 ? mouse.current : trails.current[i - 1];
                const speed = 0.18 - i * 0.035; // 0.18, 0.145, 0.11, 0.075
                trails.current[i].x = lerp(trails.current[i].x, target.x, speed);
                trails.current[i].y = lerp(trails.current[i].y, target.y, speed);

                const trailEl = trailRefs.current[i];
                if (trailEl) {
                    trailEl.style.left = `${trails.current[i].x}px`;
                    trailEl.style.top = `${trails.current[i].y}px`;
                }
            }

            rafId.current = requestAnimationFrame(animate);
        };

        const onMouseEnterHover = () => {
            dot.classList.add('is-hovering');
            ringEl.classList.add('is-hovering');
        };
        const onMouseLeaveHover = () => {
            dot.classList.remove('is-hovering');
            ringEl.classList.remove('is-hovering');
        };

        const setupHoverListeners = () => {
            const hoverEls = document.querySelectorAll('[data-hover], a, button, .magnetic-btn, .nav-links a');
            hoverEls.forEach((el) => {
                el.addEventListener('mouseenter', onMouseEnterHover);
                el.addEventListener('mouseleave', onMouseLeaveHover);
            });
        };

        window.addEventListener('mousemove', onMouseMove);
        rafId.current = requestAnimationFrame(animate);

        setTimeout(setupHoverListeners, 500);

        const observer = new MutationObserver(setupHoverListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            if (rafId.current) cancelAnimationFrame(rafId.current);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            {/* Trail dots — rendered behind the main dot */}
            {Array.from({ length: TRAIL_COUNT }).map((_, i) => (
                <div
                    key={`trail-${i}`}
                    className="cursor-trail"
                    ref={(el) => { if (el) trailRefs.current[i] = el; }}
                    style={{
                        opacity: 0.35 - i * 0.07,
                        width: `${4 - i * 0.5}px`,
                        height: `${4 - i * 0.5}px`,
                    }}
                />
            ))}
            <div className="cursor-dot" ref={dotRef} />
            <div className="cursor-ring" ref={ringRef} />
        </>
    );
}
