import styles from '@/app/components/common/navbar.module.css';
import Link from "next/link";

const navbar = () => {
    return (
        <>
            <nav className={styles.navbar}>
                <div className='d-flex'>
                    <ul className={styles.navbarList}>
                        <li className={styles.navbarItem}>
                            <Link className={styles.navbarLink} href="/">
                                Home
                            </Link>
                        </li>
                        <li className={styles.navbarItem}>
                            <Link className={styles.navbarLink} href="/about">
                                About
                            </Link>
                        </li>
                        <li className={styles.navbarItem}>
                            <Link className={styles.navbarLink} href="/movie">
                                Movie
                            </Link>
                        </li>
                        <li className={styles.navbarItem}>
                            <Link className={styles.navbarLink} href="/contact">
                                Contact
                            </Link>
                        </li>
                        <li className={styles.navbarItem}>
                            <Link className={styles.navbarLink} href="#">
                                Login
                            </Link>
                        </li>
                        <li className={styles.navbarItem}>
                            <Link className={styles.navbarLink} href="#">
                                Register
                            </Link>
                        </li>
                    </ul>

                   
                </div>
            </nav>
        </>
    )
}

export default navbar;
