/* ===== TurboNeko Studio — script.js ===== */

document.addEventListener('DOMContentLoaded', () => {

    /* ========== 0. Enable JS-driven animations ========== */
    document.documentElement.classList.add('js-enabled');

    /* ========== i18n translations ========== */
    const translations = {
        zh: {
            nav_home: '首页', nav_about: '关于', nav_projects: '项目展示', nav_cars: '四车产品线',
            nav_techstack: '技术栈', nav_contact: '联系',
            hero_desc: '我们将二次元的幻想、汽车的速度与<br>科技的未来感融合，创造独特的视觉与体验。',
            hero_btn: '探索更多', scroll_down: '向下滚动',
            about_label: '关于我们',
            about_title: '燃油在左，幻想在右。<br>这里是 <span class="highlight">TurboNeko Studio.</span>',
            about_desc: '我们是一个将二次元幻想、硬核汽车文化与前沿科技完美融合的创意厂牌。<br>既有涡轮增压般的爆发力与机械美学，<br>也有猫咪般的灵动创意与破格思维。',
            about_btn: '查看项目',
            about_disclaimer: '本网站使用的蔚蓝档案相关角色二创图为非官方创作，仅作展示使用，未进行商业用途。',
            svc_design: '视觉设计', svc_auto: '汽车文化', svc_game: '游戏开发', svc_tech: '科技产品',
            projects_label: '我们的项目', view_all: '查看 GitHub',
            proj_soulmate: 'AI 陪伴应用', proj_ba: '蔚蓝档案同人游戏',
            proj_nemusic: '网易云音乐本地版', proj_coming: '敬请期待',
            tech_label: '技术栈', tech_coming: '正在建设中...',
            footer_desc: '致力于二次元文化、汽车文化与科技创意的跨界融合。<br>通过视觉、产品与游戏，打造速度与风格并存的独特体验。',
            footer_links: '快速链接', footer_follow: '关注我们',
            footer_contact: '联系方式', footer_contact_link: '联系我们',
            footer_location: '中国 上海'
        },
        en: {
            nav_home: 'Home', nav_about: 'About', nav_projects: 'Projects',
            nav_cars: 'Car Lineup', nav_techstack: 'Tech Stack', nav_contact: 'Contact',
            hero_desc: 'We blend anime fantasies, automotive speed, and<br>cutting-edge tech to create unique visual experiences.',
            hero_btn: 'Explore More', scroll_down: 'Scroll Down',
            about_label: 'About Us',
            about_title: 'Fuel on the left, fantasy on the right.<br>This is <span class="highlight">TurboNeko Studio.</span>',
            about_desc: 'A creative studio where anime culture, hardcore car enthusiasm,<br>and cutting-edge technology collide.<br>Turbocharged aesthetics meets feline creativity.',
            about_btn: 'View Our Projects',
            about_disclaimer: 'Fan art of Blue Archive characters used on this site is unofficial and non-commercial, for display purposes only.',
            svc_design: 'Visual Design', svc_auto: 'Auto Culture', svc_game: 'Game Dev', svc_tech: 'Tech & Gadgets',
            projects_label: 'Our Projects', view_all: 'View on GitHub',
            proj_soulmate: 'AI Companion App', proj_ba: 'Blue Archive Fan Game',
            proj_nemusic: 'NetEase Cloud Music (Local)', proj_coming: 'Coming Soon...',
            tech_label: 'Tech Stack', tech_coming: 'Coming soon...',
            footer_desc: 'Dedicated to the cross-boundary fusion of anime culture,<br>automotive aesthetics, and creative tech.<br>Where speed meets style.',
            footer_links: 'Quick Links', footer_follow: 'Follow Us',
            footer_contact: 'Contact', footer_contact_link: 'Contact',
            footer_location: 'Shanghai, China'
        }
    };

    let currentLang = localStorage.getItem('tns-lang') || 'zh';

    function applyLang(lang) {
        currentLang = lang;
        localStorage.setItem('tns-lang', lang);
        const t = translations[lang];
        if (!t) return;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) {
                el.innerHTML = t[key];
            }
        });

        const label = document.getElementById('langLabel');
        if (label) {
            label.textContent = lang === 'zh' ? '中文' : 'EN';
        }
    }

    document.getElementById('langSwitch').addEventListener('click', () => {
        applyLang(currentLang === 'zh' ? 'en' : 'zh');
    });

    // Apply saved language
    applyLang(currentLang);


    /* ========== 1. Scroll-driven fade-up (replayable) ========== */
    const fadeEls = document.querySelectorAll('.fade-up, .hero-word, .hero-desc, .hero-btn');

    // Immediately show elements already in viewport
    fadeEls.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('visible');
        }
    });

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -20px 0px'
    });

    fadeEls.forEach(el => scrollObserver.observe(el));


    /* ========== 2. Nav scroll effect ========== */
    const nav = document.querySelector('nav');

    function onNavScroll() {
        if (window.scrollY > 40) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', onNavScroll, { passive: true });
    onNavScroll();


    /* ========== 3. Nav active link highlight ========== */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    function highlightNav() {
        const y = window.scrollY + window.innerHeight / 3;
        let current = '';
        sections.forEach(s => {
            if (s.getBoundingClientRect().top + window.scrollY <= y) {
                current = s.id;
            }
        });
        navLinks.forEach(a => {
            a.classList.toggle(
                'active',
                a.getAttribute('href') === '#' + current
            );
        });
    }
    window.addEventListener('scroll', highlightNav, { passive: true });
    highlightNav();


    /* ========== 4. Mobile menu toggle ========== */
    const mobileMenu = document.getElementById('mobileMenu');
    document.querySelectorAll('#mobileMenu a').forEach(a => {
        a.addEventListener('click', () => {
            if (mobileMenu) mobileMenu.classList.remove('open');
        });
    });


    /* ========== 5. Hero word animation replay on re-entry ========== */
    const heroSection = document.getElementById('home');
    let heroLeftOnce = false;

    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && heroLeftOnce) {
                document.querySelectorAll('.hero-word').forEach(w => {
                    w.classList.remove('visible');
                    void w.offsetWidth;
                    w.classList.add('visible');
                });
            }
            if (!entry.isIntersecting) {
                heroLeftOnce = true;
            }
        });
    }, { threshold: 0.25 });

    if (heroSection) {
        heroObserver.observe(heroSection);
    }

});
