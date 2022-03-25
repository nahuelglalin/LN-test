import React from 'react';
import { formatDate } from '../../helpers/formatDate';
import './notice-grid-item.css';

const NoticeGridItem = ({ title, subtitle, img, date }) => {
    //Imagen a mostrar en caso de que la API no traiga una imagen
    const imgNotAvailable = 'https://extyseg.com/wp-content/uploads/2019/04/EXTYSEG-imagen-no-disponible.jpg';

    date = formatDate(date);
   
    return (
            <div className="notice-card">
                <div className='notice-img'>
                    <img src={img ? img : imgNotAvailable} alt={title} />
                </div>
                <div className='notice-info'>
                    <p>
                        <strong className='notice-title'> {title ? title : "Sin titulo"}. </strong> 
                        {subtitle ? subtitle : "Sin subtitulo"}
                    </p>
                    <label>{date}</label>
                </div>
            </div>
    )
}

export default NoticeGridItem