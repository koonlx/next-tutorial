import React from 'react';
import styles from './singlepost.module.css';
import Image from 'next/image';

function SinglePostPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={'/post.png'} alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image className={styles.avatar} src={'/noavatar.png'} alt="" fill />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Date</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Date</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inure velit
          quisquam natus blanditiis? Autem, dolore consectetur sunt quod tem
        </div>
      </div>
    </div>
  );
}

export default SinglePostPage;
