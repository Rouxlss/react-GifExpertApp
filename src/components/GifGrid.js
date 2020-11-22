import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);

    
    return (
        <>
        
            {loading && <p className="animate__animated animate__fadeIn" >Loading...</p>}

            <h2 className="animate__animated animate__fadeIn">{category}</h2>

            <div className="card-grid">
            {
                images.map(img => (
                    <GifGridItem 
                        key={img.id}
                        {...img}
                    />
                ))
            }
            </div>
        </>
    )
}

export default GifGrid;