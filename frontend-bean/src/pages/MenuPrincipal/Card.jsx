import React, { useState } from 'react';
import './card.css';

function Card() {
  const currentDate = new Date();
  const formattedDate = `${currentDate.toLocaleTimeString()} - ${currentDate.toLocaleDateString()}`;

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  return (
    <>
      <div className="card-menu">
        <i className="fa-solid fa-tag icon" style={{ float: 'right', fontSize: 50}}></i>
        <p className='card-text-menu' style={{ marginRight: '100px' }}>Vendas Hoje</p>
        <p className='card-date-menu' style={{ marginRight: '75px' }}>{formattedDate}</p>
      </div>

      <div className="card-menu">
        <i className="fa-solid fa-chart-line icon" style={{ float: 'right', fontSize: 50}}></i>
        <p className='card-text-menu' style={{ marginRight: '100px' }}>Vendas (Período)</p>
        <div className="date-inputs-menu">
          <div>
            <label htmlFor="startDate">Data de Início:</label>
            <input type="date" id="startDate" value={startDate} onChange={handleStartDateChange} />
          </div>
          <div>
            <label htmlFor="endDate">Data de Término:</label>
            <input type="date" id="endDate" value={endDate} onChange={handleEndDateChange} />
          </div>
        </div>
      </div>

      <div className="card-menu">
        <i className="fa-solid fa-hand-holding icon" style={{ float: 'right', fontSize: 50 }}></i>
        <p className='card-text-menu' style={{ marginRight: '100px' }}>Quantidade de Venda(s)</p>
        <div className="date-inputs-menu">
          <div>
            <label htmlFor="startDate">Data de Início:</label>
            <input type="date" id="startDate" value={startDate} onChange={handleStartDateChange} />
          </div>
          <div>
            <label htmlFor="endDate">Data de Término:</label>
            <input type="date" id="endDate" value={endDate} onChange={handleEndDateChange} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
