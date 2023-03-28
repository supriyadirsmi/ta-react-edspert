import React from 'react'
import modelBanner from '../../assets/img/banner-model.png'

export default function HeroBanner() {
    return (
        <div className='container-banner flex h-[calc(100vh-105px)]'>
            <div className='basis-1/2'>
                <h1>Jadi expert bersama edspert.id</h1>
                <p className='desc-text mt-[27px] w-[90%]'>Tingkatkan skill dan pengetahuan bersama para mentor terbaik di bidangnya, untuk siapkan karir impian anda.</p>
            </div>
            <div className='basis-1/2 flex justify-center'>
                <img src={modelBanner} alt='Tugas Akhir Edspert React Batch 3 Supriyadi'/>
            </div>
        </div>
    )
}
