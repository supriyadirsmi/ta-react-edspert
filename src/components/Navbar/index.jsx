import React from 'react'
import arrowDown from '../../assets/img/arrow-down.svg'
import arrowUp from '../../assets/img/arrow-up.svg'
import Button from '../Button'

export default function Navbar() {
    return (
        <nav className='navigation'>
            <p className='logo-text'>LOGO</p>
            <div className='navmenu'>
                <ul>
                    <li><a href='/'>Program <img src={arrowDown} alt="edspert batch 3" className='ml-[9px]'/></a></li>
                    <li><a href='/'>Bidang Ilmu <img src={arrowUp} alt="edspert batch 3" className='ml-[9px]'/></a></li>
                    <li><a href='/'>Tentang Edspert</a></li>
                </ul>
            </div>
            <Button text='Masuk/Daftar' variant='signup'/>
        </nav>
    )
}
