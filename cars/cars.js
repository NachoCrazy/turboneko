/* ========== i18n for Cars Overview ========== */
const CARS_I18N = {
    zh: {
        nav_home: '首页',
        nav_cars: '四车产品线',
        nav_app: 'SoulMate',
        nav_game: '同人游戏',
        footer_desc: '独立开发工作室，专注于 AI 陪伴应用、游戏开发与软件工具。',
        footer_links: '友情链接',
        footer_contact: '联系方式',
        cars_hero1: '四种性格，',
        cars_hero2: '一种本能。',
        cars_hero_desc: 'TurboNeko 不局限于制造单一类型的汽车。我们坚信，人们的驾驶渴望从不只有一种形态——有时是优雅从容，有时是激情澎湃，有时是内敛克制，有时是纯粹本真。因此，我们打造了四款车型，分别代表四种驾驶人格。',
        car_gt_badge: 'GT 轿跑',
        car_gt_desc: '为「流动感」而生的电动GT轿跑。不追求极致速度的张扬，而是致力于在高速驰骋中展现从容气度。',
        car_rz_badge: 'JDM 性能',
        car_rz_desc: '回归驾驶本质的JDM性能座驾。没有多余的修饰，没有妥协的设计，没有冗余的科技包装。它存在的意义只有一个：为驾驶而生。',
        car_ur_badge: '双人格 SUV',
        car_ur_desc: '外表沉稳克制、内在强劲有力的双人格SUV。既可以是家庭日常通勤的得力助手，也能化身为释放激情的性能猛兽。',
        car_h_badge: 'Hypercar',
        car_h_desc: 'TurboNeko的终极之作，一款游走于现实边界的超跑。它并非为日常使用而设计，而是用来定义品牌的极限。',
        spec_power: '功率',
        spec_accel: '0-100',
        spec_range: '续航',
        spec_drive: '驱动',
        spec_weight: '整备',
        car_detail: '查看详情 →',
        cars_philo_title: '四种性格，一种本能',
        cars_philo_gt: '优雅地超越一切。速度静谧无声，却从不含糊迟疑。',
        cars_philo_rz: '驾驶本身，就是答案。它是为弯道而生的机械艺术品。',
        cars_philo_ur: '一台车，两种人生。在不同的人生场景中自如切换角色。',
        cars_philo_h: '速度的终点，不需要解释。它本身就是卓越的成果。',
        cars_philo_quote: 'TurboNeko does not build cars. It builds driving instincts.',
    },
    en: {
        nav_home: 'Home',
        nav_cars: 'Car Lineup',
        nav_app: 'SoulMate',
        nav_game: 'Fan Game',
        footer_desc: 'Independent dev studio focused on AI companion apps, game dev & software tools.',
        footer_links: 'Links',
        footer_contact: 'Contact',
        cars_hero1: 'Four Personalities, ',
        cars_hero2: 'One Instinct.',
        cars_hero_desc: 'TurboNeko does not build just one kind of car. We believe driving desire takes many forms — sometimes elegant, sometimes passionate, sometimes restrained, sometimes pure. That\'s why we built four models, each representing a distinct driving persona.',
        car_gt_badge: 'GT Coupe',
        car_gt_desc: 'An electric GT coupe born for "flow." It doesn\'t chase speed for spectacle — it delivers composure at velocity.',
        car_rz_badge: 'JDM Pure',
        car_rz_desc: 'A JDM performance machine that returns to driving\'s essence. No excess ornament, no compromised design, no redundant tech packaging. It exists for one reason: born to drive.',
        car_ur_badge: 'Dual-Soul SUV',
        car_ur_desc: 'A dual-personality SUV — restrained outside, potent within. Your daily commuter and weekend beast, in one chassis.',
        car_h_badge: 'Hypercar',
        car_h_desc: 'TurboNeko\'s ultimate expression. A hypercar that walks the boundary of reality, built not for daily use but to define the brand\'s limits.',
        spec_power: 'Power',
        spec_accel: '0-100',
        spec_range: 'Range',
        spec_drive: 'Drive',
        spec_weight: 'Weight',
        car_detail: 'View Details →',
        cars_philo_title: 'Four Personalities, One Instinct',
        cars_philo_gt: 'Elegant speed. Silent velocity, never hesitant.',
        cars_philo_rz: 'Driving itself is the answer. A mechanical work of art born for corners.',
        cars_philo_ur: 'One car, two lives. Seamlessly shifting roles across life\'s scenes.',
        cars_philo_h: 'At the limit of speed, no explanation needed. Excellence, unspoken.',
        cars_philo_quote: 'TurboNeko does not build cars. It builds driving instincts.',
    }
};

/* ========== Init ========== */
document.addEventListener('DOMContentLoaded', () => {
    document.documentElement.classList.add('js-enabled');

    const savedLang = localStorage.getItem('tns-lang') || 'zh';
    applyCarsLang(savedLang);

    document.getElementById('langSwitch').addEventListener('click', () => {
        const next = (localStorage.getItem('tns-lang') || 'zh') === 'zh' ? 'en' : 'zh';
        localStorage.setItem('tns-lang', next);
        applyCarsLang(next);
    });

    /* Scroll fade-up */
    const fadeEls = document.querySelectorAll('.fade-up, .cars-hero-title .hero-word, .cars-hero-desc');
    fadeEls.forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('visible');
    });
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });
    fadeEls.forEach(el => obs.observe(el));
});

function applyCarsLang(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (CARS_I18N[lang] && CARS_I18N[lang][key]) {
            el.textContent = CARS_I18N[lang][key];
        }
    });
    document.getElementById('langLabel').textContent = lang === 'zh' ? 'EN' : '中文';
}
