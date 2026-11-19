function Education() {
    return (
        <section className="h-full rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-800 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-2xl dark:bg-emerald-900/40">
                    🎓
                </div>

                <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                        Освіта
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Навчання та кваліфікація
                    </p>
                </div>
            </div>

            <div className="border-l-2 border-emerald-200 pl-4 dark:border-emerald-800">
                <h3 className="text-lg font-semibold leading-7 text-slate-800 dark:text-slate-100">
                    Бакалавр, спеціальність 125 «Кібербезпека та захист інформації»
                </h3>

                <p className="mt-4 leading-7 text-slate-600 dark:text-slate-300">
                    <strong className="text-emerald-800 dark:text-emerald-300">
                        Національний університет «Львівська політехніка»
                    </strong>
                </p>
            </div>
        </section>
    );
}

export default Education;