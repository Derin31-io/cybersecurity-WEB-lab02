// Лабораторна робота №4 — Робота з JavaScript (варіант 4)

const VARIANT = 4;
const MODAL_DELAY_MS = 60 * 1000; // 1 хвилина

/* ---------- 1. Зберігання даних у браузері (localStorage) ---------- */

function saveSystemInfo() {
    const info = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        languages: (navigator.languages || []).join(', '),
        vendor: navigator.vendor,
        cookieEnabled: navigator.cookieEnabled,
        online: navigator.onLine,
        hardwareConcurrency: navigator.hardwareConcurrency,
        deviceMemory: navigator.deviceMemory ? navigator.deviceMemory + ' GB' : 'невідомо',
        maxTouchPoints: navigator.maxTouchPoints,
        screen: screen.width + 'x' + screen.height,
        colorDepth: screen.colorDepth + ' bit',
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };

    // localStorage зберігає лише рядки, тому кожне значення перетворюємо на рядок
    for (const [key, value] of Object.entries(info)) {
        localStorage.setItem(key, String(value));
    }
}

function renderLocalStorage() {
    const list = document.getElementById('system-info-list');
    list.innerHTML = '';

    // Виводимо ВСЕ, що є у localStorage
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const li = document.createElement('li');
        const strong = document.createElement('strong');
        strong.textContent = key + ': ';
        li.appendChild(strong);
        li.appendChild(document.createTextNode(localStorage.getItem(key)));
        list.appendChild(li);
    }
}

/* ---------- 2. Відгуки з сервера (Fetch API) ---------- */

async function loadReviews() {
    const status = document.getElementById('reviews-status');
    const list = document.getElementById('reviews-list');

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`);
        if (!response.ok) {
            throw new Error('HTTP ' + response.status);
        }
        const comments = await response.json();

        status.remove();
        // Відображаємо коментарі у порядку їх отримання
        comments.forEach((comment) => {
            const card = document.createElement('article');
            card.className = 'card review';

            const title = document.createElement('h3');
            title.textContent = comment.name;

            const email = document.createElement('p');
            email.className = 'review-email';
            email.textContent = comment.email;

            const body = document.createElement('p');
            body.textContent = comment.body;

            card.append(title, email, body);
            list.appendChild(card);
        });
    } catch (error) {
        console.error('Error: ', error);
        status.textContent = 'Не вдалося завантажити відгуки. Спробуйте пізніше.';
    }
}

/* ---------- 3. Модальне вікно з формою зворотного зв'язку ---------- */

function initFeedbackModal() {
    const modal = document.getElementById('feedback-modal');
    const closeBtn = document.getElementById('modal-close');

    const openModal = () => {
        // Якщо користувач вже закрив вікно під час цієї сесії — не показуємо знову
        if (sessionStorage.getItem('feedbackModalClosed')) return;
        modal.hidden = false;
    };

    const closeModal = () => {
        modal.hidden = true;
        sessionStorage.setItem('feedbackModalClosed', 'true');
    };

    setTimeout(openModal, MODAL_DELAY_MS);

    closeBtn.addEventListener('click', closeModal);
    // Закриття по кліку поза вікном
    modal.addEventListener('click', (event) => {
        if (event.target === modal) closeModal();
    });
    // Закриття клавішею Escape
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !modal.hidden) closeModal();
    });
}

/* ---------- 4. Денна / нічна тема ---------- */

function isDayTime() {
    const hours = new Date().getHours();
    return hours >= 7 && hours < 21; // денна тема з 07:00 до 21:00
}

function applyTheme(theme) {
    const toggle = document.getElementById('theme-toggle');
    document.body.classList.toggle('dark-mode', theme === 'dark');
    toggle.textContent = theme === 'dark' ? '☀️ Денна тема' : '🌙 Нічна тема';
}

function initTheme() {
    let theme = isDayTime() ? 'light' : 'dark';
    applyTheme(theme);

    document.getElementById('theme-toggle').addEventListener('click', () => {
        theme = theme === 'dark' ? 'light' : 'dark';
        applyTheme(theme);
    });
}

/* ---------- Запуск ---------- */

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    saveSystemInfo();
    renderLocalStorage();
    loadReviews();
    initFeedbackModal();
});
