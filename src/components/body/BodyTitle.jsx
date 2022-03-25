import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArticlesContext } from '../../context/ArticlesContext';
import { groupTags } from '../../helpers/groupTags';
import '../../styles.css';
import './body.css';

const BodyTitle = () => {
    const { data } = useContext(ArticlesContext);

    const [tags, setTags] = useState([]);

    useEffect(() => {
        setTags(groupTags(data));
    }, [data]);

    return (
        <div>
            <h1 className='body-title'>Acumulado Grilla</h1>
            <div className='body-tags'>
                {tags.map(tag =>
                    <Link
                        className='text-decoration-none'
                        to={"/tema/" + tag.slug}
                        key={tag.slug}
                    >
                        <p className='body-tags-item'> {tag.text} </p>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default BodyTitle