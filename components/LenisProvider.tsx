'use client';

import { useEffect } from 'react';

export default function LenisProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        let lenis: any;

        const init = async () => {
            const { default: Lenis } = await import('lenis');
            const gsapModule = await import('gsap');
            const gsap = gsapModule.default;
            const scrollTriggerModule = await import('gsap/ScrollTrigger');
            const ScrollTrigger = scrollTriggerModule.default;
            gsap.registerPlugin(ScrollTrigger);

            lenis = new Lenis({
                duration: 1.4,
                easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                smoothWheel: true,
            } as any);

            lenis.on('scroll', ScrollTrigger.update);

            gsap.ticker.add((time: number) => {
                lenis.raf(time * 1000);
            });
            gsap.ticker.lagSmoothing(0);
        };

        init();

        return () => {
            if (lenis) lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
