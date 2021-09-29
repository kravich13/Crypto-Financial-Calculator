import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar: React.FC = () => {
  const setDocTitle = (title: string): void => {
    document.title = `That is ${title}`
  }

  return (
    <div>
      <ul>
        <li onClick={() => setDocTitle('Vlad')}>
          <NavLink to="/">Перейти к Владу</NavLink>
        </li>
        <li onClick={() => setDocTitle('Max')}>
          <NavLink to="/max">Перейти к Максу</NavLink>
        </li>
        <li onClick={() => setDocTitle('Kate')}>
          <NavLink to="/kate">Перейти к Кате</NavLink>
        </li>
      </ul>
    </div>
  )
}
