import Header from '../components/Header'
import Navbar from '../components/Navbar'

import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Navbar />   */}
      <Header />
    </div>
  )
}
