// import React from "react";
// import Image from "next/image";
// import styles from "./styles.module.css"
// import Link from "next/link";
// import { ICategories } from "../types";


// const CategoriesCard = ({ dataCategories, imgSrc }: ICategories) => {

//     const { slug, title, text } = dataCategories


//     return (
//         <div className={styles.card}>
//             <Image
//                 className={styles.img}
//                 quality={100}
//                 alt={"Отзыв аватар"}
//                 width={300}
//                 height={380}
//                 src={imgSrc}
//                 sizes="100vw"
//                 priority
//             />
//             <h3 className={styles.name}>{title}</h3>
//             <div className={styles.text}>{text}</div>
//             <Link className={styles.link} href={slug}>Перейти</Link>
//         </div>
//     );
// }

// export default CategoriesCard;