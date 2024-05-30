import Image from "next/image"
import styles from "../rightbar/rightbar.module.css"
import { MdDownload, MdPlayCircleFilled } from "react-icons/md"

const Rightbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.item}>
            <div className={styles.bgContainer}>
                <Image src="/astronaut.png" alt="" fill />
            </div>
            <div className={styles.texts}>
                <span className={styles.notification}>Available Now</span>
                <h3 className={styles.title}>How to use new version of the admin page ?</h3>
                <span className={styles.subtitle}>Takes 1 minutes to learn</span>
                <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <button className={styles.button}>
                   <MdPlayCircleFilled />
                    Watch
                </button>

            </div>
        </div>

        <div className={styles.item}>
            
            <div className={styles.texts}>
                <span className={styles.notification}>Amazing Version On Sale</span>
                <h3 className={styles.title}>How to use ?</h3>
                <span className={styles.subtitle}>Witout limit</span>
                <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <button className={styles.button}>
                   <MdDownload />
                    Learn
                </button>

            </div>
        </div>
    </div>
  )
}

export default Rightbar