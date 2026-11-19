import { useEffect, useState } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
    const [theme, setTheme] = useState('light');

    // Автоматичне перемикання теми залежно від часу доби при першому завантаженні
    useEffect(() => {
        const hours = new Date().getHours();
        // За вимогами методички тема визначається саме в useEffect при першому завантаженні
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTheme(hours >= 7 && hours < 21 ? 'light' : 'dark');
    }, []);

    // Ручне перемикання
    const toggleTheme = () => {
        setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <main
            className={`${theme === 'dark' ? 'dark' : ''} min-h-screen bg-slate-100 px-4 py-8 text-slate-800 transition-colors duration-300 sm:px-6 lg:px-8 dark:bg-slate-900 dark:text-slate-200`}
        >
            <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
                <Header theme={theme} onToggleTheme={toggleTheme} />

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Experience />
                    <Education />
                </div>

                <Reviews />

                <Footer />
            </div>

            <ContactForm />
        </main>
    );
}

export default App;