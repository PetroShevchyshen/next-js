import Image from 'next/image';
import myImage from './me.jpeg';
import styles from './about.module.css';
export default function AboutPage() {
  return (
    <article className={styles.root}>
      <Image src={myImage} alt="me" loading="eager" />
      <div className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus et
        voluptate perspiciatis fugiat quod tempora aut ex quibusdam doloribus
        reiciendis obcaecati aliquid, nobis nesciunt debitis placeat, at saepe
        aperiam quam.
      </div>
    </article>
  );
}
