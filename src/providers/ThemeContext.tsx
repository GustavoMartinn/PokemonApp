import React, { useMemo, createContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { useLocalStorage } from '../hooks/useLocalStorage'
import GlobalStyles from '../styles/global'

import themes from '../styles/themes'

export const ThemeContext = createContext({
  onToggleTheme: () => {
    return
  },
})

type Props = {
  children: JSX.Element
}

export function ThemeContextProvider({ children }: Props) {
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  const currentTheme = useMemo(() => {
    if (theme === 'dark' || theme === 'light') return themes[theme]
    return themes.dark
  }, [theme])

  function handleToggleTheme() {
    setTheme((prevState: string) => (prevState === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider
      value={{
        onToggleTheme: handleToggleTheme,
      }}
    >
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles theme={currentTheme} />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
