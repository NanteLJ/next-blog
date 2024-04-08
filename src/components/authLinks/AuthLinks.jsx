import Link from 'next/link'
import styles from './authLinks.module.sass'

const AuthLinks = () => {
  const status = false
  return (<>
    {status ? 
    (<>
      <Link href="/write">Write</Link>
      <span className={styles.link}>Logout</span>
    </>) : 
    (
      <Link href="/login">Login</Link>
    )}
  </> )
}

export default AuthLinks