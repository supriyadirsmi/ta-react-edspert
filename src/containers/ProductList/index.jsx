import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard'
import { httpService } from '../../utils/service'

export default function ProductList() {
    const [list, setList] = useState([])

    // fetch mockup data from api
    const fetchCourse = async () => {
        const response = await httpService.get('/course')
        setList(response.data)
        console.log(response.data)
    }

    useEffect(() => {
        fetchCourse()
    }, [])
    

    return (
        <>
            <div className='grid grid-cols-4 gap-[29px]'>
                {list.map((item, idx) => {
                    return (
                        <ProductCard key={idx} courseId={item.id} title={item.title} mentor={item.mentor} discount={item.discountPrice} fixedPrice={item.fixedPrice} batchDate={ item.batchDate} />
                    )
                })}
            </div>
        </>
    )
}
