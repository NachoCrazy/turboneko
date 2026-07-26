/* ===== SoulMate App Intro — app.js ===== */

document.addEventListener('DOMContentLoaded', () => {

    /* ========== 0. Enable JS-driven animations ========== */
    document.documentElement.classList.add('js-enabled');

    /* ========== i18n translations ========== */
    const translations = {
        zh: {
            app_subtitle: '你的 AI 伴侣 — 隐私优先，本地运行，完全属于你。',
            app_explore: '了解功能', app_github: 'GitHub 查看源码',
            why_label: '为什么做 SoulMate',
            why_title: '我们相信，你的 AI 伴侣应该 <span class="highlight">真正属于你。</span>',
            why_desc: '市面上大多数 AI 伴侣应用都会将你的对话发送到云端服务器 — 你不知道谁在看，也无法在预设选项之外自定义你的体验。',
            why_desc2: 'SoulMate 源于一个简单的理念：<strong>你的数据、你的模型、你的规则。</strong>通过在你自己的机器上本地运行 AI，你获得了完全的隐私、充分的定制，以及一个真正属于你的伴侣。',
            why_desc3: '无论是聊天、在日记里记录日常、分享文件，还是只是需要有人陪伴 — SoulMate 将一切都留在你的设备上，零云端依赖。',
            features_label: '核心功能',
            features_title: '你需要的一切，没有多余的。',
            feat_chat_title: 'AI 对话',
            feat_chat_desc: '由本地 AI 模型驱动的实时对话。你的消息永远不会离开你的设备。',
            feat_moments_title: '朋友圈',
            feat_moments_desc: '分享和浏览社交动态。发布你每天的精彩瞬间，看看你的 AI 伙伴在做什么。',
            feat_diary_title: '日记',
            feat_diary_desc: '一本会记住的个人日记。AI 帮你总结一天、追踪你的情绪变化。',
            feat_contacts_title: '通讯录',
            feat_contacts_desc: '管理多个拥有不同个性的 AI 伴侣。每个角色都有独立的聊天记录和性格特征。',
            feat_files_title: '文件分享',
            feat_files_desc: '在聊天中直接发送图片、文档和文件。所有传输都在你的本地网络中进行。',
            feat_theme_title: '主题切换',
            feat_theme_desc: '精美的 Material You 动态主题。深色、浅色和自动模式，跟随系统或你的心情。',
            arch_label: '系统架构',
            arch_title: '天生 Local-first。',
            arch_desc: 'SoulMate 完全运行在你的本地网络上。没有云端 API、没有遥测、没有订阅。你的 Android 设备连接到运行在 PC 上的 Flask 后端，由 Flask 与 Ollama 通信进行本地 AI 推理。',
            arch_priv: '100% 隐私',
            arch_priv_desc: '所有数据都留在你的设备上。零外部网络请求。',
            arch_speed: '快速推理',
            arch_speed_desc: '由本地 GPU 加速驱动。没有 API 延迟。',
            arch_custom: '完全可定制',
            arch_custom_desc: '自由切换模型、调整提示词、修改性格 — 你说了算。',
            tech_label_page: '技术栈',
            tech_title_page: '用现代工具构建。',
            back_home: '返回首页',
            footer_desc: '致力于二次元文化、汽车文化与科技创意的跨界融合。<br>通过视觉、产品与游戏，打造速度与风格并存的独特体验。',
            footer_links: '快速链接', footer_follow: '关注我们', footer_contact: '联系方式'
        },
        en: {
            app_subtitle: 'Your AI Companion — Private, Local, Personal.',
            app_explore: 'Explore Features', app_github: 'View on GitHub',
            why_label: 'Why SoulMate',
            why_title: 'We believe your AI companion should be <span class="highlight">truly yours.</span>',
            why_desc: 'Most AI companion apps route your conversations through cloud servers — you don\'t know who reads them, and you can\'t customize your experience beyond preset options.',
            why_desc2: 'SoulMate was born from a simple idea: <strong>your data, your model, your rules.</strong> By running the AI locally on your own machine, you get complete privacy, full customization, and a companion that truly feels like it belongs to you.',
            why_desc3: 'Whether it\'s chatting about your day, recording moments in a diary, sharing files, or just having someone there — SoulMate keeps it all on your device, with zero cloud dependency.',
            features_label: 'Core Features',
            features_title: 'Everything you need, nothing you don\'t.',
            feat_chat_title: 'AI Chat',
            feat_chat_desc: 'Real-time conversations powered by local AI models. Your messages never leave your device.',
            feat_moments_title: 'Moments',
            feat_moments_desc: 'Share and browse a social feed. Post your daily highlights and see what your companions are up to.',
            feat_diary_title: 'Diary',
            feat_diary_desc: 'A personal journal that remembers. AI helps summarize your day and track your mood over time.',
            feat_contacts_title: 'Contacts',
            feat_contacts_desc: 'Manage multiple AI companions with unique personalities. Each one has its own chat history and traits.',
            feat_files_title: 'File Sharing',
            feat_files_desc: 'Send images, documents, and files directly in chat. All transfers happen on your local network.',
            feat_theme_title: 'Themes',
            feat_theme_desc: 'Beautiful Material You dynamic theming. Dark, light, and auto modes that follow your system or your mood.',
            arch_label: 'Architecture',
            arch_title: 'Local-first by design.',
            arch_desc: 'SoulMate runs entirely on your local network. No cloud APIs, no telemetry, no subscriptions. Your Android device connects to a Flask backend running on your PC, which communicates with Ollama for local AI inference.',
            arch_priv: '100% Private',
            arch_priv_desc: 'All data stays on your devices. Zero external network calls.',
            arch_speed: 'Fast Inference',
            arch_speed_desc: 'Powered by local GPU acceleration. No API latency.',
            arch_custom: 'Fully Customizable',
            arch_custom_desc: 'Swap models, tweak prompts, modify personalities — you\'re in control.',
            tech_label_page: 'Tech Stack',
            tech_title_page: 'Built with modern tools.',
            back_home: 'Back to Home',
            footer_desc: 'Dedicated to the cross-boundary fusion of anime culture,<br>automotive aesthetics, and creative tech.<br>Where speed meets style.',
            footer_links: 'Quick Links', footer_follow: 'Follow Us', footer_contact: 'Contact'
        }
    };

    let currentLang = localStorage.getItem('tns-lang') || 'en';

    function applyLang(lang) {
        currentLang = lang;
        localStorage.setItem('tns-lang', lang);
        const t = translations[lang];
        if (!t) return;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (t[key]) el.innerHTML = t[key];
        });
        const label = document.getElementById('langLabel');
        if (label) label.textContent = lang === 'zh' ? '中文' : 'EN';
    }

    document.getElementById('langSwitch').addEventListener('click', () => {
        applyLang(currentLang === 'zh' ? 'en' : 'zh');
    });
    applyLang(currentLang);

    /* ========== Scroll fade-up ========== */
    const fadeEls = document.querySelectorAll('.fade-up, .hero-btn');
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
    }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });
    fadeEls.forEach(el => scrollObserver.observe(el));

    /* ========== Nav scroll effect ========== */
    const nav = document.querySelector('nav');
    function onNavScroll() {
        nav.classList.toggle('scrolled', window.scrollY > 40);
    }
    window.addEventListener('scroll', onNavScroll, { passive: true });
    onNavScroll();

    /* ========== Mobile menu ========== */
    const mobileMenu = document.getElementById('mobileMenu');
    document.querySelectorAll('#mobileMenu a').forEach(a => {
        a.addEventListener('click', () => mobileMenu && mobileMenu.classList.remove('open'));
    });

});
