"use client";

import { Navbar } from '../components/Navbar'
import { useState, useEffect } from "react";

export default function Home() {

  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [lang, setLang] = useState<"es" | "en">("es");

  return (
    <Navbar lang={lang} theme={theme} setLang={setLang} setTheme={setTheme}/>
  );
}