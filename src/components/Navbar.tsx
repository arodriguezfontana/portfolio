import { uiProps } from "@/types/uiProps";

export const Navbar = ({ lang, theme, setLang, setTheme }: uiProps) => {

    const links = [
        { name: lang === "es" ? "Inicio" : "Home", href: "#home" },
        { name: lang === "es" ? "Experiencia" : "Experience", href: "#experience" },
        { name: lang === "es" ? "Proyectos" : "Projects", href: "#projects" },
        { name: lang === "es" ? "Sobre mí" : "About", href: "#about" },
        { name: lang === "es" ? "Contacto" : "Contact", href: "#contact" }
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50">
            <div className="flex items-center justify-between px-6 py-6">

                <div className="w-20"></div>

                <ul className="flex gap-6">
                    {links.map((l) => (
                        <li key={l.name}>
                            <a href={l.href}>{l.name}</a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-4">
                    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                        {theme === "light" ? "🌙" : "☀️"}
                    </button>
                    <button
                        onClick={() => setLang(lang === "es" ? "en" : "es")}
                    >
                        {lang.toUpperCase()}
                    </button>
                </div>
            </div>
        </nav>
    );
};