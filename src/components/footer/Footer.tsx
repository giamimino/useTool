import React from 'react'
import styles from './style.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <p>Terms & Conditions</p>
        <p>Privacy & Policy</p>
      </div>
      <p>Original content © usetool.bar. This version customized and hosted by Gia Miminoshvili.</p>
    </footer>
  )
}