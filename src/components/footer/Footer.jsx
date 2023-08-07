import React from 'react'
import Image from "next/image";
const Footer = () => {
  return (
    <div >
      <div>©2023 Lamamia. All rights reserved.</div>
      <div >
        <Image src="/1.png" width={15} height={15}  alt="shwebdev Facebook Account" />
        <Image src="/2.png" width={15} height={15}  alt="shwebdev" />
        <Image src="/3.png" width={15} height={15}  alt="shwebdev" />
        <Image src="/4.png" width={15} height={15}  alt="shwebdev" />
      </div>
    </div>
  )
}

export default Footer