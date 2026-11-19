import { useEffect, useState } from 'react';

function Footer() {
    const [systemInfo, setSystemInfo] = useState({ userAgent: '', platform: '' });

    useEffect(() => {
        // 1. Зчитуємо дані про браузер та ОС при монтуванні компонента
        // 2. Зберігаємо їх у localStorage
        localStorage.setItem('userAgent', navigator.userAgent);
        localStorage.setItem('platform', navigator.platform);

        // 3. Отримуємо дані з localStorage та зберігаємо у стані для відображення
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setSystemInfo({
            userAgent: localStorage.getItem('userAgent'),
            platform: localStorage.getItem('platform'),
        });
    }, []);

    return (
        <footer className="rounded-2xl bg-slate-900 p-6 text-white shadow-lg dark:bg-slate-950 dark:ring-1 dark:ring-slate-700">
            <h2 className="mb-5 text-xl font-bold">
                Контакти
            </h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-slate-800 p-4">
                    <p className="mb-2 text-sm text-slate-400">
                        Електронна пошта
                    </p>

                    <a
                        href="mailto:denys.vysotskyi.kb.2025@lpnu.ua"
                        className="break-words text-blue-300 transition hover:text-white hover:underline"
                    >
                        denys.vysotskyi.kb.2025@lpnu.ua
                    </a>
                </div>

                <div className="rounded-xl bg-slate-800 p-4">
                    <p className="mb-2 text-sm text-slate-400">
                        GitHub
                    </p>

                    <a
                        href="https://github.com/Derin31-io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-300 transition hover:text-white hover:underline"
                    >
                        Мій профіль GitHub ↗
                    </a>
                </div>
            </div>

            <div className="mt-4 rounded-xl bg-slate-800 p-4 text-sm">
                <p className="mb-2 text-slate-400">
                    Інформація про систему (з localStorage)
                </p>
                <p className="break-words">
                    <span className="font-semibold text-blue-300">Платформа:</span> {systemInfo.platform}
                </p>
                <p className="mt-1 break-words">
                    <span className="font-semibold text-blue-300">User Agent:</span> {systemInfo.userAgent}
                </p>
            </div>

            <p className="mt-6 border-t border-slate-700 pt-4 text-center text-sm text-slate-400">
                © 2026 Денис Висоцький
            </p>
        </footer>
    );
}

export default Footer;