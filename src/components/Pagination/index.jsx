import React from 'react'
import styles from './pagination.module.css'

export default function Pagination() {
    return (
        <div className={styles['pagination']}>
            <ul className={styles['pagination-nav']}>
                <li> &#60; Sebelumnya</li>
                <li className={styles['active']}>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>...</li>
                <li>10</li>
                <li className={styles['next']}>Selanjutnya &#62;</li>
            </ul>
        </div>
    )
}
