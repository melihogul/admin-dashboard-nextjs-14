import { MdCopyright } from 'react-icons/md'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>ogul.dev</div>
        <div className={styles.text}><MdCopyright /> All rights reserved.</div>
    </div>
  )
}

export default Footer