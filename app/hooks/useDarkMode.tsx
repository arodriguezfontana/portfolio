import { useEffect, useState } from 'react'

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = window.document.documentElement
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [isDark])

  const toggleDarkMode = () => setIsDark(prev => !prev)

  return { isDark, toggleDarkMode }
}
