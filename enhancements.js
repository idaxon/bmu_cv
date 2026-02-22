/* ============================================
   PORTFOLIO ENHANCEMENTS — ADDITIVE JS
   Page loader • Cursor trail • Text reveal
   Does NOT modify existing code or DOM structure
   ============================================ */

(function () {
    'use strict';

    // =====================
    // CURSOR TRAIL
    // =====================
    const TRAIL_COUNT = 4;
    const trailDots = [];
    const trailPositions = [];

    // Check for touch device
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (!isTouch) {
        for (let i = 0; i < TRAIL_COUNT; i++) {
            const dot = document.createElement('div');
            dot.className = 'cursor-trail';
            dot.style.opacity = String(0.3 - i * 0.06);
            dot.style.width = (4 - i * 0.5) + 'px';
            dot.style.height = (4 - i * 0.5) + 'px';
            document.body.appendChild(dot);
            trailDots.push(dot);
            trailPositions.push({ x: 0, y: 0 });
        }

        let trailMouseX = 0, trailMouseY = 0;

        document.addEventListener('mousemove', function (e) {
            trailMouseX = e.clientX;
            trailMouseY = e.clientY;
        });

        function lerpVal(a, b, t) { return a + (b - a) * t; }

        function animateTrail() {
            for (let i = 0; i < TRAIL_COUNT; i++) {
                const target = i === 0
                    ? { x: trailMouseX, y: trailMouseY }
                    : trailPositions[i - 1];
                const speed = 0.18 - i * 0.035;
                trailPositions[i].x = lerpVal(trailPositions[i].x, target.x, speed);
                trailPositions[i].y = lerpVal(trailPositions[i].y, target.y, speed);
                trailDots[i].style.left = trailPositions[i].x + 'px';
                trailDots[i].style.top = trailPositions[i].y + 'px';
            }
            requestAnimationFrame(animateTrail);
        }
        animateTrail();
    }

    // =====================
    // TEXT REVEAL ON SECTION TITLES
    // =====================
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {

        // Split section titles into words and animate
        var revealTargets = document.querySelectorAll('.section-title');

        revealTargets.forEach(function (el) {
            var text = el.textContent || '';
            // Preserve the title-accent span
            var accentSpan = el.querySelector('.title-accent');
            var accentHTML = accentSpan ? accentSpan.outerHTML + ' ' : '';

            // Get the text after the accent
            var cleanText = text.replace('//', '').trim();
            var words = cleanText.split(/\s+/).filter(Boolean);

            el.innerHTML = accentHTML + words
                .map(function (word) {
                    return '<span class="word-wrap"><span class="word-inner" style="transform:translateY(100%);opacity:0;">' + word + '</span></span>';
                })
                .join(' ');

            var wordInners = el.querySelectorAll('.word-inner');
            gsap.to(wordInners, {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.05,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                }
            });
        });

        // Enhanced parallax — use GSAP scrub for hero instead of raw scroll
        var heroSection = document.querySelector('.section-hero');
        if (heroSection) {
            gsap.to('.hero-content', {
                yPercent: 15,
                ease: 'none',
                scrollTrigger: {
                    trigger: heroSection,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 0.5,
                }
            });

            // Parallax on the Three.js canvas (subtle)
            gsap.to('#bgCanvas', {
                yPercent: 8,
                ease: 'none',
                scrollTrigger: {
                    trigger: heroSection,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 0.3,
                }
            });
        }
    }

    // =====================
    // HERO TAGLINE MAGIC COLOR SHIFT
    // =====================
    var heroTagline = document.getElementById('heroTagline');
    if (heroTagline) {
        heroTagline.addEventListener('mouseenter', function () {
            document.body.setAttribute('data-magic', 'true');
        });
        heroTagline.addEventListener('mouseleave', function () {
            document.body.removeAttribute('data-magic');
        });
    }

})();
