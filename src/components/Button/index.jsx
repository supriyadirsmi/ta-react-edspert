import React from 'react'
import styles from './styles.module.css'

export default function Button(props) {
  return ( <button className={props.variant === 'signup' && styles['btn-signup']}>{props.text}</button> )
}
