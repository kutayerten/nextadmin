import styles from "../footer/footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
            Kutay Erten
        </div>
        <div className={styles.text}>
        All rights reserved
        </div>
    </div>
  )
}

export default Footer