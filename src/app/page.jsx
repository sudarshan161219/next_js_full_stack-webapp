import Image from "next/image";
import styles from "./page.module.css"
import heroImg from "../../public/hero.png"
import Button from "@/components/button/Button";
import React from 'react'

function page() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products.
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works"/>
        {/* <button  className={styles.button}>See Our Works</button> */}
      </div>
      <div className={styles.item}>
        <Image src={heroImg} alt="" className={styles.img} />
      </div>
    </div>
  )
}

export default page
