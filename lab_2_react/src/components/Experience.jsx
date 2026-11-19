function Experience() {
    return (
        <section className="h-full rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-2xl dark:bg-blue-900/40">
                    🛡️
                </div>

                <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                        Досвід роботи
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Практичний досвід
                    </p>
                </div>
            </div>

            <div className="border-l-2 border-blue-200 pl-4 dark:border-blue-800">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                    Молодший аналітик з кібербезпеки (Junior SOC Analyst)
                </h3>

                <p className="mt-3 font-bold text-blue-800 dark:text-blue-300">
                    ТОВ "CyberShield Ukraine"
                </p>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Травень 2025 – Теперішній час
                </p>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                    Моніторинг мережевого трафіку, аналіз логів системи,
                    швидке реагування на підозрілу активність та складання
                    звітів про інциденти безпеки.
                </p>
            </div>
        </section>
    );
}

export default Experience;