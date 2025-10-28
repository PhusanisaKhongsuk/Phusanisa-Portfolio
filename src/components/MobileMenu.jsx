import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div
            className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[rgba(10,10,10,0.8)] z-40" />
            
            {/* Menu content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-50">
                <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-white text-3xl focus:outline-none z-50">
                    &times;
                </button>
                <a href="#home" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>Home</a>
                <a href="#about" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>About</a>
                <a href="#projects" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>Projects</a>
                <a href="#contact" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>Contact</a>
            </div>
        </div>
    );
};