import React from 'react'

export const Title: React.FC = () => {
  const pathName: string = window.location.pathname
  const setTitle = (title: string): string => (document.title = title)

  switchToPath(pathName)

  function switchToPath(pathName: string): void {
    switch (pathName) {
      case '/':
        setTitle('Crypto calculator')
        break
      default:
        setTitle('Page not found')
    }
  }

  window.onpopstate = (): void => {
    const pathName: string = document.location.pathname
    switchToPath(pathName)
  }

  return null
}
