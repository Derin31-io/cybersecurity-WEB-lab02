import { useEffect, useState } from 'react';

// Ендпойнт форми Formspree (той самий, що й у Частині 1)
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xdeelpan';
const MODAL_DELAY_MS = 60000; // 1 хвилина
const CLOSED_KEY = 'feedbackModalClosed';

const inputClass =
    'mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-800 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100 dark:focus:ring-blue-900';

function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Не відкриваємо повторно, якщо користувач уже закрив вікно під час цієї сесії
        if (sessionStorage.getItem(CLOSED_KEY)) return;

        const timer = setTimeout(() => setIsOpen(true), MODAL_DELAY_MS);
        return () => clearTimeout(timer); // прибираємо таймер при розмонтуванні
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        sessionStorage.setItem(CLOSED_KEY, 'true');
    };

    return (
        isOpen && (
            <div
                className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4"
                onClick={(e) => e.target === e.currentTarget && handleClose()}
            >
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="contact-title"
                    className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl dark:bg-slate-800 dark:text-slate-100"
                >
                    <h2 id="contact-title" className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
                        Зворотний зв'язок
                    </h2>

                    <form action={FORMSPREE_ENDPOINT} method="POST" className="flex flex-col gap-3">
                        <label className="text-sm font-medium">
                            Ім'я
                            <input type="text" name="name" required className={inputClass} />
                        </label>
                        <label className="text-sm font-medium">
                            Email
                            <input type="email" name="email" required className={inputClass} />
                        </label>
                        <label className="text-sm font-medium">
                            Телефон
                            <input type="tel" name="phone" placeholder="+380XXXXXXXXX" required className={inputClass} />
                        </label>
                        <label className="text-sm font-medium">
                            Повідомлення
                            <textarea name="message" rows="4" required className={inputClass} />
                        </label>

                        <div className="mt-2 flex justify-end gap-3">
                            <button
                                type="button"
                                onClick={handleClose}
                                className="rounded-lg border border-slate-300 px-4 py-2 font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-700"
                            >
                                Закрити
                            </button>
                            <button
                                type="submit"
                                className="rounded-lg bg-blue-700 px-4 py-2 font-medium text-white transition hover:bg-blue-800"
                            >
                                Надіслати
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    );
}

export default ContactForm;
