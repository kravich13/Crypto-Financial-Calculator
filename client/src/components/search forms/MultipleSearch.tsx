import React from 'react'

export const MultipleSearch: React.FC = () => {
  return (
    <div>
      <form id="multipleForm">
        <label>
          <p>Полное название монеты:</p>
          <input type="text" />
        </label>
        <label>
          <p>Cумма в месяц ($):</p>
          <input type="text" />
        </label>
        <label>
          <p>Начальная дата:</p>
          <input type="date" min="2018-01-01" max="2021-12-31" />
        </label>
        <label>
          <p>Конечная дата:</p>
          <input type="date" />
        </label>
        <button>Получить результат</button>
      </form>
    </div>
  )
}
