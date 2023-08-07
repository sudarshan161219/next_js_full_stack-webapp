import React from 'react'
import Image from "next/image";
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container} >
      <div>©2023 shwebdev.in All rights reserved.</div>
      <div className={styles.imgcontainer} >
        <Image className={styles.icons} src="/1.png" width={20} height={20} alt="shwebdev Facebook Account" />
        <Image className={styles.icons} src="/2.png" width={20} height={20} alt="shwebdev" />
        <Image className={styles.icons} src="/3.png" width={20} height={20} alt="shwebdev" />
        <Image className={styles.icons} src="/4.png" width={20} height={20} alt="shwebdev" />
      </div>
    </div>
  )
}

export default Footer