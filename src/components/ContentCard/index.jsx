import React from 'react'
import personImg from '../../assets/img/person-content-card.svg'

export default function ContentCard() {
    return (
        <div className='flex flex-col drop-shadow-md'>
            <div className='bg-blueZodiac rounded-t-[20px] flex gap-x-[17px] px-[28px] pt-[16px]'>
                <img src={personImg} alt='Tugas Akhir Edspert React Batch 3 Supriyadi' />
                <div className='flex flex-col gap-y-[9px]'>
                    <p className="font-['Mulish'] text-yellow font-[800] text-[16px] leading-[20px]">Intensive Bootcamp</p>
                    <p className="font-['Mulish'] text-white font-[800] text-[20px] leading-[20px]">Programming Laravel</p>
                    <p className="font-['Mulish'] text-white font-[400] text-[12px] leading-[20px] ">(Getting Started with Laravel 9)</p>
                </div>
            </div>
            <div className='bg-white rounded-b-[20px] flex gap-x-[17px] px-[28px] py-[16px]'>
                <div className='flex flex-col gap-y-[9px]'>
                    <p className="font-['Mulish'] text-black font-[800] text-[20px] leading-[25px]">Programming Laravel</p>
                </div>
            </div>
        </div>
    )
}
