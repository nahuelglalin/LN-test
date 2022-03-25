import React from 'react';
import NoticeGrid from '../notice-grid/NoticeGrid';
import BodyTitle from './BodyTitle';
import './body.css';

const BodyScreen = () => {
  return (
    <section className='body-section'>
      <div className='lay'>
        <div className='body-screen'>
          <BodyTitle />
          <div className='body-notices'>
            <NoticeGrid />
          </div>
          <div className='notes'>
            <button className='--btn --secondary'> MÁS NOTAS DE ACUMULADO GRILLA </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BodyScreen