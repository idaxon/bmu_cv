'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

const HeroScene = dynamic(() => import('@/components/HeroScene'), { ssr: false });

const TYPEWRITER_TEXT = "I architect experiences that move.";

export default function HeroSection() {
    const sublineRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const el = sublineRef.current;
        if (!el) return;

        let i = 0;
        let displayText = '';
        const cursor = el.nextElementSibling as HTMLElement;

        const delay = setTimeout(() => {
            const interval = setInterval(() => {
                if (i < TYPEWRITER_TEXT.length) {
                    displayText += TYPEWRITER_TEXT[i];
                    el.textContent = displayText;
                    i++;
                } else {
                    clearInterval(interval);
                }
            }, 52);
        }, 900);

        return () => clearTimeout(delay);
    }, []);

    return (
        <section className="hero" id="hero">
            <HeroScene />

            <div className="hero-content">
                <p className="hero-tagline">Creative Developer</p>
                <h1 className="hero-headline">
                    Craft.<br />Code.<br />Create.
                </h1>
                <p className="hero-subline">
                    <span ref={sublineRef} />
                    <span className="cursor-blink" />
                </p>
            </div>

            <div className="hero-scroll-hint">
                <span>scroll</span>
                <div className="scroll-line" />
            </div>
        </section>
    );
}
