import { RevealOnScroll } from '../RevealOnScroll';

export const Contact = () => {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">
                        <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">Get In Touch</span>
                    </h2>
                    
                    <div className="flex flex-col items-center gap-6">
                        <div 
                            className="group flex items-center gap-3 px-6 py-3 rounded-xl border border-white/10 hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,140,246,0.1)] transition-all cursor-pointer"
                            onClick={() => {
                                navigator.clipboard.writeText('Jane.phusanisa@gmail.com');
                                alert('Email copied to clipboard!');
                            }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="text-gray-300 group-hover:text-blue-500 transition-colors">Jane.phusanisa@gmail.com</span>
                        </div>

                        <a 
                            href="https://github.com/PhusanisaKhongsuk" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 px-6 py-3 rounded-xl border border-white/10 hover:border-blue-500/30 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,140,246,0.1)] transition-all"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            <span className="text-gray-300 group-hover:text-blue-500 transition-colors">PhusanisaKhongsuk</span>
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}
