import React from 'react'
import ProductCard from '../../components/ProductCard'
import Pagination from '../../components/Pagination'

export default function ProductList() {
    // Bootcamp List Data (Temporary for Edspert assignment 1)
    const bootcampData = []
    for (let i = 0; i < 12; i++) {
        bootcampData.push(<ProductCard key={i} />)
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
