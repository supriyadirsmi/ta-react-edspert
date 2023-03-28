import React from 'react'

export default function Footer() {
    return (
        <div className='container-footer flex'>
            <div className='basis-1/2'>
                <p className="font-['Be_Vietnam_Pro'] text-grey font-[700] text-[16px] leading-[23px]">TAGLINE edspert disini</p>
                <p className="mt-[20px] w-[60%] font-['Be_Vietnam_Pro'] text-grey font-[600] text-[16px] leading-[24px]">Jl. Watugede No.58, Wonorejo, Sariharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581</p>
            </div>
            <div className='flex flex-col basis-1/2'>
                <div className='flex'>
                    <div className='footer-menu'>
                        <p className="font-['Be_Vietnam_Pro'] text-black font-[700] text-[16px] leading-[23px]">Program</p>
                        <ul>
                            <li><a href='/'>Online Course</a></li>
                            <li><a href='/'>Mini bootcamp</a></li>
                            <li><a href='/'>Bootcamp</a></li>
                        </ul>
                    </div>
                    <div className='footer-menu'>
                        <p className="font-['Be_Vietnam_Pro'] text-black font-[700] text-[16px] leading-[23px]">Bidang ilmu</p>
                        <ul>
                            <li><a href='/'>Digital marketing</a></li>
                            <li><a href='/'>Product management</a></li>
                            <li><a href='/'>English</a></li>
                            <li><a href='/'>Programming</a></li>
                        </ul>
                    </div>
                    <div className='footer-menu'>
                        <p className="font-['Be_Vietnam_Pro'] text-black font-[700] text-[16px] leading-[23px]">Tentang edspert</p>
                        <ul>
                            <li><a href='/'>Bantuan</a></li>
                            <li><a href='/'>Kontak kami</a></li>
                            <li><a href='/'>Media sosial</a></li>
                        </ul>
                    </div>
                </div>
                <p className="mt-[120px] font-['Be_Vietnam_Pro'] text-grey font-[700] text-[16px] leading-[23px]">Edspert, copyright. Alamat boleh ditaruh disini apabila diinginkan.</p>
            </div>
        </div>
    )
}
