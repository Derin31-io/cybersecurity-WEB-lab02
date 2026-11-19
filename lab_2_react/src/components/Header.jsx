function Header({ theme, onToggleTheme }) {
    return (
        <header className="relative flex flex-col items-center rounded-2xl bg-gradient-to-r from-slate-900 to-blue-800 px-6 py-10 text-center text-white shadow-xl dark:from-slate-950 dark:to-indigo-950 dark:ring-1 dark:ring-slate-700">
            <button
                type="button"
                onClick={onToggleTheme}
                className="mb-4 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur transition hover:bg-white/25 sm:absolute sm:right-4 sm:top-4 sm:mb-0"
            >
                {theme === 'dark' ? '☀️ Денна тема' : '🌙 Нічна тема'}
            </button>

            <h1 className="text-3xl font-bold tracking-wide sm:text-4xl">
                Денис Висоцький
            </h1>

            <p className="mt-3 text-base text-blue-100 sm:text-lg">
                Студент спеціальності «Кібербезпека»
            </p>

            <p className="mt-4 rounded-full bg-white/15 px-4 py-1 text-sm text-blue-50">
                🚀 Сайт розгорнуто на Vercel
            </p>
        </header>
    );
}

export default Header;