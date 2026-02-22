/* ============================================
   DAKSH MISHRA — PORTFOLIO MAIN SCRIPT
   Three.js • GSAP ScrollTrigger • Interactions
   ============================================ */

(function () {
  'use strict';

  // =====================
  // CUSTOM CURSOR
  // =====================
  const cursorDot = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');
  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';

    // Stretched cursor on fast movement
    cursorDot.classList.add('stretched');
    clearTimeout(cursorDot._stretchTimer);
    cursorDot._stretchTimer = setTimeout(() => cursorDot.classList.remove('stretched'), 80);
  });

  function animateCursorRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top = ringY + 'px';
    requestAnimationFrame(animateCursorRing);
  }
  animateCursorRing();

  // Hover states for interactive elements
  const hoverTargets = document.querySelectorAll('a, button, .project-card, .pill, .nav-link, .tilt-card');
  hoverTargets.forEach((el) => {
    el.addEventListener('mouseenter', () => cursorRing.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursorRing.classList.remove('hover'));
  });

  // =====================
  // THREE.JS SCENE
  // =====================
  const canvas = document.getElementById('bgCanvas');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 30;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Create floating icosahedron shards
  const shards = [];
  const shardCount = 12;
  const geo = new THREE.IcosahedronGeometry(1, 0);
  const matCyan = new THREE.MeshBasicMaterial({ color: 0x00f5ff, wireframe: true, transparent: true, opacity: 0.2 });
  const matAmber = new THREE.MeshBasicMaterial({ color: 0xff6b00, wireframe: true, transparent: true, opacity: 0.15 });

  for (let i = 0; i < shardCount; i++) {
    const scale = Math.random() * 1.5 + 0.5;
    const mat = i % 3 === 0 ? matAmber : matCyan;
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(
      (Math.random() - 0.5) * 50,
      (Math.random() - 0.5) * 40,
      (Math.random() - 0.5) * 20
    );
    mesh.scale.setScalar(scale);
    mesh.userData = {
      rotSpeed: { x: (Math.random() - 0.5) * 0.008, y: (Math.random() - 0.5) * 0.008 },
      orbitRadius: 5 + Math.random() * 15,
      orbitSpeed: (Math.random() - 0.5) * 0.003,
      orbitOffset: Math.random() * Math.PI * 2,
      baseY: mesh.position.y
    };
    scene.add(mesh);
    shards.push(mesh);
  }

  // Subtle ambient particles
  const particleCount = 200;
  const particleGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 80;
  }
  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particleMat = new THREE.PointsMaterial({ color: 0x00f5ff, size: 0.08, transparent: true, opacity: 0.4 });
  const particles = new THREE.Points(particleGeo, particleMat);
  scene.add(particles);

  let time = 0;
  function animateThree() {
    time += 0.01;
    shards.forEach((mesh) => {
      mesh.rotation.x += mesh.userData.rotSpeed.x;
      mesh.rotation.y += mesh.userData.rotSpeed.y;
      mesh.position.y = mesh.userData.baseY + Math.sin(time * 2 + mesh.userData.orbitOffset) * 1.5;
      mesh.position.x += Math.sin(time * mesh.userData.orbitSpeed + mesh.userData.orbitOffset) * 0.02;
    });
    particles.rotation.y += 0.0003;
    particles.rotation.x += 0.0001;

    // Camera subtle float based on mouse
    camera.position.x += (mouseX / window.innerWidth * 2 - camera.position.x) * 0.01;
    camera.position.y += (-mouseY / window.innerHeight * 2 - camera.position.y) * 0.01;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
    requestAnimationFrame(animateThree);
  }
  animateThree();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // =====================
  // GLITCH TEXT HOVER
  // =====================
  const glitchText = document.getElementById('glitchText');
  if (glitchText) {
    glitchText.addEventListener('mouseenter', () => glitchText.classList.add('hover-glitch'));
    glitchText.addEventListener('mouseleave', () => glitchText.classList.remove('hover-glitch'));
  }

  // =====================
  // GSAP SCROLL ANIMATIONS
  // =====================
  gsap.registerPlugin(ScrollTrigger);

  // Sections fly in from z-depth
  const sections = document.querySelectorAll('.section:not(.section-hero)');
  sections.forEach((section) => {
    gsap.fromTo(section, {
      opacity: 0,
      y: 100,
      scale: 0.92,
      filter: 'blur(6px)'
    }, {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      duration: 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: section,
        start: 'top 85%',
        end: 'top 30%',
        toggleActions: 'play none none reverse',
      }
    });
  });

  // Section titles wipe in
  document.querySelectorAll('.section-title').forEach((title) => {
    gsap.from(title, {
      x: -60,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: title,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      }
    });
  });

  // About card
  gsap.from('.about-card', {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.about-card',
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    }
  });

  // Timeline items stagger
  gsap.utils.toArray('.timeline-item').forEach((item, i) => {
    const xDir = item.dataset.side === 'left' ? -80 : 80;
    gsap.from(item, {
      x: xDir,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: item,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      }
    });
  });

  // Project cards
  gsap.utils.toArray('.project-card').forEach((card, i) => {
    gsap.from(card, {
      y: 80,
      opacity: 0,
      rotateX: 15,
      duration: 0.9,
      delay: i * 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.projects-grid',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      }
    });
  });

  // Cert cards
  gsap.utils.toArray('.cert-card').forEach((card, i) => {
    gsap.from(card, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      delay: i * 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.certs-grid',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      }
    });
  });

  // Achievement cards
  gsap.utils.toArray('.achievement-card').forEach((card, i) => {
    gsap.from(card, {
      x: -80,
      opacity: 0,
      duration: 0.9,
      delay: i * 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.achievements-grid',
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      }
    });
  });

  // Diploma card
  gsap.from('.diploma-card', {
    y: 60,
    opacity: 0,
    scale: 0.9,
    duration: 1.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.diploma-card',
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    }
  });

  // Terminal box
  gsap.from('.terminal-box', {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.terminal-box',
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    }
  });

  // =====================
  // SKILL RINGS ANIMATION
  // =====================
  const skillRings = document.querySelectorAll('.skill-ring');
  const circumference = 326.73;

  skillRings.forEach((ring) => {
    const percent = parseInt(ring.dataset.percent, 10);
    const offset = circumference - (circumference * percent) / 100;
    const fillCircle = ring.querySelector('.ring-fill');

    ScrollTrigger.create({
      trigger: ring,
      start: 'top 85%',
      onEnter: () => {
        fillCircle.style.strokeDashoffset = offset;
      },
      onLeaveBack: () => {
        fillCircle.style.strokeDashoffset = circumference;
      }
    });
  });

  // =====================
  // PROJECT CARD FLIP
  // =====================
  const projectCards = document.querySelectorAll('.project-card');
  const overlay = document.getElementById('projectOverlay');
  const overlayContent = document.getElementById('projectOverlayContent');
  const overlayClose = document.getElementById('projectOverlayClose');

  projectCards.forEach((card) => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.project-close')) {
        card.classList.remove('flipped');
        return;
      }
      // Toggle flip
      card.classList.toggle('flipped');

      // Open fullscreen overlay with project details
      if (card.classList.contains('flipped')) {
        const back = card.querySelector('.project-back');
        overlayContent.innerHTML = back.innerHTML;
        overlay.classList.add('active');
      }
    });
  });

  if (overlayClose) {
    overlayClose.addEventListener('click', () => {
      overlay.classList.remove('active');
      projectCards.forEach((c) => c.classList.remove('flipped'));
    });
  }

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('active');
      projectCards.forEach((c) => c.classList.remove('flipped'));
    }
  });

  // =====================
  // 3D TILT ON CARDS
  // =====================
  const tiltCards = document.querySelectorAll('.tilt-card');
  tiltCards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;
      card.style.setProperty('--tilt-x', rotateX + 'deg');
      card.style.setProperty('--tilt-y', rotateY + 'deg');
    });
    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
    });
  });

  // =====================
  // MAGNETIC BUTTONS / PILLS
  // =====================
  const magneticElements = document.querySelectorAll('.pill, .magnetic-btn, .contact-icon-link');
  magneticElements.forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0, 0)';
    });
  });

  // =====================
  // TERMINAL INTERACTION
  // =====================
  const terminalInput = document.getElementById('terminalInput');
  const terminalOutput = document.getElementById('terminalOutput');
  const terminalBody = document.getElementById('terminalBody');

  const commands = {
    help: '> Available commands: help, about, skills, projects, contact, clear',
    about: '> Daksh Mishra — 2nd year CSE @ BMU. Builder of AI products. Co-founder PitchX. Hackathon finalist.',
    skills: '> Proficient: C++, Python, CSS, HTML | Experienced: JS, Java | Tools: Git, VS Code, Jupyter',
    projects: '> Homy Hive (Java), Flappy Bird Nose Detection (Python), Browisify (NLP)',
    contact: '> Email: daksh.mishra.23cse@bmu.edu.in | Phone: 9691639268 | GitHub: idaxon',
    clear: '__CLEAR__',
    ls: '> about.txt  skills.txt  projects/  contact.txt  README.md',
    pwd: '> /home/daksh/portfolio',
    date: `> ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`,
    echo: '> 👋 Hello there!',
    sudo: '> Nice try. Access denied. 🔒',
  };

  if (terminalInput) {
    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = terminalInput.value.trim().toLowerCase();
        if (!cmd) return;

        // Add command line
        const cmdLine = document.createElement('p');
        cmdLine.innerHTML = `<span class="prompt">visitor@daksh:~$</span> <span class="cmd">${escapeHtml(cmd)}</span>`;
        terminalOutput.appendChild(cmdLine);

        // Process command
        if (cmd === 'clear') {
          terminalOutput.innerHTML = '';
        } else {
          const response = commands[cmd] || `> Command not found: ${escapeHtml(cmd)}. Type 'help' for available commands.`;
          const respLine = document.createElement('p');
          respLine.className = 'response';
          respLine.textContent = response;
          terminalOutput.appendChild(respLine);
        }

        terminalInput.value = '';
        terminalBody.scrollTop = terminalBody.scrollHeight;
      }
    });
  }

  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // =====================
  // NAV SCROLL EFFECT
  // =====================
  const nav = document.getElementById('mainNav');
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const current = window.scrollY;
    if (current > 100) {
      nav.style.background = 'rgba(10, 10, 10, 0.92)';
    } else {
      nav.style.background = 'rgba(10, 10, 10, 0.75)';
    }
    lastScroll = current;
  });

  // =====================
  // SMOOTH SCROLL FOR NAV
  // =====================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // =====================
  // HERO PARALLAX ON SCROLL
  // =====================
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      heroContent.style.transform = `translateY(${scrolled * 0.35}px) scale(${1 - scrolled * 0.0004})`;
      heroContent.style.opacity = 1 - scrolled * 0.002;
    });
  }

})();
