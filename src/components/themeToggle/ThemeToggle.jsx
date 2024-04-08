"use client"
import { useContext } from 'react'

import Image from 'next/image'
import styles from './themeToggle.module.sass'

// context
import {ThemeContext} from '@/context/ThemeContext'

const ThemeToggle = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <div className={styles.container}>
      <Image src="/moon.png" width={14} height={14} alt="moon"/>
      <div className={styles.ball}></div>
      <Image src="/sun.png" width={14} height={14} alt="sun"/>
    </div>
  )
}

export default ThemeToggle