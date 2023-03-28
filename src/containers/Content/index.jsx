import React from 'react'
import ContentCard from '../../components/ContentCard'

export default function Content() {
    return (
        <div className='container-content grid grid-cols-4 gap-[29px]'>
            <ContentCard />
            <ContentCard />
            <ContentCard />
            <ContentCard/>
        </div>
    )
}
