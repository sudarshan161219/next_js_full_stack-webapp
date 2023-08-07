import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

// async function getData() {
//   const res = await fetch("http://localhost:3000/api/posts", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

const Blog = async () => {
  // const data = await getData();
  return (
    <div className={styles.mainContainer}>
      {/* {data.map((item) => (
        <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}  */}

      <Link href={`/blog/testId`} className={styles.container} >
        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/442189/pexels-photo-442189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Hello, World</h1>
          <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur odit temporibus accusantium ad excepturi provident expedita aliquid quod? Sapiente, dicta necessitatibus! Voluptatum repudiandae nihil officia tenetur quidem aliquid aspernatur! Earum!</p>
        </div>
      </Link>


      <Link href={`/blog/testId`} className={styles.container} >
        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/442189/pexels-photo-442189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Hello, World</h1>
          <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur odit temporibus accusantium ad excepturi provident expedita aliquid quod? Sapiente, dicta necessitatibus! Voluptatum repudiandae nihil officia tenetur quidem aliquid aspernatur! Earum!</p>
        </div>
      </Link>

      <Link href={`/blog/testId`} className={styles.container} >
        <div className={styles.imageContainer}>
          <Image
            src='https://images.pexels.com/photos/442189/pexels-photo-442189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Hello, World</h1>
          <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur odit temporibus accusantium ad excepturi provident expedita aliquid quod? Sapiente, dicta necessitatibus! Voluptatum repudiandae nihil officia tenetur quidem aliquid aspernatur! Earum!</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
