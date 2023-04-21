import React from 'react'
import personImg from '../../assets/img/person-content-card.svg'
import Moment from 'react-moment'
import { useNavigate } from 'react-router-dom'

export default function ProductCard(props) {

    const navigate = useNavigate()
    const goToDetailPage = (id) => {
        navigate(`/detail/${id}`)
    }

    return (
        <div className='flex flex-col drop-shadow-md cursor-pointer' onClick={() => goToDetailPage(props.courseId)}>
            <div className='bg-darkBlue rounded-t-[20px] flex gap-x-[17px] pl-[28px] pt-[16px]'>
                <img src={personImg} alt='Tugas Akhir Edspert React Batch 3 Supriyadi' />
                <div className='flex flex-col gap-y-[9px]'>
                    <p className="font-['Mulish'] text-yellow font-[800] text-[16px">Intensive Bootcamp</p>
                    <div>
                        <p className="font-['Mulish'] text-white font-[800] text-[18px]">{ props.title }</p>
                    </div>
                </div>
            </div>
            <div className='bg-white rounded-b-[20px] flex gap-x-[17px] pl-[24px] pr-[14px] py-[16px]'>
                <div className='flex flex-col w-full'>
                    <p className="font-['Mulish'] text-black font-[800] text-[20px]">{ props.title }</p>
                    <div className='flex mt-[7px] gap-x-[16px]'>
                        <div>
                            <p className="font-['Mulish'] text-black font-[600] text-[12px] leading-[20px] opacity-50">Batch</p>
                            <p className="font-['Mulish'] text-black font-[600] text-[12px] leading-[20px] opacity-50">Mentor</p>
                        </div>
                        <div>
                            <p className="font-['Mulish'] text-black font-[600] text-[12px] leading-[20px]">
                                <Moment format="MMMM YYYY">
                                    { props.batchDate }
                                </Moment>
                            </p>
                            <p className="font-['Mulish'] text-black font-[600] text-[12px] leading-[20px]">{ props.mentor }</p>
                        </div>
                    </div>
                    <div className='flex mt-[14px] justify-end gap-x-[6px]'>
                        <p className="font-['Mulish'] text-black font-[500] text-[13px] leading-[20px] opacity-50 line-through">Rp { props.discount }</p>
                        <p className="font-['Mulish'] text-green font-[800] text-[20px] leading-[20px]">Rp { props.fixedPrice }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
