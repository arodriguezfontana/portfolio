export type uiProps = {
  lang: "es" | "en";
  theme: "light" | "dark";
  setLang: React.Dispatch<React.SetStateAction<"es" | "en">>;
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
};