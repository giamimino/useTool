'use client'
import React from 'react'
import styles from './style.module.scss'
import { Icon } from '@iconify/react'

export default function Header() {
  return (
    <header className={styles.header}>
      <span></span>
      <span></span>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}><Icon icon={'mdi:dots-hexagon'} /></button>
      <nav>
        <button>Log In</button>
        <button>Register</button>
      </nav>
    </header>
  )
}
