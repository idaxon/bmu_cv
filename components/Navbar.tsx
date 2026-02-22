'use client';

import { useRef } from 'react';

export default function Navbar() {
    const scrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="navbar">
            <div
                className="nav-logo"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                Daksh Mishra
            </div>
            <ul className="nav-links">
                <li>
                    <a href="#work" onClick={(e) => { e.preventDefault(); scrollTo('work'); }}>
                        work
                    </a>
                </li>
                <li>
                    <a href="#skills" onClick={(e) => { e.preventDefault(); scrollTo('skills'); }}>
                        skills
                    </a>
                </li>
                <li>
                    <a href="#signal" onClick={(e) => { e.preventDefault(); scrollTo('signal'); }}>
                        signal
                    </a>
                </li>
                <li>
                    <a
                        href="#signal"
                        className="nav-cta"
                        onClick={(e) => { e.preventDefault(); scrollTo('signal'); }}
                    >
                        Let&apos;s talk
                    </a>
                </li>
            </ul>
        </nav>
    );
}
