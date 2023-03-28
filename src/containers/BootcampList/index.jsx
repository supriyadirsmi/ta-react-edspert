import React from 'react'
import ContentCard from '../../components/ContentCard'
import Pagination from '../../components/Pagination'

export default function BootcampList() {
    // Bootcamp List Data (Temporary for Edspert assignment 1)
    const bootcampData = []
    for (let i = 0; i < 12; i++) {
        bootcampData.push(<ContentCard key={i} />)
    }

    return (
        <>
            <div className='grid grid-cols-4 gap-[29px]'>
                {bootcampData}
            </div>
            <Pagination />
        </>
    )
}
