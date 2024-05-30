import { MdSupervisedUserCircle } from "react-icons/md"
import styles from "../card/card.module.css"

const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24}/>
      <div className={styles.texts}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.number}>10.373</span>
        <span className={styles.detail}>
          <span className={styles.positive}><span>12%</span> more than previous week</span>
        </span>
      </div>
    </div>
  )
}

export default Card