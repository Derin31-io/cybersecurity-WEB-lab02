import { useEffect, useState } from 'react';

const VARIANT = 4;

function Reviews() {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Порожній масив залежностей — запит виконується один раз при монтуванні
        async function fetchComments() {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`
                );
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
                const data = await response.json();
                setComments(data);
            } catch (err) {
                console.error('Error: ', err);
                setError('Не вдалося завантажити відгуки. Спробуйте пізніше.');
            } finally {
                setLoading(false);
            }
        }

        fetchComments();
    }, []);

    return (
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md dark:border-slate-700 dark:bg-slate-800">
            <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-2xl dark:bg-amber-900/40">
                    💬
                </div>
                <div>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                        Відгуки роботодавців
                    </h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Що кажуть попередні керівники
                    </p>
                </div>
            </div>

            {loading && <p className="text-slate-500 dark:text-slate-400">Завантаження відгуків...</p>}
            {error && <p className="text-red-600 dark:text-red-400">{error}</p>}

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {comments.map((comment) => (
                    <article
                        key={comment.id}
                        className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:shadow-md dark:border-slate-600 dark:bg-slate-700"
                    >
                        <h3 className="font-semibold capitalize text-slate-800 dark:text-white">
                            {comment.name}
                        </h3>
                        <p className="mt-1 text-sm text-blue-700 dark:text-blue-300">
                            {comment.email}
                        </p>
                        <p className="mt-3 leading-6 text-slate-600 dark:text-slate-300">
                            {comment.body}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Reviews;
