import React from 'react'

export const MultipleSearch: React.FC = () => {
  return (
    <div className="crypt-shaped-block">
      <form id="multipleForm">
        <label>
          <p>Начальная дата:</p>
          <input type="date" min="2018-01-01" max="2021-12-31" />
        </label>
        <label>
          <p>Конечная дата:</p>
          <input type="date" disabled />
        </label>
        <label>
          <p>Cумма в месяц ($):</p>
          <input type="text" />
        </label>
        <label>
          <p>Название монеты:</p>
          <input type="text" />
        </label>
        <button>Произвести вычисление</button>
      </form>
    </div>
  )
}
