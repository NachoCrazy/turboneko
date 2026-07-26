/* ===== BA Fan Game Intro — game.js ===== */

document.addEventListener('DOMContentLoaded', () => {

    /* ========== 0. Enable JS-driven animations ========== */
    document.documentElement.classList.add('js-enabled');

    /* ========== i18n translations ========== */
    const translations = {
        zh: {
            nav_home: '首页', nav_projects: '项目', nav_story: '故事', nav_progress: '进度',
            game_title: '蔚蓝档案同人游戏',
            game_subtitle: 'Blue Archive Fan Game — 一段属于你的校园日常故事',
            game_explore: '了解故事', game_progress: '开发进度',
            why_label: '为什么要做这个游戏',
            why_title: '因为 <span class="highlight">蔚蓝档案</span> 值得被好好对待。',
            why_desc: '蔚蓝档案是一个充满青春、友情与冒险的游戏世界。当我们沉浸在基沃托斯的故事中时，总在想：如果能以一个普通学生的视角，去体验那些平凡而温暖的日常，会是什么感觉？',
            why_desc2: '我们想做的不是一个宏大的拯救世界的故事，而是关于<strong>放学后的天台、午休时的便当、社团活动的汗水</strong>，那些让人会心一笑的小事。',
            why_desc3: '这是一封写给基沃托斯的情书——用我们自己的方式，去探索那些官方故事没有展开的角落。',
            story_label: '游戏故事',
            story_title: '在基沃托斯的日常，从这里开始。',
            story_ch1_title: '序章：转学的第一天',
            story_ch1_desc: '你是一名刚转学到来自都的学生。在这座城市里，学生们组成了各种社团，用名为"战术核心"的装备进行着"对抗演习"。而你，作为一个没有特殊才能的普通学生，将如何度过你的校园生活？',
            story_ch2_title: '日常：社团与友情',
            story_ch2_desc: '加入一个社团，认识性格各异的同学。可能是热血的运动社团，安静的读书会，或者是神秘的超自然研究会？每个选择都会开启不同的日常故事线。',
            story_ch3_title: '羁绊：好感度系统',
            story_ch3_desc: '通过对话选择和共同活动，与角色建立更深的羁绊。好感度不仅影响故事走向，还会解锁专属的回忆片段和特殊事件。',
            story_ch4_title: '结局：你的选择',
            story_ch4_desc: '故事的结局由你的选择决定。是成为社团的支柱？找到志同道合的伙伴？还是发现基沃托斯隐藏的秘密？每一个结局都是你的专属故事。',
            features_label: '游戏特色', features_title: '经典视觉小说体验',
            feat_affection_title: '好感度系统', feat_affection_desc: '与角色建立羁绊，好感度影响剧情走向和结局。',
            feat_cg_title: 'CG 鉴赏', feat_cg_desc: '收集精美 CG 画面，回忆每一个重要时刻。',
            feat_memory_title: '回忆收集', feat_memory_desc: '重温经典场景，在回忆录中查看已解锁的故事。',
            feat_ending_title: '多结局', feat_ending_desc: '你的选择决定结局，每次游玩都有新的发现。',
            feat_music_title: '原声音乐', feat_music_desc: '精选 BGM 营造沉浸式校园氛围。',
            feat_dialogue_title: '分支对话', feat_dialogue_desc: '丰富的对话选项，每个选择都影响后续发展。',
            progress_label: '开发进度', progress_title: '开发路线图',
            progress_date1: '2025年12月', progress_step1_title: '项目启动', progress_step1_desc: '确定游戏方向：日常温馨向视觉小说，使用 Ren\'Py 引擎开发', progress_done: '已完成',
            progress_date2: '2026年1月', progress_step2_title: '世界观搭建', progress_step2_desc: '完成世界观设定、角色设计初稿、主线剧情大纲',
            progress_date3: '2026年2月', progress_step3_title: '系统原型', progress_step3_desc: '好感度系统、回忆收集、CG 鉴赏系统原型开发',
            progress_date4: '2026年3月 — 进行中', progress_step4_title: '剧本撰写', progress_step4_desc: '序章和第一章剧本撰写，分支对话设计', progress_active: '进行中',
            progress_date5: '2026年 — 计划中', progress_step5_title: '美术资源', progress_step5_desc: '角色立绘、背景场景、CG 插画制作', progress_plan: '计划中',
            progress_date6: '2026年 — 计划中', progress_step6_title: '测试与发布', progress_step6_desc: 'Beta 测试、Bug 修复、Demo 发布',
            stat_overall: '总体进度', stat_milestones: '里程碑完成', stat_version: '当前版本',
            back_home: '返回首页',
            footer_desc: '致力于二次元文化、汽车文化与科技创意的跨界融合。<br>通过视觉、产品与游戏，打造速度与风格并存的独特体验。',
            footer_links: '快速链接', footer_follow: '关注我们', footer_contact: '联系方式'
        },
        en: {
            nav_home: 'Home', nav_projects: 'Projects', nav_story: 'Story', nav_progress: 'Progress',
            game_title: 'Blue Archive Fan Game',
            game_subtitle: 'Blue Archive Fan Game — Your Daily Life in Kivotos',
            game_explore: 'Read the Story', game_progress: 'Dev Progress',
            why_label: 'Why We Made This',
            why_title: 'Because <span class="highlight">Blue Archive</span> deserves to be honored.',
            why_desc: 'Blue Archive is a world full of youth, friendship, and adventure. As we immersed ourselves in the story of Kivotos, we always wondered: what would it feel like to experience those ordinary yet warm daily moments from the perspective of an ordinary student?',
            why_desc2: 'We didn\'t want to make a grand world-saving story. Instead, we wanted to capture <strong>the rooftop after school, bento at lunch, and the sweat from club activities</strong> — the little things that make you smile.',
            why_desc3: 'This is a love letter to Kivotos — exploring the corners of the world that the official stories haven\'t yet unfolded, in our own way.',
            story_label: 'The Story',
            story_title: 'Your daily life in Kivotos starts here.',
            story_ch1_title: 'Chapter 1: First Day at a New School',
            story_ch1_desc: 'You are a transfer student arriving in Arius City. Here, students form various clubs and conduct "training exercises" using equipment called "Tactical Cores." As an ordinary student with no special talents, how will you spend your school life?',
            story_ch2_title: 'Daily Life: Clubs & Friendship',
            story_ch2_desc: 'Join a club and meet classmates with different personalities. Maybe the passionate sports club, a quiet reading group, or a mysterious paranormal research society? Each choice opens a different daily story.',
            story_ch3_title: 'Bonds: Affection System',
            story_ch3_desc: 'Build deeper bonds with characters through dialogue choices and shared activities. Affection not only affects the story\'s direction but also unlocks exclusive memories and special events.',
            story_ch4_title: 'Endings: Your Choice',
            story_ch4_desc: 'The story\'s ending is determined by your choices. Become a pillar of the club? Find like-minded friends? Or uncover the secrets hidden in Kivotos? Every ending is your unique story.',
            features_label: 'Game Features', features_title: 'Classic Visual Novel Experience',
            feat_affection_title: 'Affection System', feat_affection_desc: 'Build bonds with characters that affect story direction and endings.',
            feat_cg_title: 'CG Gallery', feat_cg_desc: 'Collect beautiful CG images to remember every important moment.',
            feat_memory_title: 'Memory Collection', feat_memory_desc: 'Relive classic scenes and view unlocked stories in the memoir.',
            feat_ending_title: 'Multiple Endings', feat_ending_desc: 'Your choices determine the ending. Each playthrough reveals something new.',
            feat_music_title: 'Original Soundtrack', feat_music_desc: 'Curated BGM to create an immersive campus atmosphere.',
            feat_dialogue_title: 'Branching Dialogues', feat_dialogue_desc: 'Rich dialogue options where every choice affects what happens next.',
            progress_label: 'Development Progress', progress_title: 'Development Roadmap',
            progress_date1: 'December 2025', progress_step1_title: 'Project Kickoff', progress_step1_desc: 'Determined game direction: daily life visual novel using Ren\'Py engine', progress_done: 'Done',
            progress_date2: 'January 2026', progress_step2_title: 'World Building', progress_step2_desc: 'Completed world settings, character design drafts, and main storyline outline',
            progress_date3: 'February 2026', progress_step3_title: 'System Prototype', progress_step3_desc: 'Affection system, memory collection, and CG gallery system prototype',
            progress_date4: 'March 2026 — In Progress', progress_step4_title: 'Script Writing', progress_step4_desc: 'Chapter 1 and prologue script writing, branching dialogue design', progress_active: 'In Progress',
            progress_date5: '2026 — Planned', progress_step5_title: 'Art Assets', progress_step5_desc: 'Character sprites, background scenes, CG illustrations', progress_plan: 'Planned',
            progress_date6: '2026 — Planned', progress_step6_title: 'Testing & Release', progress_step6_desc: 'Beta testing, bug fixes, Demo release',
            stat_overall: 'Overall', stat_milestones: 'Milestones', stat_version: 'Version',
            back_home: 'Back to Home',
            footer_desc: 'Dedicated to the cross-boundary fusion of anime culture,<br>automotive aesthetics, and creative tech.<br>Where speed meets style.',
            footer_links: 'Quick Links', footer_follow: 'Follow Us', footer_contact: 'Contact'
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
    if (mobileMenu) {
        mobileMenu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => mobileMenu.classList.remove('open'));
        });
        const closeBtn = mobileMenu.querySelector('.close-btn');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => mobileMenu.classList.remove('open'));
        }
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) mobileMenu.classList.remove('open');
        });
    }

});
