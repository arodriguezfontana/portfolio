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
        <>
            <nav className="fixed top-0 left-0 w-full z-50 ">

                <ul className="flex justify-center gap-5 p-4">
                    {links.map((l) => (
                        <li key={l.name}>
                            <a href={l.href}>{l.name}</a>
                        </li>
                    ))}
                </ul>
                <ul className="flex justify-center gap-5 ">
                    <li>
                        <button
                            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                            className="w-10 text-center"
                        >
                            {theme === "light" ? "🌙" : "☀️"}
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => setLang(lang === "es" ? "en" : "es")}
                            className="w-10 text-center"
                        >
                            {lang.toUpperCase()}
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    )
}