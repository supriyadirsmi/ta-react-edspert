import React from 'react'
import personImg from '../../assets/img/person-content-card.svg'

export default function ContentCard() {
    return (
        <div className='flex flex-col drop-shadow-md'>
            <div className='bg-darkBlue rounded-t-[20px] flex gap-x-[17px] pl-[28px] pt-[16px]'>
                <img src={personImg} alt='Tugas Akhir Edspert React Batch 3 Supriyadi' />
                <div className='flex flex-col gap-y-[9px]'>
                    <p className="font-['Mulish'] text-yellow font-[800] text-[16px] leading-[20px]">Intensive Bootcamp</p>
                    <div>
                    <p className="font-['Mulish'] text-white font-[800] text-[18px] leading-[30px]">Programming Laravel</p>
                    <p className="font-['Mulish'] text-white font-[400] text-[12px] ">(Getting Started with Laravel 9)</p>
                    </div>
                </div>
            </div>
            <div className='bg-white rounded-b-[20px] flex gap-x-[17px] px-[28px] py-[16px]'>
                <div className='flex flex-col'>
                    <p className="font-['Mulish'] text-black font-[800] text-[20px] leading-[25px]">Programming Laravel</p>
                    <p className="font-['Mulish'] text-black font-[800] text-[17px] leading-[25px]">Getting Started with Laravel 9</p>
                    <div className='flex mt-[7px] gap-x-[16px]'>
                        <div>
                            <p className="font-['Mulish'] text-black font-[600] text-[12px] leading-[20px] opacity-50">Batch</p>
                            <p className="font-['Mulish'] text-black font-[600] text-[12px] leading-[20px] opacity-50">Mentor</p>
                        </div>
                        <div>
                            <p className="font-['Mulish'] text-black font-[600] text-[12px] leading-[20px]">September 2022</p>
                            <p className="font-['Mulish'] text-black font-[600] text-[12px] leading-[20px]">William Hartono, Farel Prayoga</p>
                        </div>
                    </div>
                    <div className='flex justify-end mt-[14px] gap-x-[6px]'>
                        <p className="font-['Mulish'] text-black font-[500] text-[13px] leading-[20px] opacity-50 line-through align-top">Rp 2060.000</p>
                        <p className="font-['Mulish'] text-green font-[800] text-[20px] leading-[20px]">Rp 560.000</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
