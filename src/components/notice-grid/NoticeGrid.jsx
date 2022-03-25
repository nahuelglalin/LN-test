import React, { useContext } from 'react';
import NoticeGridItem from './NoticeGridItem';
import { ArticlesContext } from '../../context/ArticlesContext';
import './notice-grid.css';

const NoticeGrid = () => {
    
    const { data, loading } = useContext(ArticlesContext);

    return (
        <div>
            {loading && <h3 className='loading-articles'>Cargando noticas...</h3>}
            <div className='gallery'>
                {
                    (data.map(noticia => (
                        <NoticeGridItem
                            key={noticia.id}
                            {...noticia}
                        />)))
                }
            </div>
        </div>
    )
}

export default NoticeGrid