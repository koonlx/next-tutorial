'use client';
import React, { useEffect, useState } from 'react';
import styles from './contact.module.css';
import Image from 'next/image';
function ContentPage() {
  const [isClient, setIsClient] = useState(false);
  const a = Math.random();
  console.log(a);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={'/contact.png'}
          alt="contact image"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.formContainer}>
        {isClient && a}
        <form className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button onClick={() => console.log('clicked')}>Send</button>
        </form>
      </div>
    </div>
  );
}

export default ContentPage;
