import React from 'react'
import ContentCard from '../../components/ContentCard'

export default function Content() {
    // Bootcamp List Data (Temporary for Edspert assignment 1)
    const bootcampList = []
    for (let i = 0; i < 12; i++) {
        bootcampList.push(<ContentCard key={i}/>) 
    }

    return (
        <div className='container-content grid grid-cols-4 gap-[29px]'>
            {bootcampList}
        </div>
    )
}
